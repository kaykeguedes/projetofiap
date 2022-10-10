
import styled from "styled-components";
import mockupbrowserkayke from '../../assets/images/mockup-browser-kayke.png';
import mockupbrowserbruna from '../../assets/images/mockup-browser-bruna.png';

const MockupBrowserKayke = styled.img.attrs({
    src: mockupbrowserkayke,
    alt: 'Mockup de um Browser com a imagem do estádio Allianz Parque',
})`
    width: 100%;
`;

const MockupBrowserBruna = styled.img.attrs({
    src: mockupbrowserbruna,
    alt: 'Mockup de um Browser com a imagem de uma TV com a Netflix sendo aberta',
})`
    width: 100%;
`;

export function PhotoHobbieKayke() {
	return (
			<MockupBrowserKayke />
	);
}

export function PhotoHobbieBruna() {
	return (
			<MockupBrowserBruna />
	);
}