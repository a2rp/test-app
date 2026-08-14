import { Styled } from "./styled";

const processSteps = [
    {
        number: "01",
        title: "Observe",
        description:
            "Study the problem, the environment and the constraints before touching the interface.",
        meta: "RESEARCH",
    },
    {
        number: "02",
        title: "Prototype",
        description:
            "Turn ideas into something visible and interactive as quickly as possible.",
        meta: "BUILD",
    },
    {
        number: "03",
        title: "Break",
        description:
            "Stress-test assumptions, interactions and technical decisions until weak points surface.",
        meta: "TEST",
    },
    {
        number: "04",
        title: "Refine",
        description:
            "Remove noise, strengthen the system and improve every detail that affects the experience.",
        meta: "ITERATE",
    },
    {
        number: "05",
        title: "Ship",
        description:
            "Package the experiment into a stable, usable and documented result worth sharing.",
        meta: "RELEASE",
    },
];

function ProcessSection() {
    return (
        <Styled.Wrapper id="process">
            <div className="sectionHeader">
                <span className="sectionIndex">03 / PROCESS</span>

                <div className="headingBlock">
                    <h2>
                        Experiment fast.
                        <span>Refine relentlessly.</span>
                    </h2>

                    <p>
                        Every experiment follows a simple loop designed to move
                        from curiosity to a working result without losing the
                        original idea.
                    </p>
                </div>
            </div>

            <div className="processList">
                {processSteps.map((step, index) => (
                    <article className="processItem" key={step.number}>
                        <div className="stepNumber">{step.number}</div>

                        <div className="stepTitle">
                            <span>{step.meta}</span>
                            <h3>{step.title}</h3>
                        </div>

                        <p>{step.description}</p>

                        <div className="stepVisual">
                            <span className="stepNode" />

                            {index < processSteps.length - 1 && (
                                <span className="stepLine" />
                            )}
                        </div>
                    </article>
                ))}
            </div>

            <div className="processFooter">
                <span>LOOP STATUS</span>

                <div className="loopIndicator">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>

                <strong>CONTINUOUS</strong>
            </div>
        </Styled.Wrapper>
    );
}

export default ProcessSection;
