import s from "./UIButton.module.scss"

const UIButton = ({ children, ...props }) => {
	return (
		<button className={s.button} {...props}>{children}</button>
	)
}

export default UIButton;