import React from 'react'
import UploadImage from '../UploadImage'
import { FaUsers as GroupIcon, FaArrowUp as ArrowUpIcon, FaBox as BoxIconLine, FaArrowDown as ArrowDownIcon } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import DashboardCard from '../DashboardCard';
import { StarIcon, FlagIcon, CheckIcon, PackageIcon } from "lucide-react";




export default function UserDashboard() {
  const [data, setData] = useState({
    points: 0,
    challengeCount: 0,
    completedChallenges: 0,
    ordersCount: 0,
  });

  useEffect(() => {
    fetch("http://localhost:3000/dashboard/user")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
      })
      .catch((err) => {
        console.error("Gagal mengambil data dashboard user:", err);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 pt-20">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard title="Total Poin" value={data.points} icon={StarIcon} />
        <DashboardCard title="Jumlah Tantangan" value={data.challengeCount} icon={FlagIcon} />
        <DashboardCard title="Tantangan Selesai" value={data.completedChallenges} icon={CheckIcon} />
        <DashboardCard title="Pesanan Sampah" value={data.ordersCount} icon={PackageIcon} />
      </div>
    </div>
  );
  }
  
