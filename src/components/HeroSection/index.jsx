import {
    FiArrowDown,
    FiArrowDownRight,
    FiCheckCircle,
    FiChevronRight,
    FiCode,
    FiTerminal,
} from "react-icons/fi";

import { Styled } from "./styled";

function HeroSection() {
    return (
        <Styled.Wrapper id="home">
            <div className="gridOverlay" />
            <div className="glow glowOne" />
            <div className="glow glowTwo" />

            <div className="heroContent">
                <div className="label">
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
                        test-app is a digital playground for experiments in
                        code, interfaces, AI, creative technology and emerging
                        web ideas.
                    </p>

                    <a className="primaryCta" href="#experiments">
                        <span>Explore experiments</span>

                        <FiArrowDownRight />
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

                    <div className="panelTitle">
                        <FiTerminal />
                        <span>TEST_APP_STATUS.exe</span>
                    </div>
                </div>

                <div className="panelBody">
                    <div className="terminalLine">
                        <FiCode className="terminalIcon" />
                        <span>initialize test-app</span>
                    </div>

                    <div className="terminalLine dim">
                        <FiChevronRight className="terminalIcon" />
                        <span>loading experiments...</span>
                    </div>

                    <div className="terminalLine dim">
                        <FiChevronRight className="terminalIcon" />
                        <span>connecting creative systems...</span>
                    </div>

                    <div className="terminalLine success">
                        <FiCheckCircle className="terminalIcon" />
                        <span>system online</span>
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
                <span>Scroll to explore</span>

                <FiArrowDown />
            </a>
        </Styled.Wrapper>
    );
}

export default HeroSection;
