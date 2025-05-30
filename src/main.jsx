import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recommend from "./pages/Recommend";

const App = () => (
  <BrowserRouter>
    <div className="p-4 bg-gray-100 min-h-screen">
      <nav className="mb-6 text-center space-x-4">
        <Link to="/" className="font-bold text-blue-600">首页</Link>
        <Link to="/recommend" className="text-blue-600">智能推荐</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </div>
  </BrowserRouter>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
