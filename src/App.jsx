import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";
import AnimatedBackground from "./components/AnimatedBackground";
import Home from "./pages/Home";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return loading ? (
    <LoadingPage onFinish={() => setLoading(false)} />
  ) : (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white relative overflow-y-auto overflow-x-hidden">
      <Toaster position="top-center" reverseOrder={false} />
        <AnimatedBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;