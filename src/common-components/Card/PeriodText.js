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

export const Period = styled.h4`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.NEUTRAL_WHITE};
    letter-spacing: ${FontLetterSpacings.MEDIUM};
    font-size: ${FontSizes.ONE_QUARTER};

    @media (max-width:1124px) {
        font-size: ${FontSizes.ONE_HALF};
    }
`