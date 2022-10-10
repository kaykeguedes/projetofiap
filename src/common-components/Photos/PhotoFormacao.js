
import styled from "styled-components";
import mockupiphonekayke from '../../assets/images/mockup-iphone-green.png';
import mockupiphonebruna from '../../assets/images/mockup-iphone-rose.png';

const MockupIphoneKayke = styled.img.attrs({
    src: mockupiphonekayke,
    alt: 'Mockup de um iPhone com o LinkedIn do Kayke aberto',
})`
    width: 80%;

`;

const MockupIphoneBruna = styled.img.attrs({
    src: mockupiphonebruna,
    alt: 'Mockup de um iPhone com o LinkedIn da Bruna aberto',
})`
    width: 80%;

`;

export function PhotoFormacaoKayke() {
	return (
			<MockupIphoneKayke />
	);
}

export function PhotoFormacaoBruna() {
	return (
			<MockupIphoneBruna />
	);
}