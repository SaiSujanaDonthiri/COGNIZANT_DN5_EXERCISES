import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Rohit Sharma', score: 85 },
    { name: 'Virat Kohli', score: 92 },
    { name: 'KL Rahul', score: 68 },
    { name: 'Shreyas Iyer', score: 75 },
    { name: 'Rishabh Pant', score: 60 },
    { name: 'Hardik Pandya', score: 82 },
    { name: 'Ravindra Jadeja', score: 65 },
    { name: 'Ravichandran Ashwin', score: 55 },
    { name: 'Jasprit Bumrah', score: 45 },
    { name: 'Mohammed Shami', score: 72 },
    { name: 'Kuldeep Yadav', score: 50 }
  ];

  const playerList = players.map(player => (
    <li key={player.name}>
      {player.name} - {player.score}
    </li>
  ));

  const lowScoringPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      <h3>All Players</h3>
      <ul>
        {playerList}
      </ul>

      <h3>Players with scores below 70</h3>
      <ul>
        {lowScoringPlayers.map(player => (
          <li key={player.name}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;