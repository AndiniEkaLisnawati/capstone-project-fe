import { useParams } from 'react-router-dom';

const articleData = {
    "cara-daur-ulang-di-rumah": {
      title: "Cara Daur Ulang di Rumah",
      content: `Daur ulang di rumah adalah langkah awal yang sangat penting untuk mengurangi dampak negatif terhadap lingkungan. Dengan mendaur ulang, kita mengurangi jumlah sampah yang dibuang ke TPA dan menghemat sumber daya alam. Berikut ini adalah beberapa cara praktis untuk menerapkan daur ulang dari rumah:
  
  1. Pisahkan sampah berdasarkan kategori: organik, anorganik, dan B3 (bahan berbahaya dan beracun).
  2. Bersihkan sampah anorganik seperti botol, kaleng, dan plastik sebelum didaur ulang.
  3. Gunakan kembali barang yang masih layak seperti botol kaca, kantong belanja, dan kardus.
  4. Komposkan sampah organik seperti sisa makanan, daun, dan kulit buah.
  5. Gabung dengan komunitas bank sampah atau program lingkungan di lingkungan tempat tinggalmu.
  6. Edukasi keluarga, terutama anak-anak, tentang pentingnya memilah sampah sejak dini.
  7. Minimalkan penggunaan barang sekali pakai dan lebih banyak memakai produk ramah lingkungan.
  
  Daur ulang di rumah bisa menjadi kebiasaan positif jika dilakukan secara konsisten oleh seluruh anggota keluarga.`
    },
    "apa-itu-ekonomi-hijau": {
      title: "Apa Itu Ekonomi Hijau?",
      content: `Ekonomi hijau adalah konsep pembangunan ekonomi yang berfokus pada keberlanjutan lingkungan dan kesejahteraan sosial. Dalam ekonomi hijau, pertumbuhan ekonomi tidak hanya dilihat dari peningkatan pendapatan nasional, tetapi juga dari seberapa ramahnya suatu negara atau wilayah dalam mengelola sumber daya alamnya.
  
  Ciri-ciri utama ekonomi hijau meliputi:
  - Penggunaan energi bersih dan terbarukan seperti tenaga surya dan angin.
  - Efisiensi dalam penggunaan sumber daya seperti air, tanah, dan bahan bakar.
  - Mengurangi emisi karbon dan limbah produksi.
  - Meningkatkan lapangan kerja berbasis lingkungan seperti pertanian organik dan daur ulang.
  
  Ekonomi hijau memberikan banyak manfaat seperti peningkatan kualitas hidup, pengurangan polusi, dan kemandirian energi. Negara yang menerapkan ekonomi hijau secara serius biasanya memiliki kualitas udara dan air yang lebih baik, serta penduduk yang lebih sehat. Masyarakat juga berperan penting dengan memilih produk-produk ramah lingkungan dan mendukung kebijakan hijau.`
    },
    "mengelola-sampah-organik": {
      title: "Mengelola Sampah Organik",
      content: `Sampah organik merupakan limbah yang berasal dari makhluk hidup dan mudah terurai secara alami. Contohnya adalah sisa makanan, kulit buah, sayuran, daun kering, dan rumput. Jika tidak dikelola dengan baik, sampah organik bisa menyebabkan bau tak sedap dan mencemari lingkungan. Namun, dengan pengelolaan yang tepat, sampah organik bisa diubah menjadi kompos yang sangat berguna untuk pertanian dan taman rumah.
  
  Langkah-langkah mengelola sampah organik:
  1. Pisahkan sampah organik dari sampah lainnya sejak awal.
  2. Gunakan ember atau tong komposter khusus yang diberi lubang ventilasi.
  3. Masukkan sisa sayuran, buah, daun kering, dan sisa makanan non-hewani.
  4. Tambahkan bahan 'coklat' seperti kertas, kardus, atau serbuk gergaji untuk menyeimbangkan kadar karbon.
  5. Aduk kompos setiap beberapa hari untuk mempercepat proses penguraian.
  6. Setelah 1–2 bulan, kompos akan matang dan bisa digunakan untuk menyuburkan tanaman.
  
  Dengan mengelola sampah organik, kamu tidak hanya membantu mengurangi beban TPA, tetapi juga menciptakan pupuk alami yang sehat untuk tanaman.`
    },
    "manfaat-mengurangi-plastik": {
      title: "Manfaat Mengurangi Plastik",
      content: `Penggunaan plastik sekali pakai telah menjadi masalah global yang serius. Plastik membutuhkan waktu ratusan tahun untuk terurai, dan banyak di antaranya berakhir di laut, membahayakan kehidupan laut dan rantai makanan manusia. Mengurangi penggunaan plastik dapat memberikan dampak besar terhadap kelestarian bumi.
  
  Beberapa manfaat mengurangi plastik:
  - Mengurangi pencemaran lingkungan, terutama di sungai dan laut.
  - Melindungi satwa laut dari bahaya sampah plastik yang tertelan atau membelit tubuhnya.
  - Mengurangi ketergantungan terhadap bahan baku fosil karena plastik berasal dari minyak bumi.
  - Membantu menciptakan lingkungan yang lebih bersih dan sehat.
  - Mendorong penggunaan alternatif seperti tas kain, botol stainless, dan kemasan biodegradable.
  
  Langkah mudahnya? Selalu bawa tas belanja sendiri, gunakan botol minum isi ulang, hindari sedotan plastik, dan pilih produk tanpa kemasan berlebih.`
    },
    "konsep-zero-waste": {
      title: "Konsep Zero Waste",
      content: `Zero waste adalah gaya hidup yang bertujuan untuk mengurangi produksi sampah seminimal mungkin—idealnya hingga nol. Konsep ini bukan tentang tidak menghasilkan sampah sama sekali, tetapi bagaimana kita bisa mengelola sumber daya secara bijak agar tidak ada yang terbuang sia-sia.
  
  Prinsip utama zero waste adalah 5R:
  1. **Refuse (Menolak)** barang yang tidak perlu, seperti brosur atau sedotan.
  2. **Reduce (Mengurangi)** konsumsi barang sekali pakai.
  3. **Reuse (Menggunakan kembali)** barang-barang lama seperti botol kaca dan kantong belanja.
  4. **Recycle (Mendaur ulang)** barang yang memang tidak bisa digunakan kembali.
  5. **Rot (Mengomposkan)** sampah organik untuk dijadikan pupuk.
  
  Zero waste juga mengajarkan kita untuk lebih sadar dalam berbelanja, mengurangi impulsif buying, dan memilih produk yang bisa dipakai berulang kali.`
    },
    "energi-terbarukan-di-rumah": {
      title: "Energi Terbarukan di Rumah",
      content: `Energi terbarukan adalah energi yang berasal dari sumber daya alam yang tidak habis, seperti matahari, angin, dan air. Saat ini, kamu bisa mulai menerapkan penggunaan energi terbarukan langsung dari rumah.
  
  Contoh penerapannya:
  - Menggunakan panel surya untuk listrik dan pemanas air.
  - Menggunakan lampu tenaga surya untuk taman dan jalan setapak.
  - Mengadopsi sistem ventilasi alami untuk mengurangi penggunaan AC.
  - Menghemat listrik dengan alat elektronik hemat energi (berlabel energy star).
  - Menggunakan tenaga angin mini untuk mengisi daya baterai atau sistem cadangan.
  
  Mengadopsi energi terbarukan di rumah tidak hanya mengurangi tagihan listrik, tapi juga membantu mengurangi emisi karbon dan dampak perubahan iklim.`
    },
    "mengenal-perubahan-iklim": {
      title: "Mengenal Perubahan Iklim",
      content: `Perubahan iklim adalah perubahan jangka panjang dalam suhu dan pola cuaca di bumi. Meski perubahan ini bisa terjadi secara alami, aktivitas manusia seperti pembakaran bahan bakar fosil, deforestasi, dan industrialisasi telah mempercepat proses ini secara drastis.
  
  Dampak perubahan iklim antara lain:
  - Kenaikan suhu bumi secara global (pemanasan global).
  - Perubahan musim yang tidak menentu.
  - Meningkatnya bencana alam seperti banjir, kekeringan, dan badai.
  - Pencairan es di kutub dan naiknya permukaan laut.
  - Terancamnya habitat satwa liar dan kelangkaan air bersih.
  
  Apa yang bisa kita lakukan? Kurangi penggunaan kendaraan bermotor pribadi, hemat listrik, tanam pohon, dan dukung kebijakan pro-lingkungan.`
    },
    "membuat-kebun-urban": {
      title: "Membuat Kebun Urban",
      content: `Kebun urban adalah solusi kreatif untuk bercocok tanam di area perkotaan yang sempit. Selain bisa menjadi sumber sayur dan buah segar, kebun ini juga membantu memperbaiki kualitas udara dan mengurangi panas kota (urban heat island).
  
  Langkah-langkah membuat kebun urban:
  1. Tentukan lokasi: balkon, atap, halaman belakang, atau dinding vertikal.
  2. Pilih media tanam: pot, vertikal planter, atau sistem hidroponik.
  3. Tanam sayur atau buah yang mudah tumbuh seperti kangkung, cabai, tomat, dan selada.
  4. Gunakan kompos dari sampah organik rumah tangga untuk menyuburkan tanaman.
  5. Siram dan rawat tanaman secara rutin, hindari penggunaan pestisida kimia.
  
  Dengan kebun urban, kamu bisa punya pasokan makanan segar sendiri, mengurangi jejak karbon, dan berkontribusi pada lingkungan yang lebih hijau.`
    },
    "edukasi-lingkungan-anak": {
      title: "Edukasi Lingkungan untuk Anak",
      content: `Mendidik anak-anak tentang lingkungan sejak dini sangat penting agar mereka tumbuh menjadi generasi yang peduli dan bertanggung jawab terhadap alam. Edukasi lingkungan bisa dilakukan secara menyenangkan dan aplikatif di rumah maupun sekolah.
  
  Cara-cara sederhana mengajarkan anak tentang lingkungan:
  - Ajak mereka memilah sampah dan menjelaskan bedanya sampah organik dan anorganik.
  - Lakukan aktivitas berkebun bersama untuk mengenalkan tanaman dan pentingnya tanah subur.
  - Buat kerajinan tangan dari barang bekas agar mereka terbiasa dengan konsep reuse.
  - Bercerita atau menonton film edukatif tentang hewan, hutan, dan laut.
  - Jadikan kebiasaan hemat air dan listrik sebagai bagian dari rutinitas harian.
  
  Dengan cara ini, anak-anak tidak hanya belajar teori, tapi juga memahami pentingnya menjaga lingkungan dalam kehidupan nyata.`
    }
  };
  

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articleData[slug];

  if (!article) return <div className="p-8 text-red-600">Artikel tidak ditemukan.</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 lg:mt-[6rem]">
      <h1 className="text-3xl font-bold text-green-800 mb-4">{article.title}</h1>
      <p className="text-lg text-gray-700">{article.content}</p>
    </div>
  );
}
