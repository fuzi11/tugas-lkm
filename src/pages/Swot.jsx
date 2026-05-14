function Swot() {
  const swotData = [
    {
      title: "Strengths (Kekuatan)",
      label: "S",
      items: [
        "Solidaritas dan kebersamaan masih kuat",
        "Adaptif dengan teknologi baru (AI, cloud, data science)",
        "Semangat belajar dan rasa ingin tahu tinggi",
        "Aktif dalam kegiatan kampus",
      ],
      accent: "from-cyan-500 to-blue-600",
    },
    {
      title: "Weaknesses (Kelemahan)",
      label: "W",
      items: [
        "Manajemen waktu belum stabil",
        "Kompetensi teknis masih dasar",
        "Terkadang kurang disiplin dan terlalu bergantung pada teknologi",
        "Etika komunikasi (ke dosen/kakak tingkat) masih kurang",
      ],
      accent: "from-blue-500 to-cyan-500",
    },
    {
      title: "Opportunities (Peluang)",
      label: "O",
      items: [
        "Banyak organisasi, komunitas, dan UKM untuk pengembangan diri",
        "Networking dengan dosen, alumni, dan industri",
        "Dukungan fasilitas kampus (internet, lab, forum internal)",
        "Perkembangan industri digital yang terus naik",
      ],
      accent: "from-sky-500 to-blue-700",
    },
    {
      title: "Threats (Ancaman)",
      label: "T",
      items: [
        "Potensi perpecahan angkatan (sirkel, perkubuan)",
        "Perubahan teknologi yang cepat bisa tertinggal kalau tidak adaptif",
        "Persaingan ketat antar mahasiswa dan antar angkatan",
        "Tekanan akademik dan risiko ketergantungan pada AI",
        "Distraksi dari media sosial/game",
      ],
      accent: "from-indigo-500 to-cyan-500",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <section className="rounded-2xl border border-white/10 bg-slate-950/75 px-6 py-8 text-center text-white shadow-xl shadow-blue-950/30 backdrop-blur">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
          Kelompok 18
        </p>
        <h2 className="text-3xl font-extrabold md:text-5xl">
          Analisis SWOT
        </h2>
      </section>

      <section className="space-y-5">
        {swotData.map((item) => (
          <div
            key={item.label}
            className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/75 text-white shadow-lg shadow-blue-950/30 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-slate-900/90 hover:shadow-cyan-950/40"
          >
            <div className={`h-2 bg-gradient-to-r ${item.accent}`} />
            <div className="grid gap-5 p-5 md:grid-cols-[5rem_1fr] md:p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-cyan-200/30 bg-slate-900 text-3xl font-extrabold text-cyan-200 shadow-lg shadow-cyan-950/30">
                {item.label}
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white">
                  {item.title}
                </h3>
                <div className="mt-4 grid gap-3">
                  {item.items.map((point, index) => (
                    <div
                      key={point}
                      className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-left font-semibold leading-relaxed text-slate-100 shadow-sm transition-all duration-300 hover:border-cyan-300 hover:bg-slate-900"
                    >
                      <span className="mr-3 text-cyan-200">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Swot;
