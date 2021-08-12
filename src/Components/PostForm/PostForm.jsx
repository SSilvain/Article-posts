import UIButton from "../UI/UIButton/UIButton";
import UIInput from "../UI/UIInput/UIInput";
import s from "./PostForm.module.scss";

const PostForm = ({ post, onChangeTitle, onChangeBody, addPost}) => {
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
			<UIButton addPost={addPost}>Send Post</UIButton>
		</form>
	)
}

export default PostForm;