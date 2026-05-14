import { Link, useParams } from "react-router-dom";
import materials from "../data/materials";

function MaterialDetail() {
  const { id } = useParams();
  const material = materials.find((item) => item.id === Number(id));

  if (!material) {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-slate-950/75 p-8 text-center text-white shadow-xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
          Materi Tidak Ditemukan
        </p>
        <h2 className="mt-3 text-3xl font-extrabold">Halaman belum tersedia</h2>
        <p className="mt-3 text-slate-300">
          Materi yang kamu cari tidak ada di daftar materi.
        </p>
        <Link
          to="/materi"
          className="mt-6 inline-flex rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition-colors hover:bg-cyan-200"
        >
          Kembali ke Materi
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <Link
        to="/materi"
        className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur transition-colors hover:bg-white/20"
      >
        Kembali ke Materi
      </Link>

      <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/75 text-white shadow-xl shadow-blue-950/30 backdrop-blur">
        <div className={`h-2 bg-gradient-to-r ${material.color}`} />
        <div className="grid gap-6 p-6 md:grid-cols-[6rem_1fr] md:p-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-cyan-200/30 bg-slate-900 text-3xl font-extrabold text-cyan-200 shadow-lg shadow-cyan-950/30">
            {String(material.id).padStart(2, "0")}
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
              Isi Materi
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-5xl">
              {material.title}
            </h2>
            <p className="mt-5 text-justify text-base leading-relaxed text-slate-300 md:text-lg">
              {material.desc}
            </p>
          </div>
        </div>

        <section className="border-t border-white/10 bg-slate-900/60 p-6 md:p-8">
          <h3 className="text-xl font-extrabold text-white">
            Deskripsi Materi
          </h3>
          <div className="mt-5 space-y-4">
            {material.description.map((paragraph) => (
              <p
                key={paragraph}
                className="text-justify text-sm leading-relaxed text-slate-300 md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}

export default MaterialDetail;
