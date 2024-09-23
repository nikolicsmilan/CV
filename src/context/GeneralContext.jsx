import React, { createContext, useContext, useState, useEffect } from "react";

// Create a new context
const GeneralContext = createContext();

// Create a provider component to wrap around your app and provide the context values
export const GeneralContextProvider = ({ children }) => {
  // Define state variables using the useState hook
  const [style, setStyle] = useState("advanced"); // State for the style
  const [activeMenu, setActiveMenu] = useState(false); // State for the active menu
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  }); // State for the window size

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState({ x: 0, y: 0 });
  // Use the useEffect hook to handle the window resize event
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for the resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Provide the context values using the GeneralContext.Provider component
  return (
    <GeneralContext.Provider
      value={{
        style,
        setStyle,
        activeMenu,
        setActiveMenu,
        size,
        setSize,
        position,
        setPosition,
        scroll,
        setScroll,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

// Create a custom hook to easily access the context values
export const MyGeneralContext = () => {
  return useContext(GeneralContext);
};
