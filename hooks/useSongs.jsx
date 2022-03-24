import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { SongsContext } from "../context/SongContext";

export const useSong = () => {
  const { songs, setSongs, setLoading } = useContext(SongsContext);
  const [track, setTrack] = useState({});

  const { id } = useParams();

  let currentId = id;

  let location = useLocation();
  const currentTrack = location.search.slice(3);

  const keywordToUse =
    currentTrack || localStorage.getItem("lastKeyword") || "Adele";

  const IdToUse = currentId || localStorage.getItem("lastId") || "1557137102";

  const API_URL = "https://deezerdevs-deezer.p.rapidapi.com";

  const getSongs = ({ artist = "adele" } = {}) => {
    return fetch(`${API_URL}/search?q=${artist}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "e62864a679mshc5ee2dc5d725aa5p1636c4jsn4093a8c53f08",
      },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        return data;
      })
      .catch((err) => console.error(err));
  };

  const getTracks = async ({ id = "1557137102" } = {}) => {
    return fetch(`${API_URL}/track/${id}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "e62864a679mshc5ee2dc5d725aa5p1636c4jsn4093a8c53f08",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    getSongs({
      artist: currentTrack ? currentTrack : keywordToUse,
    }).then((data) => {
      setSongs(data);
      // setPlaying(false);
    });
    localStorage.setItem("lastKeyword", keywordToUse);
  }, [setSongs, currentTrack, keywordToUse, setLoading]);

  // console.log(playing);

  useEffect(() => {
    getTracks({ id: currentId ? currentId : IdToUse }).then((data) => {
      setTrack(data);
    });

    localStorage.setItem("lastId", IdToUse);
  }, [setTrack, songs, id, setLoading, currentId, IdToUse]);

  return { songs, track };
};
