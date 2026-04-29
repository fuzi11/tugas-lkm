<<<<<<< HEAD
import React from "react";

const Materials = () => {
  return <div>Materials</div>;
};

export default Materials;
=======
function Materials() {
  const materials = [
    { 
      id: 1, 
      title: "tes", 
      desc: "tes" 
    },
    { 
      id: 2, 
      title: "tes", 
      desc: "tes" 
    },
    { 
      id: 3, 
      title: "tes", 
      desc: "tes" 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-10">📚 Rangkuman Materi LKM</h2>
      <div className="space-y-6">
        {materials.map((mat) => (
          <div 
            key={mat.id} 
            className="bg-white p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-lg hover:border-indigo-600 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                {mat.title}
              </h3>
              <span className="text-blue-400 group-hover:translate-x-2 transition-transform duration-300">➔</span>
            </div>
            <p className="text-slate-600 mt-3 leading-relaxed">{mat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Materials;
>>>>>>> c5486d4f8b2eed119b697a566ddd8fafa18d7861
