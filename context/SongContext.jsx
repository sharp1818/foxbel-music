import { createContext, useRef, useState } from 'react';

export const SongsContext = createContext({});

// Estado global
export const SongsContextProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const trackAudio = useRef(null);

  return (
    <SongsContext.Provider
      value={{
        songs,
        setSongs,
        playing,
        setPlaying,
        trackAudio,
        autoPlay,
        setAutoPlay,
        loading,
        setLoading,
      }}
    >
      {children}
    </SongsContext.Provider>
  );
};
