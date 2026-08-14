import { Styled } from "./styled";

const metrics = [
    {
        value: "24/7",
        label: "Curiosity mode",
        code: "SYS-CURIOSITY",
    },
    {
        value: "∞",
        label: "Ideas to test",
        code: "SYS-IDEAS",
    },
    {
        value: "100%",
        label: "Experimental mindset",
        code: "SYS-MINDSET",
    },
    {
        value: "01",
        label: "Rule: keep learning",
        code: "SYS-RULE",
    },
];

function MetricsSection() {
    return (
        <Styled.Wrapper>
            <div className="gridOverlay" />

            <div className="sectionTop">
                <span className="sectionIndex">04 / LAB METRICS</span>

                <div className="liveStatus">
                    <span className="statusDot" />
                    TELEMETRY ACTIVE
                </div>
            </div>

            <div className="metricsGrid">
                {metrics.map((metric) => (
                    <article className="metricCard" key={metric.code}>
                        <div className="metricCode">{metric.code}</div>

                        <strong>{metric.value}</strong>

                        <span className="metricLabel">{metric.label}</span>

                        <div className="metricSignal">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    </article>
                ))}
            </div>

            <div className="telemetryPanel">
                <div className="telemetryHeader">
                    <span>LIVE_OUTPUT.log</span>
                    <span>SESSION / 2026</span>
                </div>

                <div className="telemetryBody">
                    <div className="telemetryCopy">
                        <span className="terminalPrefix">&gt;</span>

                        <p>
                            The lab is not measured by how many ideas survive.
                            It is measured by how much each experiment teaches.
                        </p>
                    </div>

                    <div className="telemetryBars">
                        <div className="barRow">
                            <span>Research</span>
                            <div className="bar">
                                <span className="barFill researchBar" />
                            </div>
                            <strong>82%</strong>
                        </div>

                        <div className="barRow">
                            <span>Building</span>
                            <div className="bar">
                                <span className="barFill buildBar" />
                            </div>
                            <strong>94%</strong>
                        </div>

                        <div className="barRow">
                            <span>Breaking</span>
                            <div className="bar">
                                <span className="barFill breakBar" />
                            </div>
                            <strong>68%</strong>
                        </div>

                        <div className="barRow">
                            <span>Learning</span>
                            <div className="bar">
                                <span className="barFill learnBar" />
                            </div>
                            <strong>100%</strong>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default MetricsSection;
