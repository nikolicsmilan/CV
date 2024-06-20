import { useEffect, useState } from 'react';

const useOrientationLock = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const handleOrientationChange = () => {
        setIsLandscape(window.innerWidth > window.innerHeight);
      };

      window.addEventListener('resize', handleOrientationChange);
      handleOrientationChange();

      return () => {
        window.removeEventListener('resize', handleOrientationChange);
      };
    }
  }, []);

  return isLandscape;
};

export default useOrientationLock;
/*  {isLandscape && (
        <div className="landscape-warning h-screen w-screen ">
          <p>Kérjük, fordítsd vissza az eszközt álló módba.</p>
        </div>
      )} */