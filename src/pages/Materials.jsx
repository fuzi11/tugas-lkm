import { Link } from "react-router-dom";
import materials from "../data/materials";

function Materials() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <section className="rounded-3xl border border-white/10 bg-white/10 px-6 py-10 text-center text-white shadow-xl shadow-blue-950/30 backdrop-blur md:px-12">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
          Rangkuman Materi
        </p>
        <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
          Materi LKM Informatika 2026
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-justify text-sm leading-relaxed text-slate-300 md:text-base">
          Ringkasan materi beserta poin penting yang dikembangkan oleh tim.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {materials.map((mat) => (
          <Link
            key={mat.id}
            to={`/materi/${mat.id}`}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/85 shadow-2xl shadow-blue-950/40 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200/40 hover:shadow-cyan-950/40"
          >
            <div className="relative h-28 overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,_rgba(255,255,255,0.35),_transparent_28%),linear-gradient(135deg,_rgba(15,23,42,0.75),_rgba(255,255,255,0.08),_transparent)]" />
            </div>

            <div className="relative px-6 pb-6 pt-10">
              <div className="mb-4 flex flex-col gap-4 text-center md:items-start md:text-left">
                <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-200 md:justify-start">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/90 text-sm font-extrabold text-cyan-200 shadow-xl shadow-cyan-950/50">
                    {String(mat.id).padStart(2, "0")}
                  </span>
                  Materi {String(mat.id).padStart(2, "0")}
                </div>

                <div className="flex flex-col items-center gap-3 md:items-start">
                  <h3 className="text-2xl font-extrabold leading-tight text-white transition-colors duration-300 group-hover:text-cyan-100">
                    {mat.title}
                  </h3>
                  <p className="max-w-2xl text-justify text-sm leading-relaxed text-slate-300">
                    {mat.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between gap-4 text-sm font-semibold text-cyan-200">
                  <span>Lihat Deskripsi</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Buka</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Materials;
