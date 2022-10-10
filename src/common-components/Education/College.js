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

export const College = styled.h3`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.GRAY};
    text-transform: uppercase;
    letter-spacing: ${FontLetterSpacings.MEDIUM};
    font-size: ${FontSizes.FOUR};
    margin: 0px;

    @media (max-width:800px) {
        font-size: ${FontSizes.THREE};
    }
`