import { Styled } from "./styled";

function AboutSection() {
    return (
        <Styled.Wrapper id="about">
            <div className="sectionTop">
                <span className="sectionIndex">05 / ABOUT THE LAB</span>

                <p>
                    a2rp LAB is a personal experimentation space for exploring
                    ideas across code, interfaces, systems and emerging
                    technology.
                </p>
            </div>

            <div className="statement">
                <h2>
                    Built to explore.
                    <span>Designed to evolve.</span>
                </h2>
            </div>

            <div className="aboutGrid">
                <div className="aboutCopy">
                    <span className="copyLabel">LAB PHILOSOPHY</span>

                    <p>
                        The goal is not to build everything perfectly on the
                        first attempt. The goal is to build, observe, break,
                        understand and improve.
                    </p>

                    <p>
                        Every experiment becomes a small record of learning,
                        whether it turns into a finished product or simply
                        reveals a better direction.
                    </p>
                </div>

                <div className="identityPanel">
                    <div className="identityHeader">
                        <span>CREATOR_PROFILE.sys</span>
                        <span>ACTIVE</span>
                    </div>

                    <div className="identityBody">
                        <div className="identityMark">
                            <span>AR</span>
                        </div>

                        <div className="identityContent">
                            <span className="identityLabel">
                                CREATOR / DEVELOPER
                            </span>

                            <h3>Ashish Ranjan</h3>

                            <p>
                                Full-Stack Web Developer exploring modern
                                frontend systems, backend engineering, creative
                                coding, AI and experimental technology.
                            </p>

                            <div className="identityMeta">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>Creative Coding</span>
                                <span>AI</span>
                            </div>
                        </div>
                    </div>

                    <div className="identityFooter">
                        <a
                            href="https://www.ashishranjan.net"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Portfolio
                            <span>↗</span>
                        </a>

                        <a
                            href="https://github.com/a2rp"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                            <span>↗</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="manifesto">
                <div className="manifestoLabel">
                    <span>LAB MANIFESTO</span>
                    <span>2026</span>
                </div>

                <div className="manifestoText">
                    <span>BUILD</span>
                    <span>BREAK</span>
                    <span>LEARN</span>
                    <span>REPEAT</span>
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default AboutSection;
