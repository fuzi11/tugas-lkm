import React, { useState } from "react";

function Materials() {
  const materials = [
    {
      id: 1,
      number: "1",
      title: "Materi 1: Analisa dan Pengembangan Masyarakat",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos temporibus cupiditate sit autem porro nemo voluptates consequatur similique, quos quo sapiente aut, perferendis pariatur vel optio reiciendis? Reiciendis, temporibus quasi!",
    },
    {
      id: 2,
      number: "2",
      title: "Materi 2: Dinamika Sosial dan Politik",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos temporibus cupiditate sit autem porro nemo voluptates consequatur similique, quos quo sapiente aut, perferendis pariatur vel optio reiciendis? Reiciendis, temporibus quasi!",
    },
    {
      id: 3,
      number: "3",
      title: "Materi 3: Manajemen Aksi",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos temporibus cupiditate sit autem porro nemo voluptates consequatur similique, quos quo sapiente aut, perferendis pariatur vel optio reiciendis? Reiciendis, temporibus quasi!",
    },
    {
      id: 4,
      number: "4",
      title: "Materi 4: Otoritas Informasi",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos temporibus cupiditate sit autem porro nemo voluptates consequatur similique, quos quo sapiente aut, perferendis pariatur vel optio reiciendis? Reiciendis, temporibus quasi!",
    },
    {
      id: 5,
      number: "5",
      title: "Materi 5: Retorika",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos temporibus cupiditate sit autem porro nemo voluptates consequatur similique, quos quo sapiente aut, perferendis pariatur vel optio reiciendis? Reiciendis, temporibus quasi!",
    },
    {
      id: 6,
      number: "6",
      title: "Materi 6: Analisa Organisasi",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos temporibus cupiditate sit autem porro nemo voluptates consequatur similique, quos quo sapiente aut, perferendis pariatur vel optio reiciendis? Reiciendis, temporibus quasi!",
    },
    {
      id: 7,
      number: "7",
      title: "Materi 7: Pembangunan dan Pengembangan Organisasi",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos temporibus cupiditate sit autem porro nemo voluptates consequatur similique, quos quo sapiente aut, perferendis pariatur vel optio reiciendis? Reiciendis, temporibus quasi!",
    },
    {
      id: 8,
      number: "8",
      title: "Materi 8: Kekeluargaan",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos temporibus cupiditate sit autem porro nemo voluptates consequatur similique, quos quo sapiente aut, perferendis pariatur vel optio reiciendis? Reiciendis, temporibus quasi!",
    },
  ];

  const [open, setOpen] = useState("");

  const handleOpen = (value) => setOpen(open === value ? null : value);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-slate-800 mb-10">
        📚 Rangkuman Materi LKM
      </h2>
      <div className="space-y-6">
        {materials.map((mat) => (
          <div
            key={mat.id}
            className="bg-white p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1"
          >
            <button
              onClick={() => handleOpen(mat.number)}
              className="w-full flex items-center justify-between text-left focus:outline-none gap-2"
            >
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                {mat.title}
              </h3>
              <p
                className={`text-blue-400 text-xl transition-transform duration-300 ${
                  open === mat.number
                    ? "rotate-180"
                    : "group-hover:translate-x-2"
                }`}
              >
                <i className="fa-solid fa-angle-up"></i>
              </p>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                open === mat.number
                  ? "grid-rows-[1fr] mt-4 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-slate-600 leading-relaxed">{mat.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Materials;
