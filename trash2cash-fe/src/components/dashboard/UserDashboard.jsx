import React from 'react'
import UploadImage from '../UploadImage'
import { FaUsers as GroupIcon, FaArrowUp as ArrowUpIcon, FaBox as BoxIconLine, FaArrowDown as ArrowDownIcon } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import DashboardCard from '../DashboardCard';
import { StarIcon, FlagIcon, CheckIcon, PackageIcon } from "lucide-react";
import { FaClock } from "react-icons/fa";
import { Button } from  "flowbite-react";
import axios from 'axios';




export default function UserDashboard() {
  console.log("user dashboard")
  console.log(localStorage.getItem("token"));

  const [data, setData] = useState({
    points: 150,
    challengeCount: 20,
    completedChallenges: 1,
    ordersCount: 5,
  });

  useEffect(() => {
    fetch("http://localhost:3000/user")
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
  
  function TrashInput() {
    const [formData, setFormData] = useState({
      name: "",
      weight: "",
      location: '',
      status: "Available", // Status awal
    });
  
    const [image, setImage] = useState(null); // Menyimpan gambar yang diupload

  
    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
      }));
    };

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
  
      // Membuat FormData untuk mengirimkan data termasuk gambar
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("weight", formData.weight);
      payload.append("location", formData.location);
      payload.append("status", formData.status); // Menambahkan status
  
      if (image) {
        payload.append("file", image); // Menambahkan gambar yang dipilih
      }
  
      try {
        const response = await axios.post("https://reasonable-courtesy-production.up.railway.app/api/trash", payload, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
  
        alert("Sampah berhasil dijual: " + response.data.message);
        setFormData({
          name: "",
          weight: "",
          location: '',
          status: "Available", // Reset status
        });
        setImage(null); // Reset gambar setelah submit
      } catch (error) {
        const errorMessage = error.response?.data?.message || "Gagal menjual sampah.";
        alert("Error: " + errorMessage);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <CardForm title="Form Penjualan Sampah">
          <div className="space-y-6">
            <div>
              <Label htmlFor="name">Nama Sampah</Label>
              <Input
                type="text"
                id="name"
                placeholder="Contoh: Botol plastik bekas"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
  
            <div>
              <Label htmlFor="weight">Berat (kg)</Label>
              <Input
                type="number"
                step="0.1"
                min="0"
                id="weight"
                placeholder="Contoh: 1.5"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
  
            <div>
              <Label htmlFor="location">Lokasi</Label>
              <Input
                type="text"
                id="location"
                placeholder="Contoh: Jakarta"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
  
            <div>
              <Label htmlFor="status">Status Sampah</Label>
              <Select
                options={[
                  { label: "Tersedia", value: "Available" },
                  { label: "Dijual", value: "Sold" },
                ]}
                onChange={(value) => setFormData((prev) => ({ ...prev, status: value }))}
              />
            </div>
  
            <div>
              <Label htmlFor="file">Upload Gambar Sampah</Label>
              <input
                type="file"
                id="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
  
            <div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800"
              >
                Jual Sampah
              </Button>
            </div>
          </div>
        </CardForm>
      </form>
    );
  }