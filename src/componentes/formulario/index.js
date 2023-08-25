import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../botao'
import './Formulario.css'

const Formulario = () => {

	const times = [
		'Programação',
		'Front-End',
		'Data Science',
		'Devops',
		'UX e Design',
		'Mobile',
		'Inovação e Gestão'
	]

	const aoSalvar = (evento) => {
		evento.preventDefault();
		console.log('Foi submetido');
	}

	return (
		<section className="formulario">
			<form onSubmit={aoSalvar}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome do colaborador" />
				<CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o cargo" />
				<CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
				<ListaSuspensa obrigatorio={true} itens={times} />
				<Botao>
					Criar card
				</Botao>
			</form>
		</section>
	)
}

export default Formulario