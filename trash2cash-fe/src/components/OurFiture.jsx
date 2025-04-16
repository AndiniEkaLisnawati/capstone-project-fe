import { motion } from 'framer-motion';
import { FaRecycle, FaGift, FaBrain, FaBell, FaBookOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


export default function OurFiture() {
    const navigate = useNavigate(); 
  
    const features = [
      {
        icon: <FaRecycle className="text-green-500 text-4xl" />,
        title: 'Green Connection',
        description:
        'Menghubungkan masyarakat dengan pengepul sampah secara real-time untuk transaksi yang efisien dan berkelanjutan. Mendorong kolaborasi menuju ekonomi sirkular yang lebih baik.',
        route: '/dashboard'
      },
      {
        icon: <FaGift className="text-yellow-400 text-4xl" />,
        title: 'Point & Reward System',
        description:
        'Setiap aksi ramah lingkungan diberi poin yang bisa ditukar dengan uang, produk, atau reward menarik lainnya. Sistem gamifikasi membuat menjaga bumi jadi menyenangkan dan menguntungkan.',
        route: '/dashboardpoint'
      },
      {
        icon: <FaBrain className="text-blue-400 text-4xl" />,
        title: 'Smart Waste Classification',
        description:
        'Dengan teknologi Machine Learning, sistem secara otomatis mengklasifikasikan sampah berdasarkan foto yang diunggah. Akurat, cepat, dan minim kesalahan manusia.',
        route: '/uploadimage'
      },
      {
        icon: <FaBookOpen className="text-purple-400 text-4xl" />,
        title: 'Interactive Education',
        description:
        'Konten edukatif berupa video, kuis, dan artikel tentang pengelolaan sampah dan ekonomi hijau, disesuaikan untuk semua usia dan latar belakang.',
        route: '/education'
      },
      {
        icon: <FaBell className="text-pink-400 text-4xl" />,
        title: 'Smart Notification System',
        description:
        'Pengingat cerdas untuk menjual sampah, info reward, dan notifikasi event membuat pengguna tetap terlibat dan konsisten dalam aksi hijau mereka.',
        route: '/'
      }
    ];
  

  return (
    <section className="px-6 py-16 md:px-20 lg:px-40 mt-[10rem]">
        <div className="bg-[#322A26] text-white py-16 rounded-[4rem] px-8 md:px-24">
            <div className="max-w-6xl mx-auto">
                <motion.h2 
                className="text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                Our Fiture
                </motion.h2>
                <motion.p
                className="text-lg max-w-3xl mb-12 text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                >
                Kami tidak hanya menciptakan aplikasi, tetapi membangun masa depan yang hijau dan inklusif. Trash to Cash hadir untuk menjawab tantangan pengelolaan sampah di Indonesia dengan teknologi, edukasi, dan sistem reward yang memberdayakan semua pihak.
                </motion.p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, idx) => (
                    <motion.div
                    key={idx}
                    onClick={() => navigate(feature.route)} 
                    className="bg-white/10 p-6 rounded-2xl hover:scale-105 hover:bg-white/20 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    >
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </motion.div>
                ))}
                </div>
            </div>
        </div>
    </section>
    
  );
}
