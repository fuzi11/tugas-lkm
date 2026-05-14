import { Link, useParams } from "react-router-dom";
import materials from "../data/materials";

function MaterialDetail() {
  const { id } = useParams();
  const material = materials.find((item) => item.id === Number(id));

  if (!material) {
    return (
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center text-slate-900 shadow-xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          Materi Tidak Ditemukan
        </p>
        <h2 className="mt-3 text-3xl font-extrabold">Halaman belum tersedia</h2>
        <p className="mt-3 text-slate-600">
          Materi yang kamu cari tidak ada di daftar materi.
        </p>
        <Link
          to="/materi"
          className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition-colors hover:bg-blue-700"
        >
          Kembali ke Materi
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Link
        to="/materi"
        className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur transition-colors hover:bg-white/20"
      >
        Kembali ke Materi
      </Link>

      <article className="overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl">
        <div className={`h-2 bg-gradient-to-r ${material.color}`} />
        <div className="p-6 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
            Materi {String(material.id).padStart(2, "0")}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
            {material.title}
          </h2>
          <p className="mt-5 text-justify text-base leading-relaxed text-slate-600 md:text-lg">
            {material.desc}
          </p>

          <section className="mt-8 rounded-2xl bg-white p-5 ring-1 ring-slate-200 md:p-6">
            <h3 className="text-xl font-extrabold text-slate-900">
              Deskripsi Materi
            </h3>
            <div className="mt-4 space-y-4">
              {material.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-justify text-sm leading-relaxed text-slate-700 md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

export default MaterialDetail;
