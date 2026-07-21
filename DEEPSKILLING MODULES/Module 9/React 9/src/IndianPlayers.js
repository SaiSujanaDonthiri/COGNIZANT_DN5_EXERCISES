import React from 'react';

function IndianPlayers() {
  // Destructuring
  const players = [
    'Rohit',
    'Virat',
    'Rahul',
    'Shreyas',
    'Pant',
    'Hardik'
  ];

  const [oddPlayer1, oddPlayer2, oddPlayer3] = players;
  const [evenPlayer1, evenPlayer2, evenPlayer3] = [
    'Jadeja',
    'Ashwin',
    'Bumrah'
  ];

  // Merging two arrays using spread operator
  const T20players = ['Rohit', 'Virat', 'Hardik'];
  const RanjiTrophyPlayers = ['Rahul', 'Jadeja', 'Ashwin'];

  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Indian Players</h2>

      <h3>Odd Team Players</h3>
      <p>
        {oddPlayer1}, {oddPlayer2}, {oddPlayer3}
      </p>

      <h3>Even Team Players</h3>
      <p>
        {evenPlayer1}, {evenPlayer2}, {evenPlayer3}
      </p>

      <h3>Players from T20 and Ranji Trophy</h3>
      <p>{allPlayers.join(', ')}</p>
    </div>
  );
}

export default IndianPlayers;