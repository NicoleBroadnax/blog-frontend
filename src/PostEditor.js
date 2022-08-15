import { useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIUrl from "./APIUrl";

const PostEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate=useNavigate

  const post = async (evt) => {
    evt.preventDefault();

    const response = await fetch(`${APIUrl}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
      credentials: "include",
    });
  };

  return (
    <div>
      <h1>New Post</h1>
      <Link to="/admin">Back to Admin Home</Link>
      <form onSubmit={post}>
        <label>Post Title:</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(evt) => {
            setTitle(evt.target.value);
          }}
        />
        <br />
        <label>Post Content:</label>
        <textarea
          className="form-control"
          value={content}
          onChange={(evt) => {
            setContent(evt.target.value);
          }}
        ></textarea>
        <br />
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostEditor;
