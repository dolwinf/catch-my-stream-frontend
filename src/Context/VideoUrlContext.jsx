import { useState, createContext } from "react";

export const VideoUrlContext = createContext();

export const VideoUrlProvider = ({ children }) => {
  const [url, setUrl] = useState("");
  return (
    <VideoUrlContext.Provider value={{ url, setUrl }}>
      {children}
    </VideoUrlContext.Provider>
  );
};
