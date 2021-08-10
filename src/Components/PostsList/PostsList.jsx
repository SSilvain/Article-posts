import Post from "./Post/Post";

const PostsList = ({postsState}) => {
	return postsState.map((p) => {
		return <Post title={p.title} id={Date.now()} body={p.body} />;
	});
};

export default PostsList;