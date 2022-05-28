import "./Album.scss";

function Album({ playList, setSongId, songId }) {
  const songs = playList && playList.song;
  return (
    <div className="album">
      <div className="album-list">
        {songs &&
          songs?.items.map((song) => (
            <div
              className="album-item"
              key={song.encodeId}
              style={
                songId === song.encodeId
                  ? { background: "var(--body-color" }
                  : {}
              }
              onClick={() => setSongId(song.encodeId)}
            >
              <div className="album-img">
                <img src={song.thumbnailM} alt="" />
              </div>
              <div className="album-name">
                <span>{song.title}</span>
                <p>{song.artistsNames}</p>
              </div>
              <span className="album-timer">
                {`0${Math.floor(song.duration / 60)}`.slice(-2)} :{" "}
                {`0${song.duration % 60}`.slice(-2)}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Album;
