import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./PaginatonStyle.css";

const CreatePost = ({ page }) => {
  //posts data..........
  const url = `https://reqres.in/api/users`;
  const [data, setData] = useState({
    name: "",
    job: "",
  });

  function sumbit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      // lastName: data.lastName,
      // email: data.email,
      job: data.job,
    }).then((res) => {
      console.log(res.data);
    });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <div className="createPost">
      <form onSubmit={(e) => sumbit(e)}>
        <div>


          <label>
            <strong>Name</strong>
          </label>

          <input
            onChange={(e) => handle(e)}
            id="name"
            name="name"
            value={data.name}
            type="text"
            placeholder="Enter Your Name"
          ></input>


          
        </div>
        <div>
        <label>
            <strong>job</strong>
          </label>
          <input
            onChange={(e) => handle(e)}
            id="job"
            name="job"
            value={data.job}
            type="text"
            placeholder="Enter your job name"
          ></input>
        </div>
        <button className="createPostButton">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
