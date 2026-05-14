import React, { useState } from "react";

function Materials() {
  const materials = [
    {
      id: 1,
      number: "1",
      title: "Materi 1: Analisa dan Pengembangan Masyarakat",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos temporibus cupiditate sit autem porro nemo voluptates consequatur similique, quos quo sapiente aut, perferendis pariatur vel optio reiciendis? Reiciendis, temporibus quasi! ",
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

  const [selectedMateri, setSelectedMateri] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-4 relative">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-slate-800 mb-10">
        📚 Rangkuman Materi LKM
      </h2>

      {/* Container List Materi */}
      <div className="grid grid-cols-1 gap-4">
        {materials.map((mat) => (
          <button
            key={mat.id}
            onClick={() => setSelectedMateri(mat)}
            className="bg-white p-6 text-left rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-md hover:border-blue-600 transition-all duration-300 group focus:outline-none"
          >
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
              {mat.title}
            </h3>
            <p className="text-slate-500 mt-2 line-clamp-1">{mat.desc}</p>
          </button>
        ))}
      </div>
      {selectedMateri && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 md:p-8 relative transform transition-transform scale-100">
            <button
              onClick={() => setSelectedMateri(null)}
              className="absolute top-4 right-5 text-slate-400 hover:text-red-500 text-3xl font-bold transition-colors focus:outline-none"
            >
              &times;
            </button>

            {/* Konten Popup */}
            <div className="mt-2">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Materi {selectedMateri.number}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                {selectedMateri.title.split(": ")[1]}
              </h3>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <p className="text-slate-600 leading-relaxed text-lg">
                  {selectedMateri.desc}
                </p>
              </div>
            </div>

            {/* Tombol Tutup di bawah */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedMateri(null)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors focus:outline-none shadow-md shadow-blue-500/30"
              >
                Tutup Materi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Materials;
