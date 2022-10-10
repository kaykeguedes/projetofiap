import styled from "styled-components";

import {
    Colors,
    FontFamilies,
    FontLetterSpacings,
    FontLineHeights,
    FontSizes,
    FontWeights,
    Spaces,
} from '../../shared/DesignTokens';

export const Subtitle = styled.h1`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.BOLD};
    color: ${(props) => props.green ? Colors.GREEN : Colors.NEUTRAL_WHITE};
    letter-spacing: ${FontLetterSpacings.MEDIUM};
    font-size: ${FontSizes.SEVEN};
    margin: 10px 0px;
    
    @media (max-width:800px) {
        font-size: ${FontSizes.SIX};
    }
	
`