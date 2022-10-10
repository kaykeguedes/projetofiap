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

export const Graduation = styled.h2`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.GREEN};
    letter-spacing: ${FontLetterSpacings.MEDIUM};
    font-size: ${FontSizes.FIVE};
    margin-top: 50px;
    margin-bottom: 10px;

    @media (max-width:800px) {
        font-size: ${FontSizes.FOUR};
    }
`