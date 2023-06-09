import React, { createContext, useContext, useState, useEffect } from "react";
import UAParser from "ua-parser-js";
// Create a new context
const InfoContext = createContext();

// Create a provider component to wrap around your app and provide the context values
export const InfoContextProvider = ({ children }) => {
  // Define state variables using the useState hook
  const [visit, setVisit] = useState(0);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [ipAddress, setIPAddress] = useState('');
  const [browserInfo, setBrowserInfo] = useState(null);
  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        setIPAddress(data.ip);
      } catch (error) {
        console.log('Error retrieving IP address:', error);
      }
    };

    fetchIPAddress();
  }, []);

  useEffect(() => {
    // Check if the browser supports Geolocation
    console.log(navigator)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Retrieve the latitude and longitude from the Geolocation API
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []); // Empty dependency array to run the effect only once

  useEffect(() => {
    // Parse the user agent string to get browser and device information
    const parser = new UAParser();
    const userAgent = navigator.userAgent;
    const parsedInfo = parser.setUA(userAgent).getResult();
    setBrowserInfo(parsedInfo);
  }, []);

console.log( "browserinfoooooooo",browserInfo)
  // Provide the context values using the GeneralContext.Provider component
  return (
    <InfoContext.Provider
      value={{
        visit,
        setVisit,
        latitude,
        setLatitude,
        longitude,
        setLongitude,
        ipAddress, 
        setIPAddress,
        browserInfo
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

// Create a custom hook to easily access the context values
export const MyInfoContext = () => {
  return useContext(InfoContext);
};
