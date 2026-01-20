import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomePage from "./pages/public/HomePage";
import TentangPage from "./pages/public/TentangPage";
import LayoutComp from "./components/LayoutComp";
import ProgramPage from "./pages/public/ProgramPage";
import Dashboard from "./pages/private/Dashboard";
import LayoutPrivate from "./components/LayoutPrivate";
import Artikel from "./pages/private/Artikel";
import LoginPage from "./pages/public/auth/LoginPage";
import BeritaPage from "./pages/public/BeritaPage";
import Kontak from "./components/web/Kontak";

const RoutePath = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500" />
          </div>
        }
      >
        <Routes>
            <Route path="/auth/login" element={<LoginPage />} />
          <Route element={<LayoutComp role="spi" />}>
            {/* Public */}
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang" element={<TentangPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/berita/:slug" element={<BeritaPage />} />
          </Route>
          <Route element={<LayoutPrivate />}>
            <Route path="/u/d" element={<Dashboard />} />
            <Route path="/a/a" element={<Artikel />} />
          </Route>
          
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutePath;
