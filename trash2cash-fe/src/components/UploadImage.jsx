import React, { useState } from "react";
import axios from "axios";

export default function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [prediction, setPrediction] = useState("");

  const labelMap = {
    0: "Organik",
    1: "Anorganik",
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Pilih file dulu ya!");

    const formData = new FormData();
    formData.append("file", selectedFile);

    const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    console.log("🧾 Response dari backend:", response.data); // Tambahin ini!
    setPrediction(response.data.prediction);
    
    
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Header */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          <span className="text-black">1.</span> Upload
        </h1>

        <p className="text-xl text-green-700 font-semibold mb-2">
          ♻️ Ubah Sampah Jadi Cuan!
        </p>
        <p className="text-gray-700 max-w-xl mb-6">
          Sampah Bukan Sekadar Limbah—Ini Peluang...
        </p>

        {/* File Input */}
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          className="mb-4"
        />

        <button
          onClick={handleUpload}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg shadow-xl transition mb-8"
        >
          Upload Now
        </button>

        {/* Drag & Drop Placeholder */}
        <div className="bg-white rounded-2xl p-10 w-full max-w-md text-center shadow-xl border border-gray-200">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1375/1375106.png"
            alt="upload"
            className="w-14 h-14 mx-auto mb-4"
          />
          <p className="font-semibold text-gray-800">
            <span className="text-black">Drag & Drop</span> or{" "}
            <span className="text-blue-600 cursor-pointer">browse</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">JPEG, JPG, PNG</p>
        </div>
      </div>

      {/* Image Preview */}
      {previewURL && (
        <div className="relative z-10 mt-[-2rem] mb-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Gambar yang Diunggah
          </h2>
          <img
            src={previewURL}
            alt="Uploaded Preview"
            className="w-64 h-auto rounded-lg shadow-lg border border-gray-300"
          />
        </div>
      )}

      {/* Prediction Result */}
      {prediction !== "" && prediction !== null && prediction !== undefined && (
        <div className="relative z-10 pb-24">
          <div className="flex flex-col items-center justify-center px-4">
            <h2 className="text-3xl font-bold text-center text-[#322a27]">
              2. Hasil Analisis
            </h2>
            <p className="text-center mt-4 max-w-xl text-[#322a27]">
              🧠 <strong>AI Bekerja untuk Lingkungan!</strong><br />
              Gambar berhasil diunggah. Sistem kami mendeteksi bahwa gambar tersebut adalah:
            </p>
            <div className="mt-6 px-6 py-4 rounded-xl bg-green-100 text-green-800 font-semibold text-lg shadow-lg">
              ♻️ Prediksi:{" "}
              <span className="text-green-900">{labelMap[prediction]}</span>
            </div>
            <p className="mt-6 text-center text-[#322a27] max-w-md">
              Sekarang kamu bisa mengetahui cara daur ulangnya...
            </p>
          </div>
        </div>
      )}


      {/* Extra style */}
      <style>{`
        @keyframes slowping {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
