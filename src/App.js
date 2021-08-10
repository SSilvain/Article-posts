import Input from "./Components/UI/Input/Input";
import "./App.css";
import { useState } from "react";
import Button from "./Components/UI/Button/Button";
import Post from "./Components/Post/Post";

function App() {
    let posts = [{ title: "Hello", body: "this is big post", id: 0 }];
    const [post, setPost] = useState({ title: "", body: "" });

    const onChangeTitle = (e) => {
        setPost({ ...post, title: e.target.value });
    };
    const onChangeBody = (e) => {
        setPost({ ...post, body: e.target.value });
    };

    const createPosts = () => {
        return posts.map((p) => {
            return <Post title={p.title} id={Date.now()} body={p.body} />;
        });
    };
    return (
        <div>
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
            <Button>Send Post</Button>

            {createPosts()}
        </div>
    );
}

export default App;
