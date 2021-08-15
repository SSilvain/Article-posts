import s from "./UIInput.module.scss"

const UIInput = ({ ...props }) => {
	return (
		<>
			<input className={s.inputText} type="text" {...props} />
		</>

	)
}

export default UIInput;