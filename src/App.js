import Input from "./Components/UI/Input/Input";
import './App.css';
import { useState } from "react";

function App() {
  const [post, setPost] = useState({ title: "", body: "" })
  
  const onChangeTitle = (e) => {
    setPost({...post, title: e.target.value})
  }
  
  return (
      <>
          {/* <input type="text" onChange={onChangeTitle} value={post.title} /> */}
          <Input
              onChange={onChangeTitle}
              value={post.title}
              placeholder="title"
          />
          <Input value={post.body} placeholder="body" />
      </>
  );
}

export default App;
