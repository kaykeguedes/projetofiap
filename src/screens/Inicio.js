import styled from "styled-components";
import { ButtonLinkHome } from "../common-components/Button/ButtonLinkHome";
import { Header } from "../common-components/Header/Header";
import { HeadingOne } from "../common-components/Heading One/HeadingOne";
import { HeadingTwo } from "../common-components/Heading Two/HeadingTwo";
import { PhotosHome } from "../common-components/Photos/PhotosHome";

const HomeContainer = styled.div`
    width: 100%;
	height: 100vh;
    background-color: #051916;
	padding: 0 20px;
`

export function Inicio() {
	return <HomeContainer>
		<Header></Header>
		<HeadingOne>Olá, seja bem-vindo ao nosso site!</HeadingOne>
		<HeadingTwo>Escolha uma das opções abaixo e vem conhecer um pouco mais sobre nós.</HeadingTwo>
		<PhotosHome></PhotosHome>
		<ButtonLinkHome></ButtonLinkHome>
	</HomeContainer>
}