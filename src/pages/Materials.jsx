import { Link } from "react-router-dom";
import materials from "../data/materials";

function Materials() {
  return (
    <div className="mx-auto max-w-6xl space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white shadow-2xl md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.38),_transparent_35%),linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(30,64,175,0.88),_rgba(20,184,166,0.72))]" />
        <div className="relative">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
            Rangkuman Materi
          </p>
          <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Materi LKM Informatika 2026
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {materials.map((mat) => (
          <Link
            key={mat.id}
            to={`/materi/${mat.id}`}
            className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${mat.color}`}
            />

            <div className="min-w-0">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                  Materi {String(mat.id).padStart(2, "0")}
                </span>
                <span className="text-sm font-bold text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
                  Buka
                </span>
              </div>

              <h3 className="text-xl font-extrabold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                {mat.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {mat.desc}
              </p>

              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="text-sm font-bold text-slate-800">Isi Materi</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
                  {mat.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Materials;
