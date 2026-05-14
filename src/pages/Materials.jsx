import { Link, matchPath } from "react-router-dom";
import materials from "../data/materials";

function Materials() {
  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-10 text-center text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
        Rangkuman Materi LKM
      </h2>

      {/* Container List Materi */}
      <div className="grid grid-cols-1 gap-4">
        {materials.map((material) => (
          <Link
            key={material.id}
            to={`/materi/${material.id}`}
            className="group overflow-hidden rounded-xl border border-white/10 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-950/20 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <div className="grid min-h-28 grid-cols-[0.35rem_1fr]">
              <div className={`bg-linear-to-b ${material.color}`} />

              <div className="p-5 md:p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                      Materi {material.id}
                    </p>
                    <h3 className="mt-2 text-xl font-bold leading-snug text-slate-800 transition-colors duration-300 group-hover:text-blue-600">
                      {material.title}
                    </h3>
                  </div>
                  <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                    {material.desc}
                  </span>
                </div>

                <p className="mt-3 line-clamp-2 text-base leading-relaxed text-slate-500">
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
