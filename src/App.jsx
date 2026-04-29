import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Materials from "./pages/Materials";
import Swot from "./pages/Swot";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
        <Navbar />
        <main className="container mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anggota" element={<Members />} />
            <Route path="/materi" element={<Materials />} />
            <Route path="/swot" element={<Swot />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;