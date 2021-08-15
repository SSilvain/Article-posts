import Post from "./Post/Post";
import s from "./PostsList.module.scss"

const PostsList = ({ searchInSortedPost, title, removePost }) => {
	const posts = searchInSortedPost.map((p, index) => {
		return <Post removePost={removePost} title={p.title} number={index} key={p.id} id={p.id} body={p.body} />
	})
	
	return (
		<div>
			{searchInSortedPost.length ? <h3 className={s.title}>{title}</h3> : <h3 className={s.title}>Nothing</h3>}
			
			{posts}
		</div>)
}

export default PostsList;