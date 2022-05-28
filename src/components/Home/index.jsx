import { faList, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { album } from "../../apiServices/albumServices";
import { home } from "../../apiServices/homeServices";
import { info } from "../../apiServices/infoServices";
import { song } from "../../apiServices/songServices";
import Context from "../../State/context";
import Album from "../Album";
import Controls from "../Controls";
import Song from "../Song";
import "./Home.scss";

function Home() {
  const store = useContext(Context);
  const { top } = store;
  const listFirst = top[0];
  const [showSong, setShowSong] = useState(false);
  const [showAlbum, setShowAlbum] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [playList, setPlaylist] = useState([]);
  const [playlistId, setPlaylistId] = useState("ZWZB969E");
  const [songId, setSongId] = useState(null);
  const [songs, setSongs] = useState(null);
  const [infor, setInfor] = useState({});
  // get playlist
  useEffect(() => {
    const fetchApi = async () => {
      const respon = await song(playlistId);
      setPlaylist(respon);
    };
    fetchApi();
  }, [playlistId]);

  // get song
  useEffect(() => {
    const fetchApi = async () => {
      const respon = await album(songId);
      setSongs(respon);
    };
    fetchApi();
  }, [songId]);

  useEffect(() => {
    const fetchApi = async () => {
      const respon = await info(songId);
      setInfor(respon);
    };
    fetchApi();
  }, [songId]);

  // UI logic
  const handleClick = () => {
    setShowAlbum(false);
    setShowSong(!showSong);
    if (!showAlbum) {
      setShowControls(!showControls);
    }
  };
  const handleShow = () => {
    setShowSong(false);
    setShowAlbum(!showAlbum);
    if (!showSong) {
      setShowControls(!showControls);
    }
  };

  return (
    <div className="wrapper">
      <div className="header">
        <button className="btn" onClick={handleShow}>
          <FontAwesomeIcon className="icon" icon={faListCheck} />
        </button>
        <button className="btn" onClick={handleClick}>
          <FontAwesomeIcon className="icon" icon={faList} />
        </button>
      </div>
      {showSong && (
        <Song
          listFirst={listFirst}
          setPlaylistId={setPlaylistId}
          playlistId={playlistId}
        />
      )}
      {showAlbum && (
        <Album playList={playList} songId={songId} setSongId={setSongId} />
      )}
      {showControls && <Controls infor={infor} song={songs} />}
    </div>
  );
}

export default Home;
