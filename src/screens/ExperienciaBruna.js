import styled from "styled-components";
import { Header } from "../common-components/Header/HeaderRose";
import { Link } from 'react-router-dom'
import { Subtitle } from "../common-components/Subtitle/Subtitle";
import { Card } from "../common-components/Card/Card";
import { Company } from "../common-components/Card/CompanyText";
import { Job } from "../common-components/Card/JobText";
import { Period } from "../common-components/Card/PeriodText";
import { ButtonLink } from "../common-components/Button/ButtonLink";

const ExperienciaContainer = styled.div`
    width: 100%;
	height: 100%;
	margin: 0;
	padding: 30px;

	@media (max-width:400px) {
        padding: 20px;
    }
`

const DivSubtitle = styled.div`
	padding: 10px ;
	text-align: center;
	`
	
const DivCards = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;
	flex-wrap: wrap;
`

const DivLinks = styled.div`
	text-align: center;
	margin-top: 50px;
	margin-bottom: 20px;
`

export function ExperienciaBruna() {
	return <div>
		<Header></Header>
		<ExperienciaContainer>
			<DivSubtitle>
				<Subtitle green={true}>Experiência</Subtitle>
			</DivSubtitle>
			<DivCards>
				<Card>
					<Company>SIS</Company>
					<Job>PEGA System Architect</Job>
					<Period>Fev de 2022 - atual</Period>
				</Card>
				<Card>
					<Company>Strattner</Company>
					<Job>Aprendiz Administrativo</Job>
					<Period>Out de 2021 - Fev de 2022</Period>
				</Card>
			</DivCards>
			<DivLinks>
				<Link to='/sobremim/bruna'><ButtonLink green={true}>Sobre Mim</ButtonLink></Link>
				<Link to='/formacao/bruna'><ButtonLink green={true}>Formação</ButtonLink></Link>
				<Link to='/hobbies/bruna'><ButtonLink green={true}>Hobbies</ButtonLink></Link>
			</DivLinks>
		</ExperienciaContainer>
	</div>

}