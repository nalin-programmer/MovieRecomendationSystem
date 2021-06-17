import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PreviousMovies.css";
export default function PreviousMovies() {
  const [movie1, setMovie1] = useState("");
  const [movie2, setMovie2] = useState("");
  const [result, setResult] = useState([]);
  function Find(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://127.0.0.1:5000/getmovies",
      data: {
        movies: [movie1, movie2],
      },
    }).then((resp) => {
      console.log(resp);
    });
  }

  return (
    <div className="signupbody">
      <div class="prevmoviecontainer">
        <div
          className="prevmoviecontainer-box"
          style={{ borderRight: "2px solid white", paddingRight: "20px" }}
        >
          <span className="pageTitle">WATCH LIST</span>
          <form>
            <label>Movie Name</label>
            <br />
            <input type="text" onChange={(e) => setMovie1(e.target.value)} />
            <br />
            <label>Movie2 Name</label>
            <br />
            <input type="text" onChange={(e) => setMovie2(e.target.value)} />
            <br />
            <button onClick={Find}>Find</button>
            <br />
            <br />
          </form>
        </div>
        <div className="prevmoviecontainer-box">
          <span className="pageTitle">PREVIOUS MOVIES</span>
          <p>
            Spiderman - 4.3
            <hr />
            Batman - 4.5{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
