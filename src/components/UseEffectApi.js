import React, { useEffect, useState } from "react";
import PaginationOld from "./PaginationOld";
import "./UseEffectApi.css";
import Posts from "./Posts";
import UserData from "./UserData";

const UseEffectApi = () => {
  const [users, setUsers] = useState([]);
  //set paging
  const [page, setPage] = useState(1);
  const [userSelectedData, setUserSelectedData] = useState();
  const getUsersData = (user) => {
    setUserSelectedData(user);
  };

  //fetching data from API

  const getUsers = async () => {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const mainData = await response.json();
    setUsers(mainData.data);
  };

  return (
    <>
      <h2>List of API users</h2>
      <div className="mainContainer">
        {users.map((user) => {
          return (
            <Posts getUsersData={getUsersData} user={user} key={user.id} />
          );
        })}
      </div>
      <PaginationOld getUsers={getUsers} page={page} setPage={setPage} />
      <UserData userSelectedData={userSelectedData} />
    </>
  );
};

export default UseEffectApi;
