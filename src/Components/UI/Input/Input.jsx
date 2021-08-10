import s from "./Input.modul.scss"

const Input = ({ placeholder, ...props }) => {
	return (
		
		<input className={s.input} type="text" {...props} placeholder={`type text ${placeholder}`} />
		
	)
}

export default Input;