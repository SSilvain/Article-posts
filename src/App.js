import UIInput from "./Components/UI/UIInput/UIInput";
import s from "./App.module.scss";
import {  useState } from "react";
import Button from "./Components/UI/UIButton/UIButton";
import PostsList from "./Components/PostsList/PostsList";
import PostForm from "./Components/PostForm/PostForm";

function App() {
    const [postsState, setPostsState] = useState([]);
    let [post, setPost] = useState({ title: "", body: "" });

    const onChangeTitle = (e) => {
        setPost({ ...post, title: e.target.value });
    };
    const onChangeBody = (e) => {
        setPost({ ...post, body: e.target.value });
    };

    const addPost = (e) => {
        e.preventDefault();
        setPost({ ...post, id: Date.now() })
        setPostsState([...postsState, post]);
        setPost({ title: "", body: "" });
    };
    
    return (
        <div>
            <PostForm
                post={post}
                onChangeTitle={onChangeTitle}
                onChangeBody={onChangeBody}
                addPost={addPost}
            />

            <PostsList postsState={postsState} title="Posts about traveling" />

            {true && <div>Hello, and and</div>}
        </div>
    );
}

export default App;
