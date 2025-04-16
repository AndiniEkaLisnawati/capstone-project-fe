import React from 'react'
import UploadImage from '../UploadImage'
import { FaUsers as GroupIcon, FaArrowUp as ArrowUpIcon, FaBox as BoxIconLine, FaArrowDown as ArrowDownIcon } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import DashboardCard from '../DashboardCard';
import { StarIcon, FlagIcon, CheckIcon, PackageIcon } from "lucide-react";
import { FaClock } from "react-icons/fa";
import { Button } from  "flowbite-react";




export default function UserDashboard() {
  console.log("user dashboard")
  const [data, setData] = useState({
    points: 150,
    challengeCount: 20,
    completedChallenges: 1,
    ordersCount: 5,
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
  <>
  
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 pt-20">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard title="Total Poin" value={data.points} icon={StarIcon} />
        <DashboardCard title="Jumlah Tantangan" value={data.challengeCount} icon={FlagIcon} />
        <DashboardCard title="Tantangan Selesai" value={data.completedChallenges} icon={CheckIcon} />
        <DashboardCard title="Sampah Dijual" value={data.ordersCount} icon={PackageIcon} />
      </div>
    </div>

      <TrashInput/>

  </>
  );
  }
  
  const CardForm = ({ title, children }) => (
    <div className="bg-white dark:bg-gray-900 shadow rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{title}</h2>
      {children}
    </div>
  );
  
  const Label = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {children}
    </label>
  );
  
  const Input = ({ className = "", ...props }) => (
    <input
      className={`w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
  
  const Select = ({ options, onChange, className = "", ...props }) => (
    <select
      className={`w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white ${className}`}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    >
      <option value="">Pilih kategori sampah</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
  
  const DatePicker = ({ id, label, placeholder, onChange }) => (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        type="date"
        id={id}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value, e.target.value)}
      />
    </div>
  );

   function TrashInput() {
    const categoryOptions = [
      { value: "plastik", label: "Plastik" },
      { value: "kertas", label: "Kertas" },
      { value: "logam", label: "Logam" },
      { value: "kaca", label: "Kaca" },
      { value: "lainnya", label: "Lainnya" },
    ];
  
    const handleSelectChange = (value) => {
      console.log("Kategori sampah:", value);
    };
  
    return (
      <CardForm title="Form Penjualan Sampah">
        <div className="space-y-6">
          <div>
            <Label htmlFor="trashName">Nama Sampah</Label>
            <Input type="text" id="trashName" placeholder="Contoh: Botol plastik bekas" />
          </div>
  
          <div>
            <Label htmlFor="category">Kategori Sampah</Label>
            <Select options={categoryOptions} onChange={handleSelectChange} />
          </div>
  
          <div>
            <Label htmlFor="weight">Berat (kg)</Label>
            <Input type="number" step="0.1" min="0" id="weight" placeholder="Contoh: 1.5" />
          </div>
  
          <div>
            <DatePicker
              id="pickup-date"
              label="Tanggal Penjemputan"
              placeholder="Pilih tanggal"
              onChange={(date) => console.log("Tanggal penjemputan:", date)}
            />
          </div>
  
          <div>
            <Label htmlFor="pickup-time">Waktu Penjemputan</Label>
            <div className="relative">
              <Input
                type="time"
                id="pickup-time"
                onChange={(e) => console.log("Waktu penjemputan:", e.target.value)}
              />
              <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                <FaClock />
              </span>
            </div>
          </div>
  
          <div>
            <Label htmlFor="note">Catatan Tambahan</Label>
            <div className="relative">
              <Input
                type="text"
                placeholder="Contoh: Harap hubungi sebelum datang"
              />
            </div>
          </div>
  
          <div>
            <Label htmlFor="payment">Estimasi Pembayaran</Label>
            <div className="relative">
              <Input type="text" placeholder="Contoh: Rp10.000" className="pl-[62px]" />
              <span className="absolute left-0 top-1/2 flex h-11 w-[46px] -translate-y-1/2 items-center justify-center border-r border-gray-200 dark:border-gray-800">
                <span className="text-sm text-gray-500 dark:text-gray-400">Rp</span>
              </span>
            </div>
          </div>

          <div>
            <UploadImage/>
          </div>

          <div>
          <Button className=" w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800">
            Jual Sampah
          </Button>
          </div>
        </div>
      </CardForm>
    );
  }