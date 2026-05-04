function Members() {
  const members = [
    {
      id: 1,
      name: "Muhammad Nibras Zahran Irawan",
      role: "tes",
      desc: "tes",
      img: "",
    },
    {
      id: 2,
      name: "Nazwa Nurul Aulia",
      role: "tes",
      desc: "tes",
      img: "",
    },
    {
      id: 3,
      name: "Fariz Alwasi",
      role: "tes",
      desc: "tes.",
      img: "",
    },
    {
      id: 4,
      name: "Desvitasari",
      role: "tes",
      desc: "tes",
      img: "",
    },
    {
      id: 5,
      name: "Muhammad Ikhsan Al Rizal",
      role: "tes",
      desc: "tes",
      img: "",
    },
    {
      id: 6,
      name: "Taufik Sabillah",
      role: "tes",
      desc: "tes",
      img: "",
    },
    {
      id: 7,
      name: "Ilham Syarif Hidayat",
      role: "tes",
      desc: "tes",
      img: "",
    },
    {
      id: 8,
      name: "Viola Diva Ananda",
      role: "tes",
      desc: "tes",
      img: "",
    },
    {
      id: 9,
      name: "Fauzi Firmansyah",
      role: "tes",
      desc: "tes",
      img: "",
    },
    {
      id: 10,
      name: "Danar Yusuf Gantika Putra",
      role: "tes",
      desc: "tes",
      img: "",
    },
    {
      id: 11,
      name: "Mochammad Faza Fauzan Adhima",
      role: "tes",
      desc: "tes",
      img: "FOTO FAZA.jpg",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-12">
        👥 Profil Anggota Tim
      </h2>
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
              <h3 className="text-2xl font-bold text-slate-800">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold mt-1 mb-4">
                {member.role}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {member.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
