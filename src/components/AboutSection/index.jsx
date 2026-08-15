import {
    FiArrowUpRight,
    FiCode,
    FiGithub,
    FiGlobe,
    FiLayers,
    FiLinkedin,
    FiMapPin,
} from "react-icons/fi";

import { Styled } from "./styled";

const highlights = [
    {
        label: "Focus",
        value: "Frontend Systems",
        icon: FiLayers,
    },
    {
        label: "Approach",
        value: "Build & Experiment",
        icon: FiCode,
    },
    {
        label: "Location",
        value: "Bengaluru, India",
        icon: FiMapPin,
    },
];

function AboutSection() {
    return (
        <Styled.Wrapper id="about">
            <div className="sectionHeader">
                <span className="sectionLabel">05 / ABOUT</span>

                <p>
                    The person behind the experiments, interfaces and ideas
                    explored throughout test-app.
                </p>
            </div>

            <div className="aboutGrid">
                <div className="visualColumn">
                    <div className="imageWrapper">
                        <img
                            src="https://picsum.photos/seed/test-app-about/1000/1200"
                            alt="Abstract creative workspace"
                            loading="lazy"
                        />

                        <div className="imageOverlay" />

                        <div className="imageLabel">
                            <span>CREATIVE SYSTEM</span>
                            <strong>2026</strong>
                        </div>

                        <div className="imageCorner">
                            <FiCode />
                        </div>
                    </div>
                </div>

                <div className="contentColumn">
                    <span className="smallLabel">CREATOR / DEVELOPER</span>

                    <h2>
                        Ashish
                        <span>Ranjan.</span>
                    </h2>

                    <p className="intro">
                        Full-stack web developer focused on building modern
                        interfaces, reusable frontend systems and practical web
                        experiments.
                    </p>

                    <p className="description">
                        test-app is a space for exploring ideas without the
                        constraints of a traditional product. It is used to
                        prototype interfaces, test creative concepts, learn new
                        techniques and turn experiments into working
                        experiences.
                    </p>

                    <div className="highlights">
                        {highlights.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div className="highlightItem" key={item.label}>
                                    <span className="highlightIcon">
                                        <Icon />
                                    </span>

                                    <div>
                                        <span>{item.label}</span>
                                        <strong>{item.value}</strong>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="actions">
                        <a
                            className="primaryLink"
                            href="https://www.ashishranjan.net"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiGlobe />
                            <span>Portfolio</span>
                            <FiArrowUpRight />
                        </a>

                        <a
                            className="iconLink"
                            href="https://github.com/a2rp"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FiGithub />
                        </a>

                        <a
                            className="iconLink"
                            href="https://www.linkedin.com/in/aashishranjan"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default AboutSection;
