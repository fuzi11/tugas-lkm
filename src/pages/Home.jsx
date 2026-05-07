import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

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
      accent: "from-emerald-500 to-teal-500",
    },
    {
      title: "Analisis SWOT",
      desc: "Pahami kekuatan, peluang, tantangan, dan strategi kelompok.",
      to: "/swot",
      icon: "📊",
      accent: "from-violet-500 to-indigo-500",
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <section className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 text-white shadow-2xl shadow-blue-950/60 backdrop-blur">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(96,165,250,0.45),_transparent_30%),radial-gradient(circle_at_85%_70%,_rgba(34,211,238,0.28),_transparent_28%),linear-gradient(135deg,_rgba(30,64,175,0.92),_rgba(15,23,42,0.98)_52%,_rgba(8,47,73,0.95))]" />
        <div className="absolute left-0 top-0 h-full w-1/2 bg-[linear-gradient(115deg,_rgba(255,255,255,0.18),_transparent_38%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        <div className="relative grid min-h-[520px] items-center gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-12 lg:px-16">
          <div className="text-center md:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]"></span>
              LKM Informatika 2026
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Kelompok 18
              <span className="block text-cyan-200">Siap Berkarya</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-200 md:mx-0 md:text-lg">
              Tempat kumpulan profil anggota, materi, dan analisis kelompok
              dalam satu halaman yang rapi, ringan, dan mudah dijelajahi.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Link
                to="/anggota"
                className="rounded-xl bg-white px-7 py-3 font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50 hover:shadow-cyan-500/30"
              >
                Lihat Anggota
              </Link>
              <Link
                to="/swot"
                className="rounded-xl border border-white/40 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Buka SWOT
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/20 blur-2xl"></div>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/10 p-5 shadow-2xl shadow-cyan-950/50 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200/50 hover:bg-white/15">
              <img
                src={hero}
                alt="Ilustrasi LKM Informatika"
                className="h-72 w-full rounded-2xl object-cover shadow-xl transition-transform duration-500 hover:scale-105"
              />

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-2xl font-extrabold">18</p>
                  <p className="text-xs text-slate-300">Kelompok</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-2xl font-extrabold">11</p>
                  <p className="text-xs text-slate-300">Anggota</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-2xl font-extrabold">3</p>
                  <p className="text-xs text-slate-300">Menu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-6 text-white shadow-md shadow-blue-950/30 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200/40 hover:bg-white/15 hover:shadow-2xl hover:shadow-cyan-950/40"
          >
            <div
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`}
            ></div>
            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-2xl shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
            >
              {item.icon}
            </div>
            <h2 className="mb-2 text-xl font-extrabold text-white">
              {item.title}
            </h2>
            <p className="mb-5 text-sm leading-relaxed text-slate-300">
              {item.desc}
            </p>
            <span className="font-semibold text-cyan-200 transition-all duration-300 group-hover:ml-2 group-hover:text-white">
              Buka halaman →
            </span>
          </Link>
        ))}
      </section>

    </div>
  );
}

export default Home;
