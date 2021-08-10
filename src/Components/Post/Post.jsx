import s from "./Post.module.scss";

const Post = ({title, body, id}) => {
	return (
		<div className={s.posts} key={id}>
			<div className={s.post}>
				<div className={s.titleWrapper}>
					<div className={s.titleLeft}>
						<div className={s.number}>1.</div>
						<h2 className={s.title}>{title}</h2>
					</div>
					<div className={s.titleRight}>
						<button className={s.button}>Delete</button>
					</div>
				</div>
				<p className={s.body}>{ body}</p>
			</div>
		</div>
	)
}

export default Post;