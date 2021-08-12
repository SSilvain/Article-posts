import UIInput from "./Components/UI/UIInput/UIInput";
import s from "./App.module.scss";
import {  useState } from "react";
import PostsList from "./Components/PostsList/PostsList";
import PostForm from "./Components/PostForm/PostForm";

function App() {
    const [postsState, setPostsState] = useState([]);

    
    
    const addPostState = (post) => {
        setPostsState([...postsState, post]);
    };
    
    return (
        <div>
            <PostForm
                addPost={addPostState}
            />

            <PostsList postsState={postsState} title="Posts about traveling" />

            {true && <div>Hello, and and</div>}
        </div>
    );
}

export default App;
