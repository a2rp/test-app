import {
    FiBox,
    FiCode,
    FiCpu,
    FiFeather,
    FiLayers,
    FiZap,
} from "react-icons/fi";

import { Styled } from "./styled";

const stackItems = [
    {
        title: "React",
        category: "Interface",
        text: "Component-driven UI architecture for building reusable and interactive frontend systems.",
        icon: FiLayers,
    },
    {
        title: "Vite",
        category: "Tooling",
        text: "Fast development tooling with optimized builds and a lightweight modern workflow.",
        icon: FiZap,
    },
    {
        title: "Styled Components",
        category: "Styling",
        text: "Scoped component styling for modular design systems and flexible interface experiments.",
        icon: FiFeather,
    },
    {
        title: "React Icons",
        category: "Visual UI",
        text: "Consistent vector icons used throughout the interface for clear visual communication.",
        icon: FiBox,
    },
    {
        title: "JavaScript",
        category: "Logic",
        text: "Modern JavaScript powering interactions, data flow, animation logic and experimental behavior.",
        icon: FiCode,
    },
    {
        title: "Creative Systems",
        category: "Experiments",
        text: "A flexible layer for prototyping unconventional interfaces, motion and emerging web concepts.",
        icon: FiCpu,
    },
];

function StackSection() {
    return (
        <Styled.Wrapper id="stack">
            <div className="sectionHeader">
                <div>
                    <span className="sectionLabel">04 / STACK</span>

                    <h2>
                        Tools behind
                        <span>the experiments.</span>
                    </h2>
                </div>

                <p>
                    A focused frontend stack chosen for speed, modularity,
                    experimentation and clean interface development.
                </p>
            </div>

            <div className="stackGrid">
                {stackItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <article className="stackCard" key={item.title}>
                            <div className="cardTop">
                                <span className="cardIndex">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="stackIcon">
                                    <Icon />
                                </span>
                            </div>

                            <div className="cardContent">
                                <span className="category">
                                    {item.category}
                                </span>

                                <h3>{item.title}</h3>

                                <p>{item.text}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </Styled.Wrapper>
    );
}

export default StackSection;
