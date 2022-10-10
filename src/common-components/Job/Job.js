import styled from "styled-components";

import {
    Colors,
    FontFamilies,
    FontLetterSpacings,
    FontSizes,
    FontWeights,
    Spaces,
} from '../../shared/DesignTokens';

export const Job = styled.h2`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.BOLD};
    color: ${(props) => props.green ? Colors.GREEN : Colors.ROSE};
    letter-spacing: ${FontLetterSpacings.MEDIUM};
    font-size: ${FontSizes.SIX};
    margin-top: ${Spaces.ONE_QUARTER};
    margin-bottom: 30px;

    @media (max-width:600px) {
        font-size: ${FontSizes.FIVE};
    }

    @media (max-width:400px) {
        font-size: ${FontSizes.THREE};
    }
`