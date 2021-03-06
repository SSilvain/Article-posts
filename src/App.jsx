import "./App.module.scss";
import { useMemo, useState } from "react";
import PostsList from "./Components/PostsList/PostsList";
import PostForm from "./Components/PostForm/PostForm";
import UISelect from "./Components/UI/UISelect/UISelect"
import UIInput from "./Components/UI/UIInput/UIInput";

function App() {
	let initialPosts = [
		{ title: "Korem ipsum dolor sit.", body: "Porem ipsum dolor sit amet consectetur adipisicing elit. Saepe impedit ducimus deleniti reiciendis, dignissimos voluptates minus, sunt dolore nobis eum hic fuga cupiditate facere vero soluta quisquam rem animi illo?", id: 0 },
		{ title: "Jorem, ipsum dolor.", body: "Borem ipsum dolor sit amet, consectetur adipisicing elit. Porro, totam eius! Illum exercitationem ea perspiciatis!", id: 1 },
		{ title: "Aorem ipsum dolor sit amet consectetur.", body: "Borem ipsum, dolor sit amet consectetur adipisicing elit. Atque est rerum nesciunt, similique incidunt nihil repellendus. Perspiciatis minima quia ullam!", id: 2 },
		{ title: "Corem, ipsum.", body: "Eorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illo alias asperiores tenetur inventore earum facere suscipit nobis.", id: 3 },
		{ title: "Dorem, ipsum dolor.", body: "Forem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eos labore, assumenda, atque obcaecati aut quia eligendi laudantium architecto veritatis eveniet? Doloribus!", id: 4 },
	]
	const [postsState, setPostsState] = useState(initialPosts);
	const [sortingValue, setSortingValue] = useState("");
	const [serchQuery, setSerchQuery] = useState("");

	const getSortedPost = () => {
		console.log("work")
		if (sortingValue) {
			return [...postsState].sort((a, b) => (a[sortingValue] + "").localeCompare((b[sortingValue] + "")));
		} else {
			return postsState;
		}
	}
	const sortedPost = useMemo(
		() => {
			if (sortingValue) {
				return [...postsState].sort((a, b) => (a[sortingValue] + "").localeCompare((b[sortingValue] + "")));
			} else {
				return postsState;
			}
		}, [sortingValue, postsState]);
	
	const searchInSortedPost = useMemo(() => {
		return sortedPost.filter(post=>post.title.toLowerCase().includes(serchQuery.toLocaleLowerCase()))
	},[serchQuery, sortedPost])

	const onChangeSortingValue = (value) => {
		setSortingValue(value);

	}
	const removePost = (key) => {
		setPostsState(postsState.filter((post) => post.id !== key));
	};

	const addPostState = (post) => {
		setPostsState([...postsState, post]);
	};

	return (
		<div>
			<PostForm addPost={addPostState} />
			<UIInput
				placeholder="search..."
				value={serchQuery}
				onChange={e => { setSerchQuery(e.target.value) }}
			/>
			<UISelect
				value={sortingValue || "sorting of"}
				onChangeSortingValue={onChangeSortingValue}
				defaultValue="sorting of"
				options={[
					{ value: "title", name: "title" },
					{ value: "body", name: "body" },
					{ value: "id", name: "id" }
				]}
			/>

			<PostsList
				removePost={removePost}
				searchInSortedPost={searchInSortedPost}
				title="Posts about traveling"
			/>

			{true && <div>Hello, and and</div>}
		</div>
	);
}

export default App;
