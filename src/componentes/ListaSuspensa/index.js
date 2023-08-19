import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
	console.log(props.itens)
	return (
		<div className='lista__suspensa'>
			<label>{props.label}</label>
			<select>
				{props.itens.map(item => {
					return <option key={item}>{item}</option>
				})} 
			</select>
		</div>
	)
}

export default ListaSuspensa

// no select pode ser -- {props.itens.map(item => <option>{item}</option>)} -- para escrever menos