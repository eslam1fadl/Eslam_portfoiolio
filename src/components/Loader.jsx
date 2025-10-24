// Loader.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Loader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 400); // ⏳ مدة التحميل 0.4 ثانية (ممكن تزودها لو عايز)

    return () => clearTimeout(timer);
  }, [location]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0E0B16] z-50">
      <div className="w-16 h-16 border-4 border-[#9D4EDD] border-t-[#FFB347] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
