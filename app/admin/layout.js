// app/admin/layout.js
export default function AdminLayout({ children }) {
  return (
    <>
      {/* This layout will wrap all admin pages */}
      {/* You can add common elements like headers, footers, or navigation specific to admin here */}
      {children}
    </>
  );
}