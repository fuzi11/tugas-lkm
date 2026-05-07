function Materials() {
  const materials = [
    {
      id: 1,
      title: "Analisis dan Pengembangan Masyarakat",
      desc: "Memahami kondisi masyarakat, menemukan masalah utama, dan menyusun langkah pengembangan yang tepat.",
      icon: "🌱",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 2,
      title: "Dinamika Sosial dan Politik",
      desc: "Mengenali perubahan sosial, relasi kekuasaan, dan cara membaca situasi politik di lingkungan sekitar.",
      icon: "⚖️",
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: 3,
      title: "Manajemen Aksi",
      desc: "Menyusun aksi secara terencana, mulai dari tujuan, strategi, pembagian peran, hingga evaluasi.",
      icon: "🔥",
      color: "from-rose-500 to-orange-500",
    },
    {
      id: 4,
      title: "Otoritas Informasi",
      desc: "Mengelola informasi secara bertanggung jawab agar komunikasi organisasi tetap jelas dan terpercaya.",
      icon: "🛰️",
      color: "from-cyan-500 to-sky-500",
    },
    {
      id: 5,
      title: "Retorika",
      desc: "Melatih kemampuan menyampaikan gagasan dengan runtut, meyakinkan, dan sesuai dengan audiens.",
      icon: "🎙️",
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      id: 6,
      title: "Analisis Organisasi",
      desc: "Membaca struktur, budaya, kekuatan, dan masalah organisasi untuk menentukan arah perbaikan.",
      icon: "🧭",
      color: "from-amber-500 to-yellow-500",
    },
    {
      id: 7,
      title: "Pembangunan dan Pengembangan Organisasi",
      desc: "Membangun organisasi yang adaptif melalui kaderisasi, sistem kerja, dan tujuan yang jelas.",
      icon: "🏗️",
      color: "from-slate-600 to-blue-600",
    },
    {
      id: 8,
      title: "Kekeluargaan",
      desc: "Menumbuhkan rasa saling percaya, peduli, dan solid dalam kehidupan berorganisasi.",
      icon: "🤝",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white shadow-2xl md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.38),_transparent_35%),linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(30,64,175,0.88),_rgba(20,184,166,0.72))]" />
        <div className="relative">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl shadow-xl backdrop-blur">
            📚
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
            Rangkuman Materi
          </p>
          <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Materi LKM Informatika
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
            Delapan materi utama disusun agar mudah dibaca, dipahami, dan
            dipelajari kembali oleh anggota Kelompok 18.
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {materials.map((mat) => (
          <article
            key={mat.id}
            className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${mat.color}`}
            />

            <div className="flex items-start gap-5">
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${mat.color} text-3xl shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
              >
                {mat.icon}
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                    Materi {String(mat.id).padStart(2, "0")}
                  </span>
                  <span className="text-xl text-blue-500 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="text-xl font-extrabold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                  {mat.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {mat.desc}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Materials;
