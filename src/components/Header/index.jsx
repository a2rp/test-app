import { Styled } from "./styled";

function Header() {
    return (
        <Styled.Wrapper>
            <a className="brand" href="#home" aria-label="a2rp LAB home">
                <span className="brandMark">a2rp</span>
                <span className="brandLabel">LAB</span>
            </a>

            <nav className="nav" aria-label="Main navigation">
                <a href="#experiments">Experiments</a>
                <a href="#stack">Stack</a>
                <a href="#process">Process</a>
                <a href="#about">About</a>
            </nav>

            <a
                className="githubLink"
                href="https://github.com/a2rp"
                target="_blank"
                rel="noreferrer"
            >
                GitHub
                <span>↗</span>
            </a>
        </Styled.Wrapper>
    );
}

export default Header;
