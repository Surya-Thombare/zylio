// app/api/admin/generate-pages/route.js
import { NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

// Template for the dynamically generated pages
const PAGE_TEMPLATE = `'use client';
import { useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import Link from 'next/link';

export default function DynamicPage() {
  // This is a template for the dynamically generated pages
  // The placeholders will be replaced with actual data from the Excel file
  
  // Page data from Excel
  const pageData = {
    title: "{{TITLE}}",
    description: "{{DESCRIPTION}}",
    content: "{{CONTENT}}",
    image: "{{IMAGE}}",
    tags: {{TAGS}},
    createdAt: "{{CREATED_AT}}"
  };

  useEffect(() => {
    // Any client-side initialization can go here
    document.title = pageData.title;
  }, []);

  return (
    <Layout headerStyle={1} footerStyle={1} headerCls="header-style-2 header-style-4">
      <section className="section-box box-content-blog-2 box-content-blog-post">
        <div className="container">
          <div className="text-center blog-head">
            {pageData.tags && pageData.tags.length > 0 && (
              <span className="btn btn-brand-4-sm">{pageData.tags[0]}</span>
            )}
            <h2 className="heading-2 mb-20 mt-15">{pageData.title}</h2>
            {pageData.description && (
              <p className="text-lg">{pageData.description}</p>
            )}
          </div>
          
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="box-content-detail-blog">
                {pageData.image && (
                  <div className="box-image-header">
                    <img alt={pageData.title} src={pageData.image} />
                  </div>
                )}
                
                <div className="box-detail-info">
                  <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}`;

// Helper function to sanitize slugs
function sanitizeSlug(slug) {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Helper function to format JSON values for template insertion
function formatValueForTemplate(value) {
  if (value === undefined || value === null) {
    return 'null';
  }

  if (typeof value === 'string') {
    return `"${value.replace(/"/g, '\\"')}"`;
  }

  if (Array.isArray(value)) {
    return JSON.stringify(value);
  }

  return value;
}

export async function POST(request) {
  try {
    // Check for admin authentication (simple version)
    // In a real app, you would use a more secure session/token system
    // This is a simplified version for demo purposes

    const body = await request.json();
    const { pagesData } = body;

    if (!Array.isArray(pagesData) || pagesData.length === 0) {
      return NextResponse.json(
        { message: 'Invalid data format. Expected an array of page data.' },
        { status: 400 }
      );
    }

    const generatedPages = [];
    const appDir = path.join(process.cwd(), 'app');

    for (const pageData of pagesData) {
      // Validate required fields
      if (!pageData.title || !pageData.slug) {
        console.warn('Skipping page with missing title or slug:', pageData);
        continue;
      }

      // Sanitize the slug
      const slug = sanitizeSlug(pageData.slug);

      // Create the directory path
      const pageDirPath = path.join(appDir, slug);

      // Create directory if it doesn't exist
      if (!fs.existsSync(pageDirPath)) {
        fs.mkdirSync(pageDirPath, { recursive: true });
      }

      // Generate page content from template
      let pageContent = PAGE_TEMPLATE;

      // Replace placeholders with actual data
      for (const [key, value] of Object.entries(pageData)) {
        const placeholder = new RegExp(`{{${key.toUpperCase()}}}`, 'g');
        pageContent = pageContent.replace(placeholder, formatValueForTemplate(value));
      }

      // Replace any remaining placeholders with null
      pageContent = pageContent.replace(/{{[A-Z_]+}}/g, 'null');

      // Write the page.js file
      const pageFilePath = path.join(pageDirPath, 'page.js');
      fs.writeFileSync(pageFilePath, pageContent, 'utf8');

      // Add to the list of generated pages
      generatedPages.push({
        title: pageData.title,
        route: `/${slug}`,
        filePath: pageFilePath
      });
    }

    if (generatedPages.length === 0) {
      return NextResponse.json(
        { message: 'No valid pages were found in the data.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Successfully generated ${generatedPages.length} pages.`,
      generatedPages
    });

  } catch (error) {
    console.error('Error generating pages:', error);
    return NextResponse.json(
      { message: `Error generating pages: ${error.message}` },
      { status: 500 }
    );
  }
}