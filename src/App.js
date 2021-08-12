import UIInput from "./Components/UI/UIInput/UIInput";
import s from "./App.module.scss";
import { useRef, useState } from "react";
import Button from "./Components/UI/Button/Button";
import PostsList from "./Components/PostsList/PostsList";

function App() {
    let posts = [{ title: "Hello", body: "this is big post", id: 0 }];
    const [postsState, setPostsState] = useState(posts);
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
        setPost({ title: "", body: "" });
    };
    
    const inputRef = useRef();
    const inputRefConsole = (e) => {
        console.log(e.target.value)
    }
    
    return (
        <div>
            <input onChange={inputRefConsole} ref={inputRef} type="text" />
            <form className={s.ui}>
                <UIInput
                    onChange={onChangeTitle}
                    value={post.title}
                    placeholder="title"
                />
                <UIInput
                    onChange={onChangeBody}
                    value={post.body}
                    placeholder="body"
                />
                <Button addPost={addPost}>Send Post</Button>
            </form>

            <PostsList postsState={postsState.reverse()} />
        </div>
    );
}

export default App;
