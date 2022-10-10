import styled from "styled-components";
import { Header } from "../common-components/Header/HeaderRose";
import { Link } from 'react-router-dom'
import { Subtitle } from "../common-components/Subtitle/Subtitle";
import { PhotoFormacaoBruna } from "../common-components/Photos/PhotoFormacao";
import { Graduation } from "../common-components/Education/Graduation";
import { College } from "../common-components/Education/College";
import { Course } from "../common-components/Education/Course";
import { ButtonLink } from "../common-components/Button/ButtonLink";

const FormacaoContainer = styled.div`
    width: 100%;
	height: 100%;
	margin: 0;
`

const DivSubtitle = styled.div`
    background-color: #F1785E;
	padding: 50px 100px 80px;
	margin-bottom: 10px;
	text-align: center;
	
	@media (max-width:800px) {
		padding: 30px 80px 60px;
    }
	
    @media (max-width:400px) {
		padding: 30px;
    }
`

const DivTextPhoto = styled.div`
	display: flex;
	justify-content: center;
	padding: 0px 30px;

`

const DivPhoto = styled.div`
@media (max-width:670px) {
	display: none;
}
`

const DivLinks = styled.div`
	margin-top: 40px;

	@media (max-width:700px) {
		margin-top: 30px;
    }
`

export function FormacaoBruna() {
	return <div>
		<Header></Header>
		<FormacaoContainer>
			<DivSubtitle>
				<Subtitle>Formação Acadêmica</Subtitle>
			</DivSubtitle>
			<DivTextPhoto>
				<DivPhoto>
					<PhotoFormacaoBruna></PhotoFormacaoBruna>
				</DivPhoto>
				<div>
					<Graduation>Superior em Tecnologia</Graduation>
					<College>Fiap</College>
					<Course>Sistemas para Internet</Course>
					<DivLinks>
						<Link to='/sobremim/bruna'><ButtonLink green={true}>Sobre Mim</ButtonLink></Link>
						<Link to='/experiencia/bruna'><ButtonLink green={true}>Experiência</ButtonLink></Link>
						<Link to='/hobbies/bruna'><ButtonLink green={true}>Hobbies</ButtonLink></Link>
					</DivLinks>
				</div>
			</DivTextPhoto>
		</FormacaoContainer>
	</div>

}