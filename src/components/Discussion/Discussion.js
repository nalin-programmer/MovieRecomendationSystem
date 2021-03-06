import React, { useEffect, useState } from "react";
import "./Discussion.css";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
export default function Discussion() {
  const history = useHistory();
  const { id } = useParams();
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userComment, setUserComment] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [tags, setTags] = useState([]);
  const [postedBy, setPostedBy] = useState("");
  const [postedAt, setPostedAt] = useState("0000-00-00 00:00:00");
  const [Comments, setComments] = useState([]);
  useEffect(async () => {
    await axios
      .get(process.env.REACT_APP_BACKEND_API + "api/discussion/" + id)
      .then((response) => {
        setTitle(response.data.discussion.title);
        setDescription(response.data.discussion.description);
        setLikes(response.data.discussion.likes.length);
        setDislikes(response.data.discussion.dislikes.length);
        setTags(response.data.discussion.tags);
        setPostedBy(response.data.discussion.postedBy.name);
        setPostedAt(response.data.discussion.postedAt);
        setComments(response.data.discussion.comments);
      });

    try {
      setUserId(localStorage.getItem("uid"));
      setUserName(localStorage.getItem("name"));
    } catch (e) {
      alert("Please signin to react to the discussion !!!");
      history.push("/signin");
      console.log(e);
    }
  }, []);
  function update(e) {
    e.preventDefault();
    axios
      .get(process.env.REACT_APP_BACKEND_API + "api/discussion/" + id)
      .then((response) => {
        setTitle(response.data.discussion.title);
        setDescription(response.data.discussion.description);
        setLikes(response.data.discussion.likes.length);
        setDislikes(response.data.discussion.dislikes.length);
        setTags(response.data.discussion.tags);
        setPostedBy(response.data.discussion.postedBy.name);
        setPostedAt(response.data.discussion.postedAt);
        setComments(response.data.discussion.comments);
      });
  }
  function AddLike(e) {
    e.preventDefault();
    if (id !== "" && userId !== "") {
      axios({
        method: "post",
        url: process.env.REACT_APP_BACKEND_API + "api/discussion/like",
        data: {
          discussionId: id,
          userId: userId,
        },
      });
      update(e);
    } else {
      history.push("/signin");
    }
  }
  function AddDislike(e) {
    e.preventDefault();
    if (id !== "" && userId !== "") {
      axios({
        method: "post",
        url: process.env.REACT_APP_BACKEND_API + "api/discussion/dislike",
        data: {
          discussionId: id,
          userId: userId,
        },
      });
      update(e);
    } else {
      history.push("/signin");
    }
  }
  function AddComment(e) {
    e.preventDefault();
    if (id !== "" && userId !== "") {
      if (userComment !== "")
        axios({
          method: "post",
          url: process.env.REACT_APP_BACKEND_API + "api/discussion/comment",
          data: {
            discussionId: id,
            userId: userId,
            comment: userComment,
          },
        });
      update(e);
    } else {
      history.push("/signin");
    }
  }
  return (
    <div>
      <Paper elevation={3} className="DiscussionPaper">
        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ float: "left", width: "50%" }}>
            <h1 style={{ margin: "0px", padding: "0px" }}>{title}</h1>
          </div>
          <div style={{ width: "50%" }}>
            <div style={{ float: "right" }}>
              {" "}
              <IconButton
                aria-label="upload picture"
                component="span"
                onClick={AddLike}
              >
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#e1e5ea",
                    borderRadius: "30%",
                    padding: "3px",
                  }}
                >
                  <div>
                    <ThumbUpIcon style={{ color: "green" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "20px",
                      }}
                    >
                      {likes}
                    </p>
                  </div>
                </div>
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={AddDislike}
              >
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#e1e5ea",
                    borderRadius: "30%",
                    padding: "3px",
                  }}
                >
                  <div>
                    <ThumbDownIcon style={{ color: "red" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "20px",
                      }}
                    >
                      {dislikes}
                    </p>
                  </div>
                </div>
              </IconButton>
            </div>
          </div>
        </div>
        <div className="DiscussionContent">
          <p style={{ marginTop: "0px" }}>
            {tags.map((tag) => (
              <span
                style={{
                  fontSize: "1rem",
                  color: "#1167b1",
                  fontStyle: "italic",
                  margin: "0px",
                  padding: "0px",
                }}
              >
                {"#" + tag + " "}
              </span>
            ))}
            <br />
            <span
              style={{
                fontSize: "1rem",
                color: "#8b8b8b",
                fontStyle: "italic",
                fontWeight: "bold",
                margin: "0px",
                padding: "0px",
              }}
            >
              Posted by: {postedBy}
            </span>
            <br />
            <br />
            {description}
            <br />
            <br />
            <span
              style={{
                fontSize: "1rem",
                color: "#8b8b8b",
                fontStyle: "italic",
                fontWeight: "bold",
                margin: "0px",
              }}
            >
              Posted on:{" "}
              {postedAt.substring(0, 10) + " " + postedAt.substring(11, 19)}
            </span>
            <br />
            <br />
          </p>
        </div>

        <div className="CommentBox">
          <div
            style={{
              width: "100%",
              display: "flex",
              padding: "auto",
              margin: "auto",
            }}
          >
            <div style={{ width: "90%" }}>
              <TextField
                id="outlined-secondary"
                label="Comment"
                variant="outlined"
                color="primary"
                className="CommentBoxInput"
                onChange={(e) => {
                  setUserComment(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                width: "10%",
                float: "right",
                padding: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    float: "left",
                    width: "100%",
                    hight: "100%",
                    padding: "auto",
                    margin: "auto",
                    paddingLeft: "3px",
                  }}
                >
                  <div className="DiscussBtn">
                    <button id="btn" onClick={AddComment}>
                      <p id="btnText">Submit</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Comments:</h2>
          {Comments.map((comment) => (
            <div
              style={{
                width: "100%",
                borderBottom: "1px solid black",
                paddingBottom: "10px",
              }}
            >
              <h3>{comment.name}</h3>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </Paper>
    </div>
  );
}
