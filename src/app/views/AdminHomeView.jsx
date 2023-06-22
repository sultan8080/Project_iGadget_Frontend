import React from "react";
import AdminDashboardHeader from "../components/Admin/AdminDashboardHeader";
import AdminBody from "../components/Admin/AdminBody";

const AdminHomeView = () => {
  return (
    <div className="antialiased bg-gray-50">
      <AdminDashboardHeader />
      <AdminBody />
    </div>
  );
};

export default AdminHomeView;
