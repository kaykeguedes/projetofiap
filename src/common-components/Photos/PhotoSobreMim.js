
import styled from "styled-components";
import { Colors, Shadows, Spaces } from '../../shared/DesignTokens';
import fotokayke from '../../assets/images/kayke.png';
import fotobruna from '../../assets/images/bruna-green.png';

const FotoKayke = styled.img.attrs({
    src: fotokayke,
    alt: 'Foto do Kayke',
})`
    width: 80%;
    
    @media (max-width:600px) {
        margin-bottom: 10px;
    }
`;

const FotoBruna = styled.img.attrs({
    src: fotobruna,
    alt: 'Foto da Bruna',
})`
    width: 80%;
    
    @media (max-width:600px) {
        margin-bottom: 10px;
    }
`;

export function PhotoSobreMimKayke() {
	return (
			<FotoKayke />
	);
}

export function PhotoSobreMimBruna() {
	return (
			<FotoBruna />
	);
}