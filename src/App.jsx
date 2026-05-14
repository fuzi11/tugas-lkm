import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Materials from "./pages/Materials";
import MaterialDetail from "./pages/MaterialDetail";
import Swot from "./pages/Swot";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-300 selection:text-slate-950">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute left-[-12rem] top-20 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl"></div>
          <div className="absolute right-[-10rem] top-64 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl"></div>
          <div className="absolute bottom-[-14rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-indigo-600/20 blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,_transparent_1px),linear-gradient(90deg,_rgba(148,163,184,0.06)_1px,_transparent_1px)] bg-[size:42px_42px]"></div>
        </div>
        <Navbar />
        <main className="relative container mx-auto px-6 py-8 md:py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anggota" element={<Members />} />
            <Route path="/materi" element={<Materials />} />
            <Route path="/materi/:id" element={<MaterialDetail />} />
            <Route path="/swot" element={<Swot />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
