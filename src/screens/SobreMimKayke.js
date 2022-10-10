import styled from "styled-components";
import { ButtonSmall } from "../common-components/Button/ButtonSmall";
import { Description } from "../common-components/Description/Description";
import { Header } from "../common-components/Header/Header";
import { HeadingOneSobreMim } from "../common-components/Heading One/HeadingOneSobreMim";
import { Job } from "../common-components/Job/Job";
import { ButtonLink } from "../common-components/Button/ButtonLink";
import { PhotoSobreMimKayke } from "../common-components/Photos/PhotoSobreMim";
import { Link } from 'react-router-dom'
import React from "react";
import { useState } from "react";
import axios from "axios";

const SobreMimContainer = styled.div`
    width: 100%;
	height: 100%;
    background-color: #051916;
	padding-left: 80px;
	padding-right: 20px;
	padding-top: 30px;
	margin: 0;
	
	@media (max-width:600px) {
		padding-left: 50px;
    }
	
    @media (max-width:400px) {
		padding-left: 30px;
    }
`

const DivCep = styled.div`
	display: flex; 
	align-items: center;
`

const DivLinks = styled.div`
	padding-bottom: 50px;
	`

const DivTextPhoto = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	@media (max-width:600px) {
		flex-direction: column-reverse;
		align-items: start;
    }
`

const DivPhoto = styled.div`
	width: 30%;
	margin-right: 30px;
	`

const DivText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
`

export function SobreMimKayke() {

	const [cep, setCep] = useState({ cep: '' });
	const [informacoes, setInformacoes] = useState({
		cep: '',
		logradouro: '',
		bairro: '',
		localidade: '',
		uf: ''
	});

	const getInformacoes = () => {
		axios.get('https://viacep.com.br/ws/06709300/json/')
			.then(response => {
				setInformacoes(response.data);
			});
	}

	const handlingCep = (e) => {
		setCep(e.target.value);
	}

	return (
		<div>
			<Header></Header>
			<SobreMimContainer>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div>
						<HeadingOneSobreMim>Fala, galera!</HeadingOneSobreMim>
						<HeadingOneSobreMim>Eu sou o Kayke!</HeadingOneSobreMim>
					</div>
					<div>
						<Link to='/'><ButtonSmall>Voltar</ButtonSmall></Link>
					</div>
				</div>
				<Job>Business OPS</Job>
				<DivTextPhoto>
					<DivText>
						<Description>Kayke Guedes Loriato</Description>
						<Description>19 anos</Description>
						<Description>guedeskayke@gmail.com</Description>
						<DivCep>
							<Description>06709-300</Description>
							<ButtonSmall onClick={getInformacoes}>Ver tudo</ButtonSmall>
						</DivCep>
						<Description>{informacoes['logradouro']}</Description>
						<Description>{informacoes['bairro']}</Description>
						<Description>{informacoes['localidade']}</Description>
						<Description>{informacoes['uf']}</Description>
					</DivText>
					<DivPhoto>
						<PhotoSobreMimKayke></PhotoSobreMimKayke>
					</DivPhoto>
				</DivTextPhoto>
				<DivLinks>
					<Link to='/formacao/kayke'><ButtonLink>Formação</ButtonLink></Link>
					<Link to='/experiencia/kayke'><ButtonLink>Experiência</ButtonLink></Link>
					<Link to='/hobbies/kayke'><ButtonLink>Hobbies</ButtonLink></Link>
				</DivLinks>
			</SobreMimContainer>
		</div>
	)
}