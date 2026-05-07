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
      color: "bg-emerald-50",
      border: "border-emerald-500",
      text: "text-emerald-800",
      accent: "bg-emerald-600",
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
      color: "bg-rose-50",
      border: "border-rose-500",
      text: "text-rose-800",
      accent: "bg-rose-600",
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
      color: "bg-blue-50",
      border: "border-blue-500",
      text: "text-blue-800",
      accent: "bg-blue-600",
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
      color: "bg-amber-50",
      border: "border-amber-500",
      text: "text-amber-800",
      accent: "bg-amber-600",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <section className="rounded-3xl border border-white/10 bg-white/10 px-6 py-10 text-center text-white shadow-xl shadow-blue-950/30 backdrop-blur">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
          Kelompok 18
        </p>
        <h2 className="text-3xl font-extrabold md:text-5xl">
          Analisis SWOT
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {swotData.map((item, index) => (
          <div
            key={index}
            className={`${item.color} ${item.border} border-t-4 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8`}
          >
            <h3
              className={`text-2xl font-bold ${item.text} mb-5 flex items-center gap-3`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.accent} text-lg font-extrabold text-white shadow-md`}
              >
                {item.label}
              </span>
              {item.title}
            </h3>
            <div className="space-y-3">
              {item.items.map((point, i) => (
                <button
                  key={point}
                  type="button"
                  className="w-full rounded-xl border border-slate-200 bg-white/75 px-4 py-3 text-left font-semibold leading-relaxed text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <span className="mr-2 text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {point}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Swot;
