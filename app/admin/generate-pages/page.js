'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from "@/components/layout/Layout";
import Link from 'next/link';
import * as XLSX from 'xlsx';

export default function AdminPageGenerator() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);
  const [previewData, setPreviewData] = useState([]);
  const [generating, setGenerating] = useState(false);
  const [generationResult, setGenerationResult] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const isAuth = localStorage.getItem('adminAuthenticated');
    if (isAuth !== 'true') {
      router.push('/admin');
    } else {
      setAuthenticated(true);
    }
    setLoading(false);
  }, [router]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setError('');
    setPreviewData([]);
    setGenerationResult(null);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const data = evt.target.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);

          // Show preview of the first 5 rows
          setPreviewData(jsonData.slice(0, 5));
        } catch (error) {
          console.error('Error parsing Excel file:', error);
          setError('Error parsing Excel file. Please check the format and try again.');
        }
      };
      reader.readAsBinaryString(selectedFile);
    }
  };

  const generatePages = async () => {
    if (!file) {
      setError('Please select an Excel file first');
      return;
    }

    setGenerating(true);
    setError('');
    setGenerationResult(null);

    try {
      const reader = new FileReader();
      reader.onload = async (evt) => {
        try {
          const data = evt.target.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);

          // Send the data to our API endpoint for page generation
          const response = await fetch('/api/admin/generate-pages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pagesData: jsonData }),
          });

          const result = await response.json();

          if (response.ok) {
            setGenerationResult({
              success: true,
              message: result.message,
              generatedPages: result.generatedPages
            });
          } else {
            throw new Error(result.message || 'Failed to generate pages');
          }
        } catch (error) {
          console.error('Error generating pages:', error);
          setError(error.message || 'Error generating pages');
        } finally {
          setGenerating(false);
        }
      };
      reader.readAsBinaryString(file);
    } catch (error) {
      console.error('Error reading file:', error);
      setError('Error reading file');
      setGenerating(false);
    }
  };

  if (loading) {
    return (
      <Layout headerStyle={1} footerStyle={1} headerCls="header-style-2 header-style-4">
        <div className="container mt-5 mb-5 text-center">
          <h2>Loading...</h2>
        </div>
      </Layout>
    );
  }

  if (!authenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <Layout headerStyle={1} footerStyle={1} headerCls="header-style-2 header-style-4">
      <section className="section-box box-content-blog-2">
        <div className="container">
          <div className="text-center blog-head">
            <span className="btn btn-brand-4-sm">Admin Tools</span>
            <h2 className="heading-2 mb-20 mt-15">Page Generator</h2>
          </div>

          <div className="row mt-50">
            <div className="col-lg-3 mb-30">
              {/* Admin Sidebar */}
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-4">Admin Navigation</h5>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <Link href="/admin/dashboard" className="text-decoration-none">Dashboard</Link>
                    </li>
                    <li className="list-group-item active">
                      <Link href="/admin/generate-pages" className="text-decoration-none">Page Generator</Link>
                    </li>
                    <li className="list-group-item">
                      <Link href="/admin/users" className="text-decoration-none">Manage Users</Link>
                    </li>
                    <li className="list-group-item">
                      <Link href="/admin/settings" className="text-decoration-none">Settings</Link>
                    </li>
                    <li className="list-group-item">
                      <button
                        onClick={() => {
                          localStorage.removeItem('adminAuthenticated');
                          router.push('/admin');
                        }}
                        className="btn btn-sm btn-outline-danger mt-3"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-9 mb-30">
              {/* Main Content */}
              <div className="card">
                <div className="card-body">
                  <h4 className="mb-4">Generate Pages from Excel</h4>

                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  {generationResult && generationResult.success && (
                    <div className="alert alert-success" role="alert">
                      <h5>Success!</h5>
                      <p>{generationResult.message}</p>
                      <hr />
                      <h6>Generated Pages:</h6>
                      <ul>
                        {generationResult.generatedPages.map((page, index) => (
                          <li key={index}>
                            <Link href={page.route} target="_blank">{page.title}</Link> - {page.route}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-4">
                    <label htmlFor="excelFile" className="form-label">Upload Excel File</label>
                    <input
                      type="file"
                      className="form-control"
                      id="excelFile"
                      accept=".xlsx, .xls"
                      onChange={handleFileChange}
                      disabled={generating}
                    />
                    <div className="form-text">
                      The Excel file should have columns for page data (title, slug, content, etc.)
                    </div>
                  </div>

                  {previewData.length > 0 && (
                    <div className="mb-4">
                      <h5>Data Preview (First 5 rows)</h5>
                      <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              {Object.keys(previewData[0]).map((header) => (
                                <th key={header}>{header}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {previewData.map((row, rowIndex) => (
                              <tr key={rowIndex}>
                                {Object.values(row).map((cell, cellIndex) => (
                                  <td key={cellIndex}>{String(cell)}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="form-text">
                        Required columns: <code>title</code>, <code>slug</code>, <code>content</code>
                      </div>
                    </div>
                  )}

                  <button
                    className="btn btn-primary"
                    onClick={generatePages}
                    disabled={!file || generating}
                  >
                    {generating ? 'Generating Pages...' : 'Generate Pages'}
                  </button>
                </div>
              </div>

              {/* Template Information Card */}
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="mb-3">How It Works</h5>
                  <p>This tool generates new pages based on your Excel data. Here's how to use it:</p>

                  <ol>
                    <li>Prepare an Excel file with data for your pages</li>
                    <li>Each row will become a separate page</li>
                    <li>Required columns: <code>title</code>, <code>slug</code>, and <code>content</code></li>
                    <li>Optional columns: <code>description</code>, <code>image</code>, <code>tags</code>, etc.</li>
                    <li>Upload the file and click "Generate Pages"</li>
                  </ol>

                  <div className="alert alert-info" role="alert">
                    <strong>Note:</strong> Generated pages use the template defined in your code.
                    Any existing pages with the same route will be overwritten.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}