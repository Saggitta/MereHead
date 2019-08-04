import React from "react";

const Users = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {users.map(post => (
        <li key={post.id} className="list-group-item">
          {post.name}
          <br />
          {post.surname}
          <br />
          {post.desc}
        </li>
      ))}
    </ul>
  );
};

export default Users;
