import { motion } from "framer-motion";
import React from "react";
import Point from "../assets/images/point-confeti.png";
import Organik from "../assets/images/sampah-organik.jpg";
import NonOrganik from "../assets/images/sampah-non-organik.jpg";




// Dummy data upload
const uploads = [
  {
    type: "Organik",
    date: "3 March 2025",
    image: Organik,
    color: "bg-green-400"
  },
  {
    type: "Non Organik",
    date: "10 March 2025",
    image: NonOrganik,
    color: "bg-red-500"
  },
  {
    type: "Organik",
    date: "24 March 2025",
    image: Organik,
    color: "bg-green-400"
  }
];

// Card component tanpa lib tambahan
const Card = ({ children, className }) => (
  <div className={`rounded-2xl border bg-white shadow ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

// UploadCard gabung di sini
const UploadCard = ({ type, date, image, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="bg-lime-200 ">
        <CardContent className="p-2">
          <div className={`text-white text-sm px-2 mb-2 py-1 rounded-md ${color}`}>
            {type}, {date}
          </div>
          <img
            src={image}
            alt={type}
            className="w-full h-24 object-cover rounded-md"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function PointsDashboard() {
  return (
    
    <div className="flex min-h-screen bg-white px-6 py-4 md:px-20 lg:px-[6rem] mt-[10rem]">
      {/* Sidebar */}
      <div className="w-35 bg-lime-300 rounded-2xl"></div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-8 relative">




        <motion.h1
          className="text-6xl font-bold text-gray-800 mb-2 items-start"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Good Morning, <span className="bg-lime-300 px-2 rounded">Udin!</span>
        </motion.h1>
        <p className="text-gray-600 mb-6">See your point progress here</p>

        <motion.div
          className="relative mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <img src={Point} alt="coin" className="w-140 h-105" />

          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
            animate={{ rotate: [0, 10, -10, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
          </motion.div>
        </motion.div>

        <motion.p
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          175 Points
        </motion.p>

        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xl font-semibold text-gray-800">
            Congratulation on your Achievement!!
          </p>
          <p className="text-gray-600">Keep going!</p>
        </motion.div>
      </div>

      {/* Uploads Section */}
      <div className="w-[300px] border-l border-gray-300 p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Photo you upload</h2>
        <div className="space-y-4">
          {uploads.map((item, idx) => (
            <UploadCard
              key={idx}
              type={item.type}
              date={item.date}
              image={item.image}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
