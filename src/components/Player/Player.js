import React, { useState, useRef, useEffect } from 'react';
import Controls from './Controls';
import Details from './Details';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    }, [isPlaying, props.currentSongIndex]);

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex((prevIndex) => {
                let temp = prevIndex + 1;
                if (temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            props.setCurrentSongIndex((prevIndex) => {
                let temp = prevIndex - 1;
                if (temp < 0) {
                    temp = props.songs.length - 1;
                }
                return temp;
            });
        }
    };

    return (
        <div className="c-player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4> ♫⋆｡♪ ₊˚♬ ﾟ Music Player  𝄞⨾𓍢ִ໋🎧ྀི </h4>
            <Details song={props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
        </div>
    );
}

export default Player;
