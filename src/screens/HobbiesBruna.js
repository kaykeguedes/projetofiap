import styled from "styled-components";
import { Header } from "../common-components/Header/HeaderRose";
import { Link } from 'react-router-dom'
import { Subtitle } from "../common-components/Subtitle/Subtitle";
import { Hobbie } from "../common-components/Hobbie/Hobbie";
import { ButtonLink } from "../common-components/Button/ButtonLink";
import { PhotoHobbieBruna } from "../common-components/Photos/PhotoHobbie";

const DivBackGreen = styled.div`
	background-color: #F1785E;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%
`

const HobbiesContainer = styled.div`
    width: 90%;
	height: 80%;
	margin: 30px 50px 60px;
	background-color: #ffffff;
	border-radius: 30px;
	padding: 10px 30px;

	@media (max-width:520px) {
		width: 95%;
		height: 80%;
		margin: 30px 30px 40px;
		padding: 10px 20px;
    }
`

const DivSubtitle = styled.div`
	padding: 10px ;
	text-align: center;
`

const DivLinks = styled.div`
	text-align: center;
	margin-top: 30px;
	margin-bottom: 50px;
`

const DivTextPhoto = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const DivPhoto = styled.div`
	width: 50%;
	margin-left: 10px;
	
	@media (max-width:700px) {
		width: 60%;
		margin-left: 00px;
    }
`



export function HobbiesBruna() {
	return <div>
		<Header></Header>
		<DivBackGreen>
			<HobbiesContainer>
				<DivSubtitle>
					<Subtitle green={true}>Hobbies</Subtitle>
				</DivSubtitle>
				<DivTextPhoto>
					<div>
						<Hobbie>• Assistir séries</Hobbie>
						<Hobbie>• Ir às compras</Hobbie>
						<Hobbie>• Ouvir podcasts</Hobbie>
						<Hobbie>• Ler livros</Hobbie>
					</div>			
					<DivPhoto>
						<PhotoHobbieBruna></PhotoHobbieBruna>	
					</DivPhoto>		
				</DivTextPhoto>
				<DivLinks>
					<Link to='/sobremim/bruna'><ButtonLink green={true}>Sobre Mim</ButtonLink></Link>
					<Link to='/formacao/bruna'><ButtonLink green={true}>Formação</ButtonLink></Link>
					<Link to='/experiencia/bruna'><ButtonLink green={true}>Experiência</ButtonLink></Link>
				</DivLinks>
			</HobbiesContainer>
		</DivBackGreen>
	</div>

}