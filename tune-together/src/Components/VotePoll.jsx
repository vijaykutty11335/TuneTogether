import React, { useState } from "react";

const VotePoll = () => {
    const [votes, setVotes] = useState({
        optionA: 0,
        optionB: 0,
        optionC: 0
    });

    const handleVote = (option) => {
        setVotes(prevVotes => ({
            ...prevVotes,
            [option]: prevVotes[option] + 1
        }));
    };

    const totalVotes = votes.optionA + votes.optionB + votes.optionC;

    const getPercentage = (count) => {
        if (totalVotes === 0) return 0;
        return (count / totalVotes) * 100;
    };

    return (
        <div className="votepoll-container">
            <h3 className="heading">Vote Poll</h3>
            <div className="options">
                <div className="option">
                    <button onClick={() => handleVote('optionA')}>Song 1</button>
                    <div className="vote-count">Votes: {votes.optionA}</div>
                    <div className="progress-bar" style={{ width: `${getPercentage(votes.optionA)}%` }}></div>
                </div>
                <div className="option">
                    <button onClick={() => handleVote('optionB')}>Song 2</button>
                    <div className="vote-count">Votes: {votes.optionB}</div>
                    <div className="progress-bar" style={{ width: `${getPercentage(votes.optionB)}%` }}></div>
                </div>
                <div className="option">
                    <button onClick={() => handleVote('optionC')}>Song 3</button>
                    <div className="vote-count">Votes: {votes.optionC}</div>
                    <div className="progress-bar" style={{ width: `${getPercentage(votes.optionC)}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default VotePoll;
