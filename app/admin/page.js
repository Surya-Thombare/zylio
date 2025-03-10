'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from "@/components/layout/Layout";
import Link from 'next/link';

export default function AdminAuthentication() {
  const [accessCode, setAccessCode] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Check if already authenticated on component mount
  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuthenticated');
    if (isAuth === 'true') {
      setAuthenticated(true);
      router.push('/admin/dashboard');
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessCode }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store authentication state in localStorage
        localStorage.setItem('adminAuthenticated', 'true');
        setAuthenticated(true);
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Authentication failed');
      }
    } catch (err) {
      setError('An error occurred during authentication');
      console.error('Authentication error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout headerStyle={1} footerStyle={1} headerCls="header-style-2 header-style-4">
      <section className="section-box box-content-login">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto">
              <div className="box-form-register">
                <h3 className="title-register">Admin Access</h3>
                <p className="text-md neutral-700">Enter the admin access code to continue</p>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <form className="form-register" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Access Code <span className="brand-1">*</span></label>
                    <input
                      className="form-control"
                      type="password"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      placeholder="Enter admin access code"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <button
                      className="btn btn-black btn-rounded"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? 'Verifying...' : 'Access Admin Panel'}
                      <svg xmlns="http://www.w3.org/2000/svg" width={23} height={8} viewBox="0 0 23 8" fill="none">
                        <path d="M22.5 4.00032L18.9791 0.479492V3.3074H0.5V4.69333H18.9791V7.52129L22.5 4.00032Z" fill="true" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}