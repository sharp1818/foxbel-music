import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSong } from '../../hooks/useSongs';

import {
  FaPlay,
  FaPause,
  FaVolumeDown,
  FaVolumeMute,
  FaVolumeUp,
  FaVolumeOff,
  IoPlaySkipBack,
  IoPlaySkipForward,
} from 'react-icons/all';
import { useParams } from 'react-router-dom';
import { SongsContext } from '../../context/SongContext';
import { FooterStyles } from './FooterStyles';

export const Footer = () => {
  const { track } = useSong();
  const { playing, setPlaying, trackAudio, songs } = useContext(SongsContext);
  const { id } = useParams();
  const volumeAudio = useRef(null);
  const [volume, setVolume] = useState(50);

  let trackFilter = songs.filter((item) => item.id === parseInt(id));

  const toggle = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    // trackAudio.current.removeAttribute('autoPlay');
    playing ? trackAudio.current.play() : trackAudio.current.pause();

    trackAudio.current.addEventListener('ended', () => setPlaying(false));
  }, [playing, setPlaying, trackAudio]);

  const volumeChange = () => {
    trackAudio.current.volume = volumeAudio.current.value / 100;
    setVolume(volumeAudio.current.value);
  };

  let firstImage = songs[0]?.album.cover_medium;
  let firstSong = songs[0]?.preview;
  let firstTitle = songs[0]?.album.title;
  let firstTitleShort = songs[0]?.title_short;
  let firstArtist = songs[0]?.artist.name;

  return (
    <FooterStyles>
      <div className="figure">
        {/* <img
          src={
            trackFilter[0]?.album?.cover_medium ||
            track?.album?.cover_medium ||
            firstImage
          }
          alt={
            trackFilter[0]?.album?.title || track?.album?.title || firstTitle
          }
          title={
            trackFilter[0]?.title_short || track?.title_short || firstTitleShort
          }
          loading="lazy"
        /> */}
        <div className="figure__description">
          <p>
            {trackFilter[0]?.title_short ||
              track.title_short ||
              firstTitleShort}
          </p>
          <span>
            {trackFilter[0]?.artist.name || track.artist?.name || firstArtist} -{' '}
            {trackFilter[0]?.album.title || track.album?.title || firstTitle}
          </span>
        </div>
      </div>
      <div className="middle">
        <button>
          <IoPlaySkipBack style={{ width: '26px', height: '26px' }} />
        </button>
        <button className="play" onClick={toggle}>
          {playing ? <FaPause /> : <FaPlay />}
          <audio
            src={trackFilter[0]?.preview || track?.preview || firstSong}
            ref={trackAudio}
            // preload
            // onError={togg}
            // autoPlay
          ></audio>
        </button>
        <button>
          <IoPlaySkipForward style={{ width: '26px', height: '26px' }} />
        </button>
      </div>

      <div className="volume">
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          ref={volumeAudio}
          onChange={volumeChange}
        />

        <span className="volume-control">
          {volume >= 0 && volume <= 2 ? (
            <FaVolumeMute />
          ) : volume >= 3 && volume <= 29 ? (
            <FaVolumeOff />
          ) : volume >= 30 && volume <= 59 ? (
            <FaVolumeDown />
          ) : volume >= 60 && volume <= 100 ? (
            <FaVolumeUp />
          ) : null}
        </span>
      </div>
    </FooterStyles>
  );
};

// export default React.memo(Song, (prevProps, nextProps) => {
//   return prevProps.id === nextProps.id;
// });
