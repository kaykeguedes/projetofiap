import styled from "styled-components";

import {
    Colors,
    FontFamilies,
    FontLetterSpacings,
    FontSizes,
    FontWeights,
} from '../../shared/DesignTokens';

export const Hobbie = styled.p`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.GREEN};
    letter-spacing: ${FontLetterSpacings.MEDIUM};
    font-size: 28px;

    @media (max-width:920px) {
		font-size: ${FontSizes.TWO};
    }

    @media (max-width:700px) {
		font-size: ${FontSizes.ONE_QUARTER};
    }

    @media (max-width:475px) {
		font-size: ${FontSizes.ONE_HALF};
    }
`