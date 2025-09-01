import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Stairs from "./components/common/Stairs";
import Navbar from "./components/common/Navbar";

export default function App() {
  
  return (
    <div className="relative">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}
