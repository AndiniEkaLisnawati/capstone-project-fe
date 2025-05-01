import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, VideoIcon, HelpCircle } from 'lucide-react';
import { useNavigate } from "react-router-dom";


const videoContent = [
    {
      judul: "Z​ero Waste Lifestyle - Terapkan 6R untuk Gaya Hidup",
      link: "https://www.youtube.com/embed/dEu3-ZNaok0",
    },
    {
      judul: "Sumber Energi Ramah Lingkungan",
      link: "https://www.youtube.com/embed/RMxchSPq0zM",
    },
    {
      judul: "Rumah Ramah Lingkungan",
      link: "https://www.youtube.com/embed/XQgXaNopir8?si=Et_oG86fVP6Kbp-L",
    },
    {
        judul: "Energi Terbarukan Terbesar di Indonesia",
        link: "https://www.youtube.com/embed/jSMkRU0e2tY?si=MbvWJl6v6PYQe7g3", // gunakan embed link
      },
      {
        judul: "G​aya Hidup Ramah Lingkungan",
        link: "https://www.youtube.com/embed/rHFx82rd4-Y",
      },
      {
        judul: "T​eknologi Ramah Lingkungan di Kehidupan Kita",
        link: "https://www.youtube.com/embed/BZMP9yhX6xg",
      },
      {
        judul: "H​idup Ramah Lingkungan untuk Adaptasi & Mitigasi",
        link: "https://www.youtube.com/embed/8b6aRFQf0L4", // gunakan embed link
      },
      {
        judul: "A​nimasi Anak Ramah Lingkungan",
        link: "https://www.youtube.com/embed/AvLT7U73FCc",
      },
      {
        judul: "L​angkah Kecil Menuju Green Economy",
        link: "https://www.youtube.com/embed/KgnHDgs4eFI?si=TOpqoCC2HZsBG0kV",
      },
  ];
  
  const articleContent = [
    {
      judul: "Cara Daur Ulang di Rumah",
      slug: "cara-daur-ulang-di-rumah",
      artikel: "Cara Daur Ulang di Rumah: Langkah Mudah untuk Bumi yang Lebih Sehat",
    },
    {
      judul: "Apa Itu Ekonomi Hijau?",
      slug: "apa-itu-ekonomi-hijau",
      artikel: "Ekonomi hijau adalah konsep pembangunan berkelanjutan yang ramah lingkungan.",
    },
    {
      judul: "Mengelola Sampah Organik",
      slug: "mengelola-sampah-organik",
      artikel: "Sampah organik dapat diolah menjadi kompos atau energi terbarukan. Yuk, pelajari caranya!",
    },
    {
      judul: "Konsep Zero Waste",
      slug: "konsep-zero-waste",
      artikel: "Zero waste adalah gaya hidup yang bertujuan untuk mengurangi produksi sampah seminimal mungkin—idealnya hingga nol.",
    },
    {
      judul: "Energi Terbarukan di Rumah",
      slug: "energi-terbarukan-di-rumah",
      artikel: "Energi terbarukan adalah energi yang berasal dari sumber daya alam yang tidak habis, seperti matahari, angin, dan air.",
    },
    {
      judul: "Mengenal Perubahan Iklim",
      slug: "mengenal-perubahan-iklim",
      artikel: "Perubahan iklim adalah perubahan jangka panjang dalam suhu dan pola cuaca di bumi.",
    },
    {
      judul: "Manfaat Mengurangi Plastik",
      slug: "manfaat-mengurangi-plastik",
      artikel: "enggunaan plastik sekali pakai telah menjadi masalah global yang serius.",
    },
    {
      judul: "Membuat Kebun Urban",
      slug: "membuat-kebun-urban",
      artikel: "Kebun urban adalah solusi kreatif untuk bercocok tanam di area perkotaan yang sempit.",
    },
    {
      judul: "Edukasi Lingkungan untuk Anak",
      slug: "edukasi-lingkungan-anak",
      artikel: "Mendidik anak-anak tentang lingkungan sejak dini sangat penting agar mereka tumbuh menjadi generasi yang peduli dan bertanggung jawab terhadap alam.",
    },
  ];

  const kuisContent = [
    {
      judul: "Cara Daur Ulang di Rumah",
      kuis: "Apa yang bisa kamu lakukan dengan botol plastik bekas?",
      pilihan: ["Buang ke laut", "Dibakar", "Gunakan kembali atau daur ulang", "Simpan di lemari"],
      pilihanbenar: "Gunakan kembali atau daur ulang",
    },
    {
      judul: "Ekonomi Hijau",
      kuis: "Apa prinsip utama ekonomi hijau?",
      pilihan: ["Meningkatkan polusi", "Mengurangi emisi dan limbah", "Eksploitasi sumber daya", "Peningkatan konsumsi"],
      pilihanbenar: "Mengurangi emisi dan limbah",
    },
    {
      judul: "Sampah Organik",
      kuis: "Sampah organik bisa diolah menjadi?",
      pilihan: ["Plastik", "Kompos", "Logam", "Kaca"],
      pilihanbenar: "Kompos",
    },
    {
      judul: "Pengelolaan Sampah",
      kuis: "Langkah pertama dalam pengelolaan sampah adalah?",
      pilihan: ["Pembakaran", "Pembuangan ke sungai", "Pengurangan dari sumber", "Pemilahan manual"],
      pilihanbenar: "Pengurangan dari sumber",
    },
    {
      judul: "Sampah Non-Organik",
      kuis: "Contoh sampah non-organik adalah?",
      pilihan: ["Kulit buah", "Daun kering", "Plastik kemasan", "Sisa makanan"],
      pilihanbenar: "Plastik kemasan",
    },
    {
      judul: "Reuse, Reduce, Recycle",
      kuis: "Konsep 3R berarti?",
      pilihan: [
        "Recreate, Run, Repair",
        "Reduce, Reuse, Recycle",
        "Repeat, Refuse, Reinstall",
        "Replace, Restart, Rebuild"
      ],
      pilihanbenar: "Reduce, Reuse, Recycle",
    },
    {
      judul: "Kompos",
      kuis: "Apa bahan utama dalam membuat kompos alami?",
      pilihan: ["Plastik", "Kaleng", "Sampah organik", "Kaca"],
      pilihanbenar: "Sampah organik",
    },
    {
      judul: "Manfaat Daur Ulang",
      kuis: "Daur ulang dapat membantu mengurangi?",
      pilihan: ["Pendapatan", "Sampah dan polusi", "Lapangan kerja", "Pendidikan"],
      pilihanbenar: "Sampah dan polusi",
    },
    {
      judul: "Tujuan Ekonomi Hijau",
      kuis: "Ekonomi hijau bertujuan untuk?",
      pilihan: [
        "Mengutamakan keuntungan ekonomi semata",
        "Mengurangi peran lingkungan",
        "Meningkatkan kesejahteraan dan keadilan sosial",
        "Menambah konsumsi energi fosil"
      ],
      pilihanbenar: "Meningkatkan kesejahteraan dan keadilan sosial",
    }
  ];
  
  
  

