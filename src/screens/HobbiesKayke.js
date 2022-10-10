import styled from "styled-components";
import { Header } from "../common-components/Header/Header";
import { Link } from 'react-router-dom'
import { Subtitle } from "../common-components/Subtitle/Subtitle";
import { Hobbie } from "../common-components/Hobbie/Hobbie";
import { ButtonLink } from "../common-components/Button/ButtonLink";
import { PhotoHobbieKayke } from "../common-components/Photos/PhotoHobbie";

const DivBackGreen = styled.div`
	background-color: #051916;
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



export function HobbiesKayke() {
	return <div>
		<Header></Header>
		<DivBackGreen>
			<HobbiesContainer>
				<DivSubtitle>
					<Subtitle green={true}>Hobbies</Subtitle>
				</DivSubtitle>
				<DivTextPhoto>
					<div>
						<Hobbie>• Assistir jogos de futebol</Hobbie>
						<Hobbie>• Ir em estádios</Hobbie>
						<Hobbie>• Ouvir podcasts</Hobbie>
						<Hobbie>• Ler livros</Hobbie>
					</div>			
					<DivPhoto>
						<PhotoHobbieKayke></PhotoHobbieKayke>	
					</DivPhoto>		
				</DivTextPhoto>
				<DivLinks>
					<Link to='/sobremim/kayke'><ButtonLink>Sobre Mim</ButtonLink></Link>
					<Link to='/formacao/kayke'><ButtonLink>Formação</ButtonLink></Link>
					<Link to='/experiencia/kayke'><ButtonLink>Experiência</ButtonLink></Link>
				</DivLinks>
			</HobbiesContainer>
		</DivBackGreen>
	</div>

}