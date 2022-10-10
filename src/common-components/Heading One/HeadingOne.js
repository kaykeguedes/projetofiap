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

export const HeadingOne = styled.h1`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.NEUTRAL_WHITE};
    letter-spacing: ${FontLetterSpacings.MEDIUM};
    font-size: ${FontSizes.FIVE};
    text-align: center;
    margin: ${Spaces.ONE_HALF};

    @media (max-width:600px) {
        font-size: ${FontSizes.FOUR};
        margin-top: 60px;
    }

    @media (max-width:400px) {
        font-size: ${FontSizes.THREE};
        margin-top: 80px;
    }
`