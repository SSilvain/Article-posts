import s from "./UIButton.module.scss"

const Button = ({ createPost, children, ...props }) => {
	return (
		<button onClick={createPost} className={s.button} {...props}>{children}</button>
	)
}

export default Button;