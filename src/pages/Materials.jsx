function Materials() {
  const materials = [
    { 
      id: 1, 
      title: "Kepemimpinan & Manajemen Waktu", 
      desc: "Membahas secara mendalam tentang bagaimana menyeimbangkan waktu antara kewajiban akademik dan keaktifan di organisasi untuk mencegah burnout." 
    },
    { 
      id: 2, 
      title: "Kultur Informatika", 
      desc: "Pengenalan budaya solidaritas antar angkatan, problem solving, tata cara dan etika menghubungi dosen, serta adaptasi lingkungan kampus." 
    },
    { 
      id: 3, 
      title: "Fundamental Teknologi", 
      desc: "Pemaparan tren teknologi terbaru, pentingnya membangun portofolio sejak dini, dan membangun mindset pembelajar sepanjang hayat (continuous learning)." 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-10">📚 Rangkuman Materi LKM</h2>
      <div className="space-y-6">
        {materials.map((mat) => (
          <div 
            key={mat.id} 
            className="bg-white p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-lg hover:border-indigo-600 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                {mat.title}
              </h3>
              <span className="text-blue-400 group-hover:translate-x-2 transition-transform duration-300">➔</span>
            </div>
            <p className="text-slate-600 mt-3 leading-relaxed">{mat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Materials;