import { Styled } from "./styled";

const experiments = [
    {
        id: "EXP-001",
        title: "Adaptive Interface",
        category: "Interface System",
        status: "ACTIVE",
        description:
            "A responsive interaction study exploring modular layouts, adaptive states and interface behavior.",
        tags: ["React", "UI", "Responsive"],
        visual: "interface",
    },
    {
        id: "EXP-002",
        title: "Neural Signal",
        category: "AI Concept",
        status: "RESEARCH",
        description:
            "A visual experiment inspired by neural networks, signal processing and machine-assisted interfaces.",
        tags: ["AI", "Data", "Motion"],
        visual: "signal",
    },
    {
        id: "EXP-003",
        title: "Spatial Grid",
        category: "Creative Coding",
        status: "ACTIVE",
        description:
            "An evolving grid system designed around depth, motion, geometry and procedural visual structures.",
        tags: ["Creative Code", "Geometry", "Web"],
        visual: "grid",
    },
    {
        id: "EXP-004",
        title: "System Core",
        category: "Prototype",
        status: "PROTOTYPE",
        description:
            "A technical interface concept focused on system monitoring, status visualization and control surfaces.",
        tags: ["Prototype", "System UI", "Data"],
        visual: "core",
    },
];

function ExperimentVisual({ type }) {
    if (type === "interface") {
        return (
            <div className="interfaceVisual">
                <div className="interfaceTop">
                    <span />
                    <span />
                    <span />
                </div>

                <div className="interfaceBody">
                    <div className="interfaceSide" />

                    <div className="interfaceMain">
                        <span className="interfaceTitle" />
                        <span className="interfaceLine" />
                        <span className="interfaceLine short" />

                        <div className="interfaceCards">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "signal") {
        return (
            <div className="signalVisual">
                <div className="signalOrbit orbitOne" />
                <div className="signalOrbit orbitTwo" />
                <div className="signalOrbit orbitThree" />

                <div className="signalCore" />

                <span className="node nodeOne" />
                <span className="node nodeTwo" />
                <span className="node nodeThree" />
                <span className="node nodeFour" />
            </div>
        );
    }

    if (type === "grid") {
        return (
            <div className="spatialVisual">
                <div className="spatialCube cubeOne" />
                <div className="spatialCube cubeTwo" />
                <div className="spatialCube cubeThree" />
                <div className="spatialCube cubeFour" />
                <div className="spatialCube cubeFive" />
            </div>
        );
    }

    return (
        <div className="coreVisual">
            <div className="coreRing ringOuter" />
            <div className="coreRing ringMiddle" />
            <div className="coreRing ringInner" />

            <div className="systemCore">
                <span>a2</span>
            </div>
        </div>
    );
}

function ExperimentsSection() {
    return (
        <Styled.Wrapper id="experiments">
            <div className="sectionHeader">
                <div>
                    <span className="sectionIndex">01 / EXPERIMENTS</span>

                    <h2>
                        Ideas under
                        <span>active development.</span>
                    </h2>
                </div>

                <p>
                    A collection of interface studies, prototypes and creative
                    technology experiments built to test ideas before they
                    become products.
                </p>
            </div>

            <div className="experimentGrid">
                {experiments.map((experiment) => (
                    <article className="experimentCard" key={experiment.id}>
                        <div className="visualArea">
                            <div className="visualMeta">
                                <span>{experiment.id}</span>

                                <span className="status">
                                    <span className="statusDot" />
                                    {experiment.status}
                                </span>
                            </div>

                            <ExperimentVisual type={experiment.visual} />

                            <span className="categoryBadge">
                                {experiment.category}
                            </span>
                        </div>

                        <div className="cardContent">
                            <div className="cardHeading">
                                <h3>{experiment.title}</h3>

                                <span className="cardArrow">↗</span>
                            </div>

                            <p>{experiment.description}</p>

                            <div className="tags">
                                {experiment.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </Styled.Wrapper>
    );
}

export default ExperimentsSection;
