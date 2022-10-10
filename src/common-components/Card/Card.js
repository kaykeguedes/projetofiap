import styled from "styled-components";

import {
    BorderRadius,
    Colors,
    FontFamilies,
    FontLetterSpacings,
    FontLineHeights,
    FontSizes,
    FontWeights,
    Spaces,
    Shadows
} from '../../shared/DesignTokens';

export const Card = styled.div`
    border: none;
    outline: none;
    width: 250px;
    height: 320px;
    background-color: ${(props) => props.green ? Colors.GREEN : Colors.ROSE};
    border-radius: ${BorderRadius.ONE};
    padding: ${Spaces.ONE_QUARTER};
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    margin: 10px;

    @media (max-width:1124px) {
		width: 200px;
        height: 280px;
    }
`