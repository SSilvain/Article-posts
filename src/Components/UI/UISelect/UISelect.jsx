import s from "./UISelect.module.scss"

const UISelect = ({ options, value, defaultValue, onChangeSortingValue }) => {
	return (
		<select
			value={value}
			onChange={(e) => { onChangeSortingValue(e.target.value)}}
		>
			<option disabled value={defaultValue}>{defaultValue}</option>
			{options.map(o => 
				<option key={o.value} value={o.value}>{o.name}</option>
			)}
		</select>
		
	)
}

export default UISelect;