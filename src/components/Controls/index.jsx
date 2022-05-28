import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Controls.scss";

function Controls({ song, infor = {} }) {
  const [spinner, setSpinner] = useState(false);
  const title = "Vui long chon bai hat";
  const artistsNames = "Chua co du lieu";
  const thumnail = require("../../asset/no-image.png");
  return (
    <div className="controls">
      <div className="info-song">
        <div className="img-thum">
          <img
            src={(infor && infor.thumbnailM) || thumnail}
            alt=""
            className={spinner ? "active" : ""}
          />
        </div>
        <div className="song-name">
          <span>{(infor && infor.title) || title}</span>
          <p>{(infor && infor.artistsNames) || artistsNames}</p>
        </div>
      </div>
      <div className="controls-btn">
        <AudioPlayer
          onPlay={() => setSpinner(true)}
          onPause={() => setSpinner(false)}
          src={song && song["128"]}
          // showFilledProgress={false}
        />
      </div>
    </div>
  );
}

export default Controls;
