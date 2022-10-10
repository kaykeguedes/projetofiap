import styled from "styled-components";

import {
    Colors,
    FontFamilies,
    FontLetterSpacings,
    FontSizes,
    FontWeights,
} from '../../shared/DesignTokens';

export const Description = styled.p`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.NEUTRAL_WHITE};
    letter-spacing: ${FontLetterSpacings.MEDIUM};
    font-size: ${FontSizes.TWO};
    margin: 10px 0;

    @media (max-width:600px) {
        font-size: ${FontSizes.ONE_QUARTER};
    }

    @media (max-width:400px) {
        font-size: ${FontSizes.ONE_HALF};
    }
`