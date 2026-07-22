import React from 'react';

function GuestPage(props) {
  return (
    <div>

      <h2>Welcome Guest</h2>

      <h3>Flight Details</h3>

      <p>Flight : AI-202</p>

      <p>From : Hyderabad</p>

      <p>To : Delhi</p>

      <button onClick={props.onLogin}>
        Login
      </button>

    </div>
  );
}

export default GuestPage;