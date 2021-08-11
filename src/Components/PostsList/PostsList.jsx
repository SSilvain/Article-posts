import { memo } from "react";
import Post from "./Post/Post";

const PostsList = memo(({ postsState }) => {
	return postsState.map((p,index) => {
		return <Post title={p.title} number={index} id={Date.now()} body={p.body} />;
	});
})

export default PostsList;