import React, { useRef, useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import AdvancedHeader from "./components/AdvancedHeader";
import Hero from "./Hero";
import Aboutme from "./Aboutme";

const AdvancedHome = () => {
  const cvButtonRef = useRef(null);
  const scrolMenuRef = useRef(null);
  const headerRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const calculateSectionHeight = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        setSectionHeight(window.innerHeight - headerHeight);
      }
    };

    calculateSectionHeight();
    window.addEventListener('resize', calculateSectionHeight);

    return () => {
      window.removeEventListener('resize', calculateSectionHeight);
    };
  }, []);

  return (
    <div className=" flex flex-col w-full h-full text-base border-0 lg:border-0 border-sky-400">
      <div className="w-full" ref={headerRef}>
        <AdvancedHeader setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
      </div>

      <div
        className={`w-full h-full ${isSidebarOpen ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}
        style={{ height: `${sectionHeight}px` }}
      >
        <Hero />
      </div>
      <div
        className={`w-full h-full ${isSidebarOpen ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}
        style={{ height: `${sectionHeight}px` }}
      >
        <Aboutme />
      </div>
      <div className="fixed bottom-4 right-4 w-14 h-14 flex justify-center items-center z-50">
        <FaArrowUp
          className="hover:bg-accent hover:text-white cursor-pointer border-2 rounded-full text-4xl p-2 transition duration-300"
          onClick={scrollToTop}
        />
      </div>
    </div>
  );
};

export default AdvancedHome;
