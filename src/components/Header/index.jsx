import { useState } from "react";
import { FiArrowUpRight, FiGithub, FiMenu, FiX } from "react-icons/fi";
import { Styled } from "./styled";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <Styled.Wrapper>
            <a className="brand" href="#home" aria-label="Test App home" onClick={closeMenu}>
                <img className="brandLogo" src={import.meta.env.BASE_URL + "logo.png"} alt="Ashish Ranjan logo" />
                <span className="brandLabel">TEST APP</span>
            </a>
            <button className="menuButton" type="button" onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen} aria-label="Toggle navigation">
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>
            <nav className={"nav" + (menuOpen ? " navOpen" : "")} aria-label="Main navigation">
                <a href="#experiments" onClick={closeMenu}>Experiments</a>
                <a href="#stack" onClick={closeMenu}>Stack</a>
                <a href="#process" onClick={closeMenu}>Process</a>
                <a href="#about" onClick={closeMenu}>About</a>
            </nav>
            <a className="githubLink" href="https://github.com/a2rp/test-app" target="_blank" rel="noopener noreferrer"
                aria-label="Open test-app repository on GitHub">
                <FiGithub className="githubIcon" /><span>GitHub</span><FiArrowUpRight className="externalIcon" />
            </a>
        </Styled.Wrapper>
    );
}

export default Header;
