import styled from "styled-components";

import {
    BorderRadius,
    Colors,
    FontFamilies,
    FontLetterSpacings,
    FontSizes,
    FontWeights,
    Shadows
} from '../../shared/DesignTokens';

export const ButtonLink = styled.button`
    border: none;
    outline: none;
    width: 135px;
    height: 35px;
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.BOLD};
    background-color: ${(props) => props.green ? Colors.GREEN : Colors.ROSE};
    color: ${Colors.NEUTRAL_WHITE};
    border-radius: ${BorderRadius.ONE};
    cursor: pointer;
    transition: 200ms all ease;
    text-transform: uppercase;
    letter-spacing: ${FontLetterSpacings.MEDIUM};
    font-size: ${FontSizes.ONE_HALF};
    margin-right: 10px;
    margin-top: 20px;
    
    &amp;:hover {
        box-shadow: ${Shadows.TWO};
    }

    @media (max-width:800px) {
        width: 115px;
        height: 30px;
        font-size: ${FontSizes.ONE};
    }

    @media (max-width:600px) {
        width: 115px;
        height: 30px;
        font-size: ${FontSizes.ONE};
    }
    
    @media (max-width:475px) {
        width: 100px;
        height: 25px;
        margin-right: 10px;
    }

`