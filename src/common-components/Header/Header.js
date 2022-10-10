import styled from "styled-components";
import { Colors, Shadows, Spaces } from '../../shared/DesignTokens';
import logo from '../../assets/images/logo-back-green.svg';
import linkgithub from '../../assets/icons/icon-github-rose.svg';
import linklinkedin from '../../assets/icons/icon-linkedin-rose.svg';
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    width: 100%;
    height: 10vh;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${Colors.GREEN};
    padding: ${Spaces.ONE} ${Spaces.TWO};
`

const Logo = styled.img.attrs({
	src: logo,
	alt: 'Logo do KB',
})`
    width: 70%;
`;

const LinkGithub = styled.img.attrs({
	src: linkgithub,
	alt: 'Link do GitHub',
})`
    margin-right: 10px;
    background-color: ${Colors.NEUTRAL_WHITE};
    padding: 3px;
    border-radius: 50px;
    cursor: pointer;

    &amp;:hover {
        box-shadow: ${Shadows.ONE};
    }
    `;
    
    const LinkLinkedin = styled.img.attrs({
        src: linklinkedin,
        alt: 'Link do LinkedIn',
    })`
    margin-right: 10px;
    background-color: ${Colors.NEUTRAL_WHITE};
    padding: 3px;
    border-radius: 50px;
    cursor: pointer;

    &amp;:hover {
        box-shadow: ${Shadows.ONE};
    }
`;

export function Header() {
	return (
		<HeaderContainer>
			<Link to='/'><Logo /></Link>
            <div>
			<LinkGithub />
			<LinkLinkedin />
            </div>
		</HeaderContainer>
	);
}