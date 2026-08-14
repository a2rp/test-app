import { Styled } from "./styled";

const technologies = [
    {
        group: "Interface",
        items: ["React", "JavaScript", "Styled Components", "Responsive UI"],
    },
    {
        group: "Build",
        items: ["Vite", "ESBuild", "GitHub Pages", "Git"],
    },
    {
        group: "Creative",
        items: ["Motion", "Interaction", "Visual Systems", "Creative Coding"],
    },
    {
        group: "Exploration",
        items: ["AI Concepts", "Prototypes", "Experiments", "Emerging Web"],
    },
];

function StackSection() {
    return (
        <Styled.Wrapper id="stack">
            <div className="sectionHeader">
                <span className="sectionIndex">02 / TECHNOLOGY STACK</span>

                <div className="headingBlock">
                    <h2>
                        Tools change.
                        <span>Curiosity stays.</span>
                    </h2>

                    <p>
                        The lab uses a focused modern stack, but every tool is
                        treated as a means to test ideas, not as the idea
                        itself.
                    </p>
                </div>
            </div>

            <div className="stackMatrix">
                {technologies.map((technology, groupIndex) => (
                    <article className="stackGroup" key={technology.group}>
                        <div className="groupHeader">
                            <span>
                                SYS-{String(groupIndex + 1).padStart(2, "0")}
                            </span>

                            <h3>{technology.group}</h3>
                        </div>

                        <div className="groupItems">
                            {technology.items.map((item, itemIndex) => (
                                <div className="stackItem" key={item}>
                                    <span className="itemIndex">
                                        {String(itemIndex + 1).padStart(2, "0")}
                                    </span>

                                    <strong>{item}</strong>

                                    <span className="itemStatus">READY</span>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            <div className="stackFooter">
                <div className="stackStatus">
                    <span className="statusDot" />
                    Systems operational
                </div>

                <p>
                    New technologies are added when an experiment actually
                    benefits from them.
                </p>
            </div>
        </Styled.Wrapper>
    );
}

export default StackSection;
