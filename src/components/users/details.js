import React from 'react';

const ListUsers = ({ user }) => (
  <section>
    <h2>{user.login}</h2>
    <p><img src={user.avatar_url} width="200" /></p>
    <p>Profile URL: <a href={user.html_url}>{user.html_url}</a></p>
  </section>
);

ListUsers.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default ListUsers;
