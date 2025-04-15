import React from 'react'
import UserDashboard from "../components/dashboard/UserDashboard";
import PengepulDashboard from "../components/dashboard/PengepulDashboard";
import AdminDashboard from "../components/dashboard/AdminDashboard";

const DashboardPage = () => {
  const userRole = localStorage.getItem("role"); 
  console.log("halo aku page")
  return (
    <>
      {userRole === "User" && <UserDashboard />}
      {userRole === "Pengepul" && <PengepulDashboard />}
      {userRole === "Admin" && <AdminDashboard />}
    </>
  );
}

export default DashboardPage;