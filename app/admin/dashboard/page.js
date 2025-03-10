'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from "@/components/layout/Layout";
import Link from 'next/link';

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
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

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    router.push('/admin');
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
            <span className="btn btn-brand-4-sm">Admin Dashboard</span>
            <h2 className="heading-2 mb-20 mt-15">Welcome to Admin Panel</h2>
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
                    <li className="list-group-item">
                      <Link href="/admin/users" className="text-decoration-none">Manage Users</Link>
                    </li>
                    <li className="list-group-item">
                      <Link href="/admin/settings" className="text-decoration-none">Settings</Link>
                    </li>
                    <li className="list-group-item">
                      <Link href="/admin/generate-pages" className="text-decoration-none">generate-pages</Link>
                    </li>
                    <li className="list-group-item">
                      <button
                        onClick={handleLogout}
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
                  <h4 className="mb-4">Dashboard Overview</h4>

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="card bg-light">
                        <div className="card-body text-center">
                          <h3>125</h3>
                          <p className="mb-0">Total Users</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card bg-light">
                        <div className="card-body text-center">
                          <h3>47</h3>
                          <p className="mb-0">New Orders</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card bg-light">
                        <div className="card-body text-center">
                          <h3>$14,500</h3>
                          <p className="mb-0">Monthly Revenue</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5>Recent Activity</h5>
                    <ul className="list-group mt-3">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        New user registered
                        <span className="badge bg-primary rounded-pill">Just now</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        New order placed #1234
                        <span className="badge bg-primary rounded-pill">2 hours ago</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Payment received from client #5678
                        <span className="badge bg-primary rounded-pill">Yesterday</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Server maintenance completed
                        <span className="badge bg-primary rounded-pill">2 days ago</span>
                      </li>
                    </ul>
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