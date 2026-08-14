import { Styled } from "./styled";

function HeroSection() {
    return (
        <Styled.Wrapper id="home">
            <div className="gridOverlay" />
            <div className="glow glowOne" />
            <div className="glow glowTwo" />

            <div className="heroContent">
                <div className="eyebrow">
                    <span className="statusDot" />
                    Experimental technology playground
                </div>

                <h1>
                    BUILD.
                    <span>BREAK.</span>
                    LEARN.
                    <span>REPEAT.</span>
                </h1>

                <div className="heroBottom">
                    <p>
                        a2rp LAB is a digital laboratory for experiments in
                        code, interfaces, AI, creative technology and emerging
                        web ideas.
                    </p>

                    <a className="primaryCta" href="#experiments">
                        Explore experiments
                        <span>↘</span>
                    </a>
                </div>
            </div>

            <div className="labPanel">
                <div className="panelHeader">
                    <div className="panelDots">
                        <span />
                        <span />
                        <span />
                    </div>

                    <span>LAB_STATUS.exe</span>
                </div>

                <div className="panelBody">
                    <div className="terminalLine">
                        <span className="terminalPrompt">$</span>
                        <span>initialize a2rp-lab</span>
                    </div>

                    <div className="terminalLine dim">
                        <span>&gt;</span>
                        <span>loading experiments...</span>
                    </div>

                    <div className="terminalLine dim">
                        <span>&gt;</span>
                        <span>connecting creative systems...</span>
                    </div>

                    <div className="terminalLine success">
                        <span>✓</span>
                        <span>lab online</span>
                    </div>

                    <div className="systemGrid">
                        <div className="systemItem">
                            <span>Status</span>
                            <strong>ONLINE</strong>
                        </div>

                        <div className="systemItem">
                            <span>Mode</span>
                            <strong>EXPERIMENTAL</strong>
                        </div>

                        <div className="systemItem">
                            <span>Build</span>
                            <strong>2026.08</strong>
                        </div>

                        <div className="systemItem">
                            <span>Environment</span>
                            <strong>PUBLIC</strong>
                        </div>
                    </div>

                    <div className="signal">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>

            <div className="heroMeta">
                <span>Creative Coding</span>
                <span>Interfaces</span>
                <span>AI</span>
                <span>Experiments</span>
            </div>

            <a className="scrollIndicator" href="#experiments">
                Scroll to explore
                <span>↓</span>
            </a>
        </Styled.Wrapper>
    );
}

export default HeroSection;
