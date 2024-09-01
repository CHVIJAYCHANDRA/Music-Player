import React from 'react';

function Details({ song }) {
    return (
        <div className="c-player--details">
            <div className="details-img">
                <img src={song.img_src} alt={song.title} />
            </div>
            <h4 className="details-title">{song.title}</h4>
            <p className="details-artist">{song.artist}</p>
            {/* Display lyrics if available */}
            {song.lyrics && (
                <div className="lyrics">
                    <h5>Lyrics:</h5>
                    <pre>{song.lyrics}</pre>
                </div>
            )}
        </div>
    );
}

export default Details;
