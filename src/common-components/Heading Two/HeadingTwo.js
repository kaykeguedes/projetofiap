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

export const HeadingTwo = styled.h2`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.REGULAR};
    color: ${Colors.NEUTRAL_WHITE};
    letter-spacing: ${FontLetterSpacings.MEDIUM};
    font-size: ${FontSizes.THREE};
    text-align: center;
    margin-top: ${Spaces.THREE};
    margin-bottom: ${Spaces.FOUR};

    @media (max-width:600px) {
        font-size: ${FontSizes.TWO};
    }

    @media (max-width:400px) {
        font-size: ${FontSizes.ONE_QUARTER};
    }
`