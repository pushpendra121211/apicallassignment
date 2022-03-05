import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";
import "./PaginatonStyle.css";
import CreatePost from "./CreatePost";

const Pagination = ({ setPage, page, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [page]);

  const [isAddPost, setIsAddPost] = useState(false);

  //posts data..........
  const url = `https://reqres.in/api/users?page=${page}`;

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (page === 1) {
        setPage(1);
      } else if (page > 1) {
        setPage((prev) => prev - 1);
      }
    } else if (type === "next") {
      if (page === 2) {
        setPage((next) => next);
      } else {
        setPage((next) => next + 1);
      }
    }
  };


  //Creating addpost variable true
  
  function checkAddPost() {
    if (isAddPost == false) {
      setIsAddPost(true);
    }
  }

  return (
    <div className="formwrapper1">
      <div className="btnPagination">
        <button className="prev" onClick={() => onButtonClick("prev")}>
          Previous
        </button>

        <button className="next" onClick={() => onButtonClick("next")}>
          Next
        </button>
      </div>

      {/* ..........user new data section................  */}

      <div>
        <a
          href="#"
          className="btncreatepost"
          onClick={() => {
            checkAddPost(isAddPost);
          }}
        >
          Create New Post
        </a>
      </div>
      {isAddPost ? <CreatePost page={page} /> : ""}
    </div>
  );
};

export default Pagination;
