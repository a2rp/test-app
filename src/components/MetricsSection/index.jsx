import { FiActivity, FiCpu, FiLayers, FiZap } from "react-icons/fi";

import { Styled } from "./styled";

const metrics = [
    {
        value: "04",
        label: "Active Experiments",
        text: "Interface studies and prototypes currently being explored.",
        icon: FiActivity,
    },
    {
        value: "06+",
        label: "Core Technologies",
        text: "A flexible stack for rapid frontend experimentation.",
        icon: FiCpu,
    },
    {
        value: "100%",
        label: "Built to Explore",
        text: "Every concept exists to test, learn and evolve.",
        icon: FiZap,
    },
    {
        value: "∞",
        label: "Ideas Ahead",
        text: "A continuously evolving space for future experiments.",
        icon: FiLayers,
    },
];

function MetricsSection() {
    return (
        <Styled.Wrapper>
            <div className="sectionHeader">
                <span className="sectionLabel">02 / SYSTEM METRICS</span>

                <p>
                    A quick snapshot of the ideas, technologies and experimental
                    systems running inside test-app.
                </p>
            </div>

            <div className="metricsGrid">
                {metrics.map((metric) => {
                    const Icon = metric.icon;

                    return (
                        <article className="metricCard" key={metric.label}>
                            <div className="metricTop">
                                <span className="metricIcon">
                                    <Icon />
                                </span>

                                <span className="metricSignal">LIVE</span>
                            </div>

                            <strong className="metricValue">
                                {metric.value}
                            </strong>

                            <span className="metricLabel">{metric.label}</span>

                            <p>{metric.text}</p>
                        </article>
                    );
                })}
            </div>
        </Styled.Wrapper>
    );
}

export default MetricsSection;
