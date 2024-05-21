import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [roomCode, setRoomCode] = useState("");

    const handleJoinClick = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
        setRoomCode("");
    };

    const handleRoomCodeChange = (event) => {
        setRoomCode(event.target.value);
    };

    const handleSubmit = () => {
        console.log("Room Code:", roomCode);
    };

    const handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            handleSubmit()
        }
    }

    return (
        <div className="mainpage-container">
            <nav className="mainpage-nav">
                <h1 className="title">Tune Together</h1>
                <img
                    className="menu"
                    src="../src/imgs/menu.png"
                    alt="menu"
                />
            </nav>
            <div className="btn-container">
                <button className="join" onClick={handleJoinClick}>
                    JOIN ROOM
                </button>
                <Link to={'/CreateRoom'}><button className="create">CREATE ROOM</button></Link>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Enter Room Code</h2>
                            <input
                                type="text"
                                value={roomCode}
                                onChange={handleRoomCodeChange}

                            />
                        <div>
                            <Link to={'/JoinRoom'}><button onClick={handleSubmit}>Submit</button></Link>
                            <button onClick={handlePopupClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainPage;
