import Input from "./Components/UI/Input/Input";
import s from "./App.module.scss";
import { useState } from "react";
import Button from "./Components/UI/Button/Button";
import PostsList from "./Components/PostsList/PostsList";

function App() {
  let posts = [{ title: "Hello", body: "this is big post", id: 0 }];
  const [postsState, setPostsState] = useState (posts) ;
    const [post, setPost] = useState({ title: "", body: "" });

    const onChangeTitle = (e) => {
        setPost({ ...post, title: e.target.value });
    };
    const onChangeBody = (e) => {
        setPost({ ...post, body: e.target.value });
    };


  
  const addPost = (e) => {
    e.preventDefault();
    setPostsState([...postsState, post]);
    setPost({ title: '', body: ''});
  }
    return (
        <div>
            <form className={s.ui}>
                <Input
                    onChange={onChangeTitle}
                    value={post.title}
                    placeholder="title"
                />
                <Input
                    onChange={onChangeBody}
                    value={post.body}
                    placeholder="body"
                />
                <Button addPost={addPost}>Send Post</Button>
            </form>

            <PostsList postsState={postsState} />
        </div>
    );
}

export default App;
