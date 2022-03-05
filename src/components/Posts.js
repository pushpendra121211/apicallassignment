import React from "react";

//User data
const Posts = ({ user, getUsersData }) => {
  const cardDataHandler = (user) => {
    getUsersData(user);
  };

  return (
    <a href="#" className="main">
      <div
        key={user.id}
        className="cards "
        onClick={() => cardDataHandler(user)}
      >
        <div className="image">
          <strong>#{user.id}</strong>
          <img src={user.avatar} alt="" />
        </div>
        <h1 className="userName">{user.first_name}</h1>

        <div className="email">
          <p className="userEmail">
            <strong>Email:</strong>
            {user.email}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Posts;
