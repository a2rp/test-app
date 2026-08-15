import { FiBox, FiCode, FiLayers, FiSearch } from "react-icons/fi";

import { Styled } from "./styled";

const processSteps = [
    {
        number: "01",
        title: "Explore",
        text: "Study an idea, interface pattern or technical direction worth experimenting with.",
        icon: FiSearch,
    },
    {
        number: "02",
        title: "Prototype",
        text: "Turn the concept into a focused prototype with clear interaction and visual intent.",
        icon: FiBox,
    },
    {
        number: "03",
        title: "Build",
        text: "Develop the experiment using modern frontend tools, reusable structure and clean code.",
        icon: FiCode,
    },
    {
        number: "04",
        title: "Refine",
        text: "Improve the system through testing, iteration, polish and lessons learned from the build.",
        icon: FiLayers,
    },
];

function ProcessSection() {
    return (
        <Styled.Wrapper id="process">
            <div className="sectionHeader">
                <div>
                    <span className="sectionLabel">03 / PROCESS</span>

                    <h2>
                        From idea to
                        <span>working experiment.</span>
                    </h2>
                </div>

                <p>
                    A simple workflow designed for fast exploration, practical
                    learning and continuous refinement.
                </p>
            </div>

            <div className="processGrid">
                {processSteps.map((step) => {
                    const Icon = step.icon;

                    return (
                        <article className="processCard" key={step.number}>
                            <div className="cardTop">
                                <span className="stepNumber">
                                    {step.number}
                                </span>

                                <span className="stepIcon">
                                    <Icon />
                                </span>
                            </div>

                            <div className="cardContent">
                                <h3>{step.title}</h3>

                                <p>{step.text}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </Styled.Wrapper>
    );
}

export default ProcessSection;
