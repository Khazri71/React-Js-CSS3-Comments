import { useState } from "react";
import "./App.css";
import Comment from "./components/Comment";
import uniqid from "uniqid";

function App() {
  let [commentsArr, setCommentsArr] = useState([
    {
      firstName: "Ali",
      lastName: "Yui",
      title: "Test 1",
      commentText:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit Explicabo voluptatum possimus quis dolorem, impedit magni exercitationem architecto ",
    },
    {
      firstName: "Sami",
      lastName: "Wri",
      title: "Test 2",
      commentText:
        "consequatur animi eos odio iste perferendis rerum assumenda porro veritatis nesciunt. Aspernatur, officia!",
    },
    {
      firstName: "Jane",
      lastName: "Teu",
      title: "Test 3",
      commentText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ad tempora optio laboriosam deleniti odio.",
    },
  ]);
  return (
    <div>
      <p className="text">Comments</p>
      <div className="container">
        {commentsArr.map((com) => (
          <Comment key={uniqid()} comment={com} />
        ))}
      </div>
    </div>
  );
}

export default App;
