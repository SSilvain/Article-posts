import s from "./UISelect.module.scss"

const UISelect = ({ options, defaultValue, onChangeSortingValue }) => {
	return (
		<select
			onChange={(e) => { onChangeSortingValue(e.target.value)}}
		>
			<option disabled value="">{defaultValue}</option>
			{options.map(o => 
				<option key={o.value} value={o.value}>{o.name}</option>
			)}
		</select>
		
	)
}

export default UISelect;