import UIButton from "../../UI/UIButton/UIButton";
import s from "./Post.module.scss";

const Post = ({ title, body, id, number, removePost }) => {
	const executeRemovePost = (e) => {
		removePost(id)
	}
	return (
		<div className={s.posts}>
			<div className={s.post}>
				<div className={s.titleWrapper}>
					<div className={s.titleLeft}>
						<div className={s.number}>{number}.</div>
						<h2 className={s.title}>{title}</h2>
					</div>
					<div className={s.titleRight}>
						<UIButton onClick={executeRemovePost} style={{height: 40}}>Delete</UIButton>
					</div>
				</div>
				<p className={s.body}>{ body}</p>
			</div>
		</div>
	)
}

export default Post;