import styled from "styled-components";
import { Colors, Shadows, Spaces } from '../../shared/DesignTokens';
import fotobruna from '../../assets/images/bruna.png';
import fotokayke from '../../assets/images/kayke.png';

const PhotosHomeDiv = styled.div`
    width: 100%;
    height: 45vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${Spaces.ONE_QUARTER} 180px;
    
    @media (max-width:880px) {
        padding: ${Spaces.ONE_QUARTER} 55px;
        height: 38vh;
    }

    @media (max-width:650px) {
        padding: ${Spaces.ONE_QUARTER} 40px;
        height: 33vh;
    }

    @media (max-width:550px) {
        padding: ${Spaces.ONE_QUARTER} 25px;
        height: 30vh;
    }

    @media (max-width:450px) {
        padding: ${Spaces.ONE_QUARTER} 10px;
        height: 25vh;
    }
`

const FotoBruna = styled.img.attrs({
	src: fotobruna,
	alt: 'Foto da Bruna',
})`
	height: 100%;
    margin-right: 10px;
    border-radius: 50px;
    cursor: pointer;
    `;
    
const FotoKayke = styled.img.attrs({
    src: fotokayke,
    alt: 'Foto do Kayke',
})`
	height: 100%;
    margin-right: 10px;
    border-radius: 50px;
    cursor: pointer;
`;

export function PhotosHome() {
	return (
		<PhotosHomeDiv>
			<FotoBruna />
			<FotoKayke />
		</PhotosHomeDiv>
	);
}