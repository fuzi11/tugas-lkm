import { Link } from "react-router-dom";
import materials from "../data/materials";

function Materials() {
  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-10 text-center text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
        Rangkuman Materi LKM
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {materials.map((material) => (
          <Link
            key={material.id}
            to={`/materi/${material.id}`}
            className="group overflow-hidden rounded-xl border border-blue-300/20 bg-slate-900/85 text-left shadow-xl shadow-blue-950/30 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:shadow-2xl hover:shadow-cyan-950/30 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <div className="grid min-h-28 grid-cols-[0.35rem_1fr]">
              <div className="bg-gradient-to-b from-blue-500 to-cyan-400" />

              <div className="p-5 md:p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                      Materi {material.id}
                    </p>
                    <h3 className="mt-2 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-200">
                      {material.title}
                    </h3>
                  </div>

                  <span className="w-fit rounded-full border border-cyan-200/25 bg-blue-500/15 px-3 py-1 text-sm font-semibold text-cyan-100">
                    {material.desc}
                  </span>
                </div>

                <p className="mt-3 line-clamp-2 text-base leading-relaxed text-slate-300">
                  {material.description[0]}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Materials;
