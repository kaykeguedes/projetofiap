import styled from "styled-components";
import { Header } from "../common-components/Header/Header";
import { Link } from 'react-router-dom'
import { Subtitle } from "../common-components/Subtitle/Subtitle";
import { PhotoFormacaoKayke } from "../common-components/Photos/PhotoFormacao";
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
    background-color: #051916;
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

export function FormacaoKayke() {
	return <div>
		<Header></Header>
		<FormacaoContainer>
			<DivSubtitle>
				<Subtitle>Formação Acadêmica</Subtitle>
			</DivSubtitle>
			<DivTextPhoto>
				<DivPhoto>
					<PhotoFormacaoKayke></PhotoFormacaoKayke>
				</DivPhoto>
				<div>
					<Graduation>Superior em Tecnologia</Graduation>
					<College>Fiap</College>
					<Course>Sistemas para Internet</Course>
					<DivLinks>
						<Link to='/sobremim/kayke'><ButtonLink>Sobre Mim</ButtonLink></Link>
						<Link to='/experiencia/kayke'><ButtonLink>Experiência</ButtonLink></Link>
						<Link to='/hobbies/kayke'><ButtonLink>Hobbies</ButtonLink></Link>
					</DivLinks>
				</div>
			</DivTextPhoto>
		</FormacaoContainer>
	</div>

}