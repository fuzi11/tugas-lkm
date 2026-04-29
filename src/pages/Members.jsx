function Members() {
  const members = [
    { 
      id: 1, 
      name: "Fauzi", 
      role: "Ketua Kelompok", 
      desc: "Bertanggung jawab atas koordinasi tugas dan struktur utama project.", 
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fauzi" 
    },
    { 
      id: 2, 
      name: "Anggota Dua", 
      role: "UI/UX & Frontend", 
      desc: "Merancang antarmuka interaktif menggunakan Tailwind CSS.", 
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nala" 
    },
    { 
      id: 3, 
      name: "Anggota Tiga", 
      role: "Content Writer", 
      desc: "Menyusun rangkuman materi dan perumusan analisis SWOT.", 
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi" 
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-12">👥 Profil Anggota Tim</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div 
            key={member.id} 
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            {/* Header Card / Background Cover */}
            <div className="h-28 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            
            {/* Foto Profil */}
            <div className="flex justify-center -mt-14">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-28 h-28 bg-white rounded-full border-4 border-white object-cover group-hover:scale-110 transition-transform duration-300 shadow-sm" 
              />
            </div>
            
            {/* Informasi Anggota */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-slate-800">{member.name}</h3>
              <p className="text-blue-600 font-semibold mt-1 mb-4">{member.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;