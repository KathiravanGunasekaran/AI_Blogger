import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [topic, setTopic] = useState("");
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(false);

  const generateBlog = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/generate-blog", {
        topic,
      });
      setBlog(response.data.blog);
    } catch (error) {
      console.error("Error generating blog:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>AI powered Blog Generator</h1>
      <br />
      <p>Enter a topic for which the blog will be generated</p>
      <input
        type="text"
        placeholder="Enter your topic"
        id="query"
        value={topic}
        onChange={(event) => setTopic(event?.target.value)}
      />
      <br />
      <button onClick={generateBlog} disabled={loading}>
        {loading ? "Generating..." : "Generate Blog"}
      </button>

      {blog && <p className="blog-output">{blog}</p>}
    </div>
  );
}

export default App;