const tabs = [
  { name: 'Video', icon: VideoIcon, content: 'Nikmati video interaktif yang mengajarkan pengelolaan sampah secara menyenangkan.' },
  { name: 'Artikel', icon: BookOpen, content: 'Baca artikel inspiratif tentang keberlanjutan dan solusi lingkungan.' },
  { name: 'Kuis', icon: HelpCircle, content: 'Uji pengetahuanmu tentang ekonomi hijau dengan kuis-kuis menarik!' },

];

export default function InteractiveEducation() {
  const [activeTab, setActiveTab] = useState('Video');
  const navigate = useNavigate();

  const [jawabanBenar, setJawabanBenar] = useState({});

    const handleJawaban = (index, selected) => {
    const benar = kuisContent[index].pilihanbenar === selected;
    setJawabanBenar(prev => ({ ...prev, [index]: benar }));
        };



  const activeContent = tabs.find(tab => tab.name === activeTab);


  return (
    <section className="py-12 px-12 md:px-8 lg:px-16 lg:mt-[6rem] bg-gradient-to-b from-green-50 to-white">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10"
      >
        Interactive Education
      </motion.h2>
  
      {/* Tombol Tab */}
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        {tabs.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setActiveTab(name)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all border ${activeTab === name ? 'bg-green-600 text-white border-green-600 shadow-lg' : 'bg-white text-green-700 border-green-300 hover:bg-green-100'}`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">{name}</span>
          </button>
        ))}
      </div>
  
      {/* Konten Deskripsi */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 text-gray-700 mb-10"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">{activeTab}</h3>
          <p className="text-base leading-relaxed">{activeContent?.content}</p>
        </motion.div>
      </AnimatePresence>
  
      {/* Video hanya jika tab Video aktif */}
      {activeTab === 'Video' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
          {videoContent.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden mb-2"
            >
              <iframe
                className="w-full aspect-video"
                src={video.link}
                title={video.judul}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h4 className="text-green-700 font-semibold">{video.judul}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      )}

        {activeTab === 'Artikel' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
            {articleContent.map((article, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between mb-2"
            >
                <div>
                <h4 className="text-xl font-semibold text-green-700 mb-2">{article.judul}</h4>
                <p className="text-gray-600 text-sm">{article.artikel}</p>
                </div>
                <button
                onClick={() => navigate(`/articles/${article.slug}`)}
                className="mt-4 w-fit px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                >
                Baca Artikel
                </button>
            </motion.div>
            ))}
        </div>
        )}

        {activeTab === 'Kuis' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
            {kuisContent.map((kuis, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 space-y-4 mb-2"
            >
                <h4 className="text-lg font-semibold text-green-700">{kuis.judul}</h4>
                <p className="text-gray-800">{kuis.kuis}</p>
                <div className="space-y-2">
                {kuis.pilihan.map((option, idx) => (
                    <button
                    key={idx}
                    onClick={() => handleJawaban(index, option)}
                    className="block w-full text-left px-4 py-2 bg-green-50 hover:bg-green-100 rounded-lg border border-green-300 transition-colors"
                    >
                    {option}
                    </button>
                ))}
                </div>
                {jawabanBenar[index] !== undefined && (
                <p className={`text-sm mt-2 font-medium ${jawabanBenar[index] ? 'text-green-600' : 'text-red-500'}`}>
                    {jawabanBenar[index] ? 'Jawaban Benar!' : 'Jawaban Salah'}
                </p>
                )}
            </motion.div>
            ))}
        </div>
        )}


    </section>
  );
}
