import React from 'react'
import { PackageIcon, ShoppingCartIcon, CheckIcon, ScaleIcon } from "lucide-react";
import DashboardCard from '../DashboardCard';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function CollectorDashboard() {
  console.log("collector dashboard")
const [data, setData] = useState({
    availableTrashCount: 10,
    purchasedTrashCount: 18,
    completedTransactions: 90,
    totalTrashWeight: 2,
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/trash")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
      })
      .catch((err) => {
        console.error("Gagal mengambil data dashboard collector:", err);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
  <h1 className="text-2xl font-bold mb-6 pt-20">Dashboard Collector</h1>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <DashboardCard 
      title="Sampah Tersedia" 
      value={data.availableTrashCount} 
      icon={PackageIcon} 
    />
    <DashboardCard 
      title="Sampah Dibeli" 
      value={data.purchasedTrashCount} 
      icon={ShoppingCartIcon} 
    />
    <DashboardCard 
      title="Transaksi Selesai" 
      value={data.completedTransactions} 
      icon={CheckIcon} 
    />
    <DashboardCard 
      title="Total Pembelian (kg)" 
      value={data.totalTrashWeight} 
      icon={ScaleIcon} 
    />
  </div>

  {/* Optional: Tombol ke halaman transaksi */}
  <div className="mt-10">
    <Link to="/dashboard/transactions">
      <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
        Lihat Transaksi
      </button>
    </Link>
  </div>
  <br />
<div>
    <TrashMarketList/>
</div>

</div>


  )
}

const trashItems = [
  {
    id: 1,
    name: "Botol Plastik",
    jenis: "Plastik",
    jumlah: "3 Kg",
    harga: "Rp12.000",
    image: "/images/sampah/botol.jpg",
  },
  {
    id: 2,
    name: "Kertas Bekas",
    jenis: "Kertas",
    jumlah: "5 Kg",
    harga: "Rp20.000",
    image: "/images/sampah/kertas.jpg",
  },
  {
    id: 3,
    name: "Kaleng Minuman",
    jenis: "Logam",
    jumlah: "2 Kg",
    harga: "Rp15.000",
    image: "/images/sampah/kaleng.jpg",
  },
  {
    id: 4,
    name: "Kaca Pecah",
    jenis: "Kaca",
    jumlah: "1 Kg",
    harga: "Rp5.000",
    image: "/images/sampah/kaca.jpg",
  },
];

 function TrashMarketList() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Sampah Dijual oleh Pengepul
        </h3>
      </div>

      <div className="max-w-full overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Jenis Sampah</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Kategori</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Jumlah</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Harga</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {trashItems.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[50px] w-[50px] rounded-md object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{item.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{item.jenis}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{item.jumlah}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{item.harga}</td>
                <td className="px-4 py-3">
                  <button className="rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-green-700">
                    Beli
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

