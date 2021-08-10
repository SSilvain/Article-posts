import s from "./Button.module.scss"

const Button = ({ addPost, children, ...props }) => {
	return (
		<button onClick={addPost} className={s.button} {...props}>{children}</button>
	)
}

export default Button;