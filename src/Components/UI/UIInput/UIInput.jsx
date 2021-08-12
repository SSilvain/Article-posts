import s from "./UIInput.module.scss"

const UIInput = ({ placeholder, ...props }) => {
	return (
		<>
			<input className={s.inputText} type="text" {...props} placeholder={`type text ${placeholder}`} />
		</>

	)
}

export default UIInput;