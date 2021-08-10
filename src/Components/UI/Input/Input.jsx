import s from "./Input.module.scss"

const Input = ({ placeholder, ...props }) => {
	return (
		<>
			<input className={s.inputText} type="text" {...props} placeholder={`type text ${placeholder}`} />
		</>

	)
}

export default Input;