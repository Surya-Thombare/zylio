'use client';
import { useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import Link from 'next/link';

export default function DynamicPage() {
  // This is a template for the dynamically generated pages
  // The placeholders will be replaced with actual data from the Excel file
  
  // Page data from Excel
  const pageData = {
    title: ""Cloud Computing Services"",
    description: ""Scalable and secure cloud infrastructure solutions for modern businesses"",
    content: ""<p>Our cloud computing services provide scalable and secure infrastructure for your applications.</p><h3>Services Include</h3><ul><li>Cloud migration</li><li>Managed cloud services</li><li>Cloud security</li><li>Hybrid cloud solutions</li></ul><p>Contact us today to discuss your cloud strategy!</p>"",
    image: ""https://plus.unsplash.com/premium_photo-1682050733502-f58b7f499490?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"",
    tags: "Technology,Cloud,Services",
    createdAt: "null"
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
}