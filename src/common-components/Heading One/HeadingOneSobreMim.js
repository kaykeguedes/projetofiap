import styled from "styled-components";

import {
    Colors,
    FontFamilies,
    FontLetterSpacings,
    FontSizes,
    FontWeights,
    Spaces,
} from '../../shared/DesignTokens';

export const HeadingOneSobreMim = styled.h1`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.NEUTRAL_WHITE};
    letter-spacing: ${FontLetterSpacings.MEDIUM};
    font-size: ${FontSizes.SIX};
    margin: 0;

    @media (max-width:600px) {
        font-size: ${FontSizes.FOUR};
    }

    @media (max-width:400px) {
        font-size: ${FontSizes.THREE};
    }
`