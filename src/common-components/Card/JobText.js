import styled from "styled-components";

import {
    Colors,
    FontFamilies,
    FontLetterSpacings,
    FontSizes,
    FontWeights,
} from '../../shared/DesignTokens';

export const Job = styled.h2`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.NEUTRAL_WHITE};
    letter-spacing: ${FontLetterSpacings.MEDIUM};
    font-size: ${FontSizes.FOUR};

    @media (max-width:1124px) {
        font-size: ${FontSizes.THREE};
    }
`