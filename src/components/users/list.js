import React from 'react';
import {loadUsers, fetchUserDetails} from 'effects';

const ListUsers = ({ users }) => (
  <section>
    <h2>GitHub Users</h2>
    <p>Click on the button to fetch random GitHub users.</p>
    <p>Then click on one of the usernames to get the details for that user.</p>
    <button onClick={loadUsers}>Load GitHub users</button>
    <ul>
      {
        users.map((user, index) => (
          <li key={index} onClick={() => fetchUserDetails(user.login)}>
            <strong>{user.login}</strong>
          </li>
        ))
      }
    </ul>
  </section>
);

ListUsers.propTypes = {
  users: React.PropTypes.array.isRequired
};

export default ListUsers;
