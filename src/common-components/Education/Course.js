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

export const Course = styled.h3`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.GREEN};
    letter-spacing: ${FontLetterSpacings.MEDIUM};
    font-size: ${FontSizes.THREE};
    margin-top: 30px;

    @media (max-width:800px) {
        font-size: ${FontSizes.TWO};
    }
`