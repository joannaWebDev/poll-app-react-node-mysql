import React, { useState, useEffect } from 'react';
import GiftBox from './GiftBox';
import './Poll.css';

function StrawPoll() {
  const [voteData, setVoteData] = useState();
  const [totalVotes, setTotalVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  const url = '/poll/';

  const updateState = (data) => {
    console.log(data);
    setVoteData(data);
    let sum = 0;
    data.forEach(function (obj) {
      sum += obj.votes;
    });
    setTotalVotes(sum);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        updateState(data.rows);
      });
  }, []);

  const submitVote = (e) => {
    e.preventDefault();
    if (voted === false) {
      const voteSelected = e.target.id;
      setVoted(!voted);

      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: voteSelected }),
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((data) => updateState(data.rows));
    }
  };

  let pollOptions;

  if (voteData) {
    pollOptions = voteData.map((item) => {
      return (
        <li key={item.id}>
          <GiftBox />
          <button onClick={submitVote} id={item.id}>
            {item.option_name}- got {item.votes} votes
          </button>
        </li>
      );
    });
  }

  return (
    <div className="poll">
      <h1>Choose the gift behind mystery box</h1>
      <ul className={voted ? 'results' : 'options'}>{pollOptions}</ul>
      <p>TOTAL VOTES: {totalVotes}</p>
    </div>
  );
}

export default StrawPoll;
