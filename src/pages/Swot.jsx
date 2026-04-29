function Swot() {
  const swotData = [
    { 
      title: "Strengths (Kekuatan)", 
      items: ["tes"], 
      color: "bg-emerald-50", 
      border: "border-emerald-500", 
      text: "text-emerald-800", 
      icon: "tes" 
    },
    { 
      title: "Weaknesses (Kelemahan)", 
      items: ["tes"], 
      color: "bg-rose-50", 
      border: "border-rose-500", 
      text: "text-rose-800", 
      icon: "tes" 
    },
    { 
      title: "Opportunities (Peluang)", 
      items: ["tes"], 
      color: "bg-blue-50", 
      border: "border-blue-500", 
      text: "text-blue-800", 
      icon: "tes" 
    },
    { 
      title: "Threats (Ancaman)", 
      items: ["tes"], 
      color: "bg-amber-50", 
      border: "border-amber-500", 
      text: "text-amber-800", 
      icon: "tes" 
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-10">🔍 Analisis SWOT</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {swotData.map((item, index) => (
          <div 
            key={index} 
            className={`${item.color} ${item.border} border-t-4 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
          >
            <h3 className={`text-2xl font-bold ${item.text} mb-5 flex items-center gap-3`}>
              <span className="text-3xl">{item.icon}</span> {item.title}
            </h3>
            <ul className="list-disc list-outside ml-5 text-slate-700 space-y-3 font-medium">
              {item.items.map((point, i) => (
                <li key={i} className="leading-relaxed">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Swot;