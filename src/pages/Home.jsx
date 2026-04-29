import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in">
      <div className="inline-block px-4 py-1 mb-6 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
        Td
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-6 drop-shadow-sm leading-tight">
        j <br />
        <span className="text-blue-600">Universitas Siliwangi</span>
      </h1>
      <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
        d
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/anggota" 
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Lssss
        </Link>
        <Link 
          to="/swot" 
          className="px-8 py-3 bg-white text-blue-600 font-semibold border border-blue-600 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Apppp
        </Link>
      </div>
    </div>
  );
}

export default Home;