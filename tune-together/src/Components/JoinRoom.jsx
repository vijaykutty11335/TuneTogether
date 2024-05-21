import React from "react";
import MusicPlayer from '../Components/MusicPlayer';
import ChatBox from '../Components/ChatBox';
import VotePoll from '../Components/VotePoll';

const JoinRoom = () => {
    return (
        <div className="joinroom-container">
            <div className="joinroom-nav">
                <h1>Tune Together</h1>
                <div className="roomcode">Room Code: 22IT057</div>
            </div>
            <div className="joinroom-subcontainer">
                <VotePoll />
                <MusicPlayer />
                <ChatBox />
            </div>
        </div>
    );
};

export default JoinRoom;
