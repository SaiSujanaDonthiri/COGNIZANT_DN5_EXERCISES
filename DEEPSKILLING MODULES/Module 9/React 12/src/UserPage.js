import React from 'react';

function UserPage(props) {
  return (
    <div>

      <h2>Welcome User</h2>

      <h3>You can now book your tickets.</h3>

      <button onClick={props.onLogout}>
        Logout
      </button>

    </div>
  );
}

export default UserPage;