import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import APIUrl from "./APIUrl";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`${APIUrl}/posts`);
      const data = await response.json();
      setPosts(data.posts);
    };
    getPosts();
  }, []);

  return (
    <div>
      <h1>Nicole's Blog</h1>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="card"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        );
      })}
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
