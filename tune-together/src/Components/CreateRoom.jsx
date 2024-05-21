import React from "react";
import MusicPlayer from '../Components/MusicPlayer';
import Chatbox from '../Components/ChatBox';
import VotePoll from "../Components/VotePoll";

const CreateRoom = () => {
    return (
        <div className="joinroom-container">
            <div className="joinroom-nav">
                <h1>Tune Together</h1>
                <div className="roomcode">Room Code: 22IT057</div>
            </div>
            <div className="joinroom-subcontainer">
                <VotePoll />
                <MusicPlayer />
                <Chatbox />
            </div>
        </div>
    );
};

export default CreateRoom;
