import React from 'react'
import UserDashboard from "../components/dashboard/UserDashboard";
import CollectorDashboard from '../components/dashboard/CollectorDashboard';
import AdminDashboard from "../components/dashboard/AdminDashboard";

const DashboardPage = () => {
  const userRole = localStorage.getItem("role"); 
  console.log("halo aku page")
  return (
    <>
      {userRole === "user" && <UserDashboard />}
      {userRole === "collector" && <CollectorDashboard />}
      {userRole === "admin" && <AdminDashboard />}
    </>
  );
}

export default DashboardPage;