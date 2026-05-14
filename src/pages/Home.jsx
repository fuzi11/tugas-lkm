import { Link } from "react-router-dom";
import logoLkm from "../assets/Logo LKM IF2.png";

function Home() {
  const menuItems = [
    {
      title: "Anggota",
      desc: "Kenali profil dan peran setiap anggota Kelompok 18.",
      to: "/anggota",
      icon: "👥",
      accent: "from-blue-500 to-cyan-500",
    },
    {
      title: "Materi",
      desc: "Lihat rangkuman materi yang sudah disusun bersama.",
      to: "/materi",
      icon: "📚",
      accent: "from-blue-500 to-cyan-500",
    },
    {
      title: "Analisis SWOT",
      desc: "Pahami kekuatan, peluang, tantangan, dan strategi kelompok.",
      to: "/swot",
      icon: "📊",
      accent: "from-blue-600 to-indigo-500",
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <section className="group relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900/80 text-white shadow-2xl shadow-blue-950/60 backdrop-blur">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.45),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(34,211,238,0.28),transparent_28%),linear-gradient(135deg,rgba(30,64,175,0.92),rgba(15,23,42,0.98)_52%,rgba(8,47,73,0.95))]" />
        <div className="absolute left-0 top-0 h-full w-1/2 bg-[linear-gradient(115deg,rgba(255,255,255,0.18),transparent_38%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        <div className="relative grid min-h-130 items-center gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-12 lg:px-16">
          <div className="text-center md:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]"></span>
              LKM Informatika 2026
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Kelompok 18
              <span className="block text-cyan-200">LKM Informatika 2026</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-200 md:mx-0 md:text-lg">
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start"></div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/20 blur-2xl"></div>
            <div className="relative rounded-xl border border-white/10 bg-slate-950/40 p-5 shadow-xl shadow-blue-950/40 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200/50">
              <div className="flex h-72 items-center justify-center rounded-lg bg-slate-950/60 p-8 shadow-xl">
                <img
                  src={logoLkm}
                  alt="Logo LKM Informatika 2026"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            className="group overflow-hidden rounded-xl border border-blue-300/20 bg-slate-900/80 p-4 text-white shadow-xl shadow-blue-950/30 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200/50 hover:shadow-2xl hover:shadow-cyan-950/40"
          >
            <div
              className={`angled-frame relative mb-4 flex h-28 items-center justify-center overflow-hidden bg-linear-to-br ${item.accent} shadow-xl shadow-blue-950/30`}
            >
              <div className="absolute inset-0 bg-slate-950/25"></div>
              <span className="relative text-4xl transition-transform duration-500 group-hover:scale-125">
                {item.icon}
              </span>
            </div>

            <div className="rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 px-5 py-3 shadow-lg shadow-cyan-950/30">
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-white">
                {item.title}
              </h2>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {item.desc}
            </p>
            <span className="mt-5 inline-flex font-semibold text-cyan-200 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
              Buka halaman →
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Home;
