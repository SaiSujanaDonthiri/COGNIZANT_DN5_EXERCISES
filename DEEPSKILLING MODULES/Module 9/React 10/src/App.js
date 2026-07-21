import React from 'react';

function App() {
  const offices = [
    {
      name: 'DBS',
      rent: 50000,
      address: 'Chennai'
    },
    {
      name: 'TCS',
      rent: 75000,
      address: 'Hyderabad'
    },
    {
      name: 'Infosys',
      rent: 60000,
      address: 'Bangalore'
    }
  ];

  return (
    <div>
      <h1>Office Space Rental</h1>

      <img
        src="https://via.placeholder.com/300"
        alt="Office Space"
        width="300"
      />

      {offices.map((office, index) => (
        <div key={index}>
          <h2>{office.name}</h2>

          <p
            style={{
              color: office.rent < 60000 ? 'red' : 'green'
            }}
          >
            Rent: ₹{office.rent}
          </p>

          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;