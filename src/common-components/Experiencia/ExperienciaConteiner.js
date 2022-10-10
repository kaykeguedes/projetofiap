import styled from "styled-components";
import { Spaces } from '../../shared/DesignTokens';

const ExperienciaContainer = styled.div`
    width: 100%;
	height: 100%;
	margin: 0;
	padding: 30px;

	@media (max-width:400px) {
        padding: 20px;
    }
`

export function ExperienciaContainerDiv() {
    return (
        <ExperienciaContainer></ExperienciaContainer>
        );
}