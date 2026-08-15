import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import { Styled } from "./styled";

function Header() {
    return (
        <Styled.Wrapper>
            <a className="brand" href="#home" aria-label="test-app home">
                <span className="brandMark">a2rp</span>

                <span className="brandLabel">TEST APP</span>
            </a>

            <nav className="nav" aria-label="Main navigation">
                <a href="#experiments">Experiments</a>

                <a href="#stack">Stack</a>

                <a href="#process">Process</a>

                <a href="#about">About</a>
            </nav>

            <a
                className="githubLink"
                href="https://github.com/a2rp/test-app"
                target="_blank"
                rel="noreferrer"
                aria-label="Open test-app repository on GitHub"
            >
                <FiGithub className="githubIcon" />

                <span>GitHub</span>

                <FiArrowUpRight className="externalIcon" />
            </a>
        </Styled.Wrapper>
    );
}

export default Header;
