import React, { useState } from "react";
import materials from "../data/materials";

function Materials() {
  const [selectedMateri, setSelectedMateri] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-4 relative">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white mb-10">
        📚 Rangkuman Materi LKM
      </h2>

      {/* Container List Materi */}
      <div className="grid grid-cols-1 gap-4">
        {materials.map((mat) => (
          <button
            key={mat.id}
            onClick={() => setSelectedMateri(mat)}
            className="bg-white p-4 md:p-6 text-left rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-md hover:border-blue-600 transition-all duration-300 group focus:outline-none"
          >
            <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
              {mat.title}
            </h3>
            <div className="text-sm md:text-md text-slate-500 mt-2 line-clamp-1">
              <p>{mat.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedMateri && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-6 md:p-8 relative transform transition-transform scale-100 flex flex-col max-h-[90vh]">
            <button
              onClick={() => setSelectedMateri(null)}
              className="absolute top-4 right-5 text-slate-400 hover:text-red-500 text-3xl font-bold transition-colors focus:outline-none z-10"
            >
              &times;
            </button>

            {/* Konten Popup (Header) */}
            <div className="mt-2 shrink-0">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Materi {selectedMateri.id}
              </span>
              <h3 className="text-xl md:text-3xl lg:text-4xl text-center font-bold text-slate-800 mb-4 pr-6">
                {selectedMateri.title.split(": ")[1] || selectedMateri.title}
              </h3>
            </div>

            {/* Area Deskripsi yang Bisa di-Scroll */}
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 overflow-y-auto custom-scrollbar grow">
              <p className="text-slate-600 leading-relaxed text-lg mb-3">
                {selectedMateri.desc}
              </p>
              {/* Tambahan whitespace-pre-line agar enter/baris baru pada data terbaca */}
              <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
                {selectedMateri.description}
              </p>
            </div>

            {/* Tombol Tutup di bawah */}
            <div className="mt-6 flex justify-end shrink-0">
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
