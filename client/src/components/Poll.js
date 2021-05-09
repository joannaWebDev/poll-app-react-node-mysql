import React, { useState, useEffect } from 'react';
import './Poll.css';

function StrawPoll() {
  const [voteData, setVoteData] = useState();
  const [totalVotes, setTotalVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  const url = '/poll/';
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setVoteData(data);
        let sum = 0;
        data.forEach(function (obj) {
          sum += obj.votes;
        });
        setTotalVotes(sum);
      });
  }, []);

  const submitVote = (e) => {
    if (voted === false) {
      const voteSelected = e.target.dataset.id;
      const voteCurrent = voteData[voteSelected].votes;
      voteData[voteSelected].votes = voteCurrent + 1;
      setTotalVotes(totalVotes + 1);
      setVoted(!voted);
      const options = {
        method: 'POST',
        body: JSON.stringify(voteData),
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };

  let pollOptions;
  if (voteData) {
    pollOptions = voteData.map((item) => {
      return (
        <li key={item.id} >       
          <div className="box">
            {/* <i className="fa fa-heart-o heart">❤️</i> */}
            <div className="lid close">
              <div className="qmark">{item.id}</div>
              <div className="face ltop"></div>
              <div className="face lleft"></div>
              <div className="face lright"></div>
            </div>
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <button onClick={submitVote} data-id={item.id}>
            {item.option}
            <span>- {item.votes} Votes</span>
          </button>
        </li>
      );
    });
  }

  return (
    <div className="poll">
      <h1>Choose the gift behind box nº...</h1>
      <ul className={voted ? 'results' : 'options'}>{pollOptions}</ul>
      <p>Total Votes: {totalVotes}</p>
    </div>
  );
}

export default StrawPoll;
