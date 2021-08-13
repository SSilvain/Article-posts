import { useState } from "react";
import UIButton from "../UI/UIButton/UIButton";
import UIInput from "../UI/UIInput/UIInput";
import s from "./PostForm.module.scss";

const PostForm = ({ addPost }) => {

	let [post, setPost] = useState({});
	const onChangeTitle = (e) => {
		setPost({ ...post, title: e.target.value });
		
	};
	const onChangeBody = (e) => {
		setPost({ ...post, body: e.target.value });
	};
	const createPost = (e) => {
		e.preventDefault();
		const tempPost = { ...post, id: Date.now() }
		// setPost({ ...post, id: 777});
		// console.log(post);
		addPost(tempPost);
		setPost({ title: "", body: "" });
	};
	return (
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
			<UIButton onClick={createPost}>Send Post</UIButton>
		</form>
	)
}

export default PostForm;