import styled from "styled-components";
import { Link } from 'react-router-dom'
import {
    BorderRadius,
    Colors,
    FontFamilies,
    FontLetterSpacings,
    FontSizes,
    FontWeights,
    Spaces,
    Shadows
} from '../../shared/DesignTokens';


const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${Spaces.ONE_QUARTER} 190px;

    @media (max-width:880px) {
        padding: ${Spaces.ONE_QUARTER} 50px;
    }

    @media (max-width:650px) {
        padding: ${Spaces.ONE_QUARTER} 50px;
    }

    @media (max-width:550px) {
        padding: ${Spaces.ONE_QUARTER} 25px;
    }
    
    @media (max-width:450px) {
        padding: ${Spaces.ONE_QUARTER} 15px;
    }
`

export const ButtonLink = styled.button`
    border: none;
    outline: none;
    width: 250px;
    height: 40px;
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.BOLD};
    background-color: ${Colors.ROSE};
    color: ${Colors.NEUTRAL_WHITE};
    border-radius: ${BorderRadius.ONE};
    cursor: pointer;
    transition: 200ms all ease;
    text-transform: uppercase;
    letter-spacing: ${FontLetterSpacings.MEDIUM};
    font-size: ${FontSizes.ONE_QUARTER};

    &amp;:hover {
        box-shadow: ${Shadows.TWO};
    }

    @media (max-width:650px) {
        width: 180px;
        height: 30px;
        font-size: ${FontSizes.ONE_HALF};
    }

    @media (max-width:450px) {
        width: 140px;
        font-size: ${FontSizes.ONE};
    }
    
`

export function ButtonLinkHome() {
    return (
		<ButtonDiv>
            <Link to='/sobremim/bruna'><ButtonLink>Conheça a Bruna</ButtonLink></Link>
            <Link to='/sobremim/kayke'><ButtonLink>Conheça o Kayke</ButtonLink></Link>
        </ButtonDiv>
	);
}


