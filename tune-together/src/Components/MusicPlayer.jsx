import React, { useState } from "react";

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player">
            <div className="music-info">
                <img src="../src/imgs/album-leo2.jpg" alt="Album Art" className="album-art"/>
                <div className="track-info">
                    <h2>Track Title</h2>
                    <p>Artist Name</p>
                </div>
            </div>
            <div className="controls">
                <button onClick={() => console.log("Previous Track")}>Previous</button>
                <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
                <button onClick={() => console.log("Next Track")}>Next</button>
            </div>
            <div className="equalizer">
                <div className={`bar ${isPlaying ? "active" : ""}`}></div>
                <div className={`bar ${isPlaying ? "active" : ""}`}></div>
                <div className={`bar ${isPlaying ? "active" : ""}`}></div>
                <div className={`bar ${isPlaying ? "active" : ""}`}></div>
                <div className={`bar ${isPlaying ? "active" : ""}`}></div>
                <div className={`bar ${isPlaying ? "active" : ""}`}></div>
                <div className={`bar ${isPlaying ? "active" : ""}`}></div>
                <div className={`bar ${isPlaying ? "active" : ""}`}></div>
            </div>
        </div>
    );
};

export default MusicPlayer;
