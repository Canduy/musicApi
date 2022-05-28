import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Song.scss";

function Song({ listFirst, playlistId, setPlaylistId }) {
  const handleChange = (id) => {
    setPlaylistId(id);
  };

  return (
    <div className="song">
      <div className="song-list">
        {listFirst &&
          listFirst.items.map((item, index) => (
            <div
              to="/album"
              className="song-item"
              key={item.encodeId}
              style={
                playlistId === item.encodeId
                  ? { background: "var(--body-color)" }
                  : {}
              }
              onClick={() => handleChange(item.encodeId)}
            >
              <div>
                <img src={item.thumbnail} alt="" />
                <span className="title">{item.title}</span>
              </div>
              <button className="btn btn-song">
                <FontAwesomeIcon className="icon" icon={faPlayCircle} />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Song;
