import { Link } from "react-router-dom";
import materials from "../data/materials";

function Materials() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <section className="rounded-2xl border border-white/10 bg-slate-950/75 px-6 py-8 text-center text-white shadow-xl shadow-blue-950/30 backdrop-blur">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
          Rangkuman Materi
        </p>
        <h2 className="text-3xl font-extrabold md:text-5xl">
          Materi LKM Informatika 2026
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-justify text-sm leading-relaxed text-slate-300 md:text-base">
          Daftar materi disusun seperti folder agar lebih mudah dibaca secara
          berurutan saat discroll.
        </p>
      </section>

      <section className="space-y-5">
        {materials.map((mat) => (
          <Link
            key={mat.id}
            to={`/materi/${mat.id}`}
            className="group block overflow-hidden rounded-2xl border border-white/10 bg-slate-950/75 text-white shadow-lg shadow-blue-950/30 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-slate-900/90 hover:shadow-cyan-950/40"
          >
            <div className={`h-2 bg-gradient-to-r ${mat.color}`} />
            <div className="grid gap-5 p-5 md:grid-cols-[5rem_1fr_auto] md:items-center md:p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-cyan-200/30 bg-slate-900 text-2xl font-extrabold text-cyan-200 shadow-lg shadow-cyan-950/30">
                {String(mat.id).padStart(2, "0")}
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
                  Folder Materi
                </p>
                <h3 className="mt-2 text-2xl font-extrabold leading-tight text-white">
                  {mat.title}
                </h3>
                <p className="mt-3 text-justify text-sm leading-relaxed text-slate-300">
                  {mat.desc}
                </p>
              </div>

              <span className="inline-flex w-fit items-center justify-center rounded-xl border border-cyan-200/40 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors group-hover:bg-cyan-200 group-hover:text-slate-950">
                Buka
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Materials;
