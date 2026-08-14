import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 140px 4vw;
        overflow: hidden;
        background: #050509;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .gridOverlay {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(
                    rgba(255, 255, 255, 0.022) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.022) 1px,
                    transparent 1px
                );
            background-size: 54px 54px;
            mask-image: linear-gradient(
                to bottom,
                transparent,
                black 12%,
                black 88%,
                transparent
            );
            pointer-events: none;
        }

        .sectionTop,
        .metricsGrid,
        .telemetryPanel {
            position: relative;
            z-index: 1;
        }

        .sectionTop {
            margin-bottom: 70px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
        }

        .sectionIndex {
            color: #55555e;
            font-size: 0.62rem;
            letter-spacing: 0.18em;
        }

        .liveStatus {
            display: flex;
            align-items: center;
            gap: 0.65rem;
            color: #5f5f68;
            font-size: 0.54rem;
            letter-spacing: 0.15em;
        }

        .statusDot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #bebec7;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.45);
            animation: statusPulse 1.8s ease-in-out infinite;
        }

        .metricsGrid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .metricCard {
            position: relative;
            min-height: 390px;
            padding: 28px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-right: 1px solid rgba(255, 255, 255, 0.09);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            background: rgba(255, 255, 255, 0.012);
            overflow: hidden;
            transition:
                background 0.35s ease,
                transform 0.35s ease;
        }

        .metricCard::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0;
            background: radial-gradient(
                circle at 50% 35%,
                rgba(255, 255, 255, 0.055),
                transparent 55%
            );
            transition: opacity 0.35s ease;
        }

        .metricCard:hover {
            background: rgba(255, 255, 255, 0.022);
            transform: translateY(-5px);
        }

        .metricCard:hover::before {
            opacity: 1;
        }

        .metricCard > * {
            position: relative;
            z-index: 1;
        }

        .metricCode {
            color: #45454e;
            font-size: 0.52rem;
            letter-spacing: 0.15em;
        }

        .metricCard strong {
            color: #d5d5da;
            font-size: clamp(4rem, 6vw, 7rem);
            line-height: 1;
            font-weight: 300;
            letter-spacing: -0.07em;
        }

        .metricLabel {
            color: #66666f;
            font-size: 0.65rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .metricSignal {
            height: 54px;
            display: flex;
            align-items: flex-end;
            gap: 5px;
        }

        .metricSignal span {
            flex: 1;
            min-width: 3px;
            background: linear-gradient(to top, #27272f, #73737e);
            animation: metricPulse 1.6s ease-in-out infinite alternate;
        }

        .metricSignal span:nth-child(1) {
            height: 28%;
        }

        .metricSignal span:nth-child(2) {
            height: 58%;
            animation-delay: 0.1s;
        }

        .metricSignal span:nth-child(3) {
            height: 84%;
            animation-delay: 0.2s;
        }

        .metricSignal span:nth-child(4) {
            height: 47%;
            animation-delay: 0.3s;
        }

        .metricSignal span:nth-child(5) {
            height: 72%;
            animation-delay: 0.4s;
        }

        .metricSignal span:nth-child(6) {
            height: 38%;
            animation-delay: 0.5s;
        }

        .telemetryPanel {
            margin-top: 60px;
            border: 1px solid rgba(255, 255, 255, 0.09);
            background: rgba(8, 8, 13, 0.78);
            backdrop-filter: blur(20px);
        }

        .telemetryHeader {
            min-height: 48px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: #4d4d56;
            font-size: 0.52rem;
            letter-spacing: 0.15em;
        }

        .telemetryBody {
            padding: 40px;
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 7vw;
            align-items: center;
        }

        .telemetryCopy {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }

        .terminalPrefix {
            color: #777781;
            font-family: "Courier New", monospace;
            font-size: 1rem;
        }

        .telemetryCopy p {
            max-width: 620px;
            color: #888891;
            font-size: clamp(1.25rem, 2vw, 2rem);
            line-height: 1.5;
            letter-spacing: -0.025em;
        }

        .telemetryBars {
            display: grid;
            gap: 1.3rem;
        }

        .barRow {
            display: grid;
            grid-template-columns: 90px 1fr 42px;
            gap: 1rem;
            align-items: center;
        }

        .barRow > span {
            color: #55555e;
            font-size: 0.55rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .barRow strong {
            color: #66666f;
            font-size: 0.55rem;
            font-weight: 500;
            text-align: right;
        }

        .bar {
            height: 4px;
            background: #17171d;
            overflow: hidden;
        }

        .barFill {
            display: block;
            height: 100%;
            background: linear-gradient(90deg, #464650, #a1a1ab);
        }

        .researchBar {
            width: 82%;
        }

        .buildBar {
            width: 94%;
        }

        .breakBar {
            width: 68%;
        }

        .learnBar {
            width: 100%;
        }

        @keyframes statusPulse {
            0%,
            100% {
                opacity: 0.4;
            }

            50% {
                opacity: 1;
            }
        }

        @keyframes metricPulse {
            from {
                opacity: 0.3;
                transform: scaleY(0.7);
                transform-origin: bottom;
            }

            to {
                opacity: 1;
                transform: scaleY(1);
                transform-origin: bottom;
            }
        }

        @media (max-width: 1100px) {
            .metricsGrid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .metricCard {
                min-height: 320px;
            }
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .telemetryBody {
                grid-template-columns: 1fr;
                gap: 3rem;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .sectionTop {
                align-items: flex-start;
                flex-direction: column;
                margin-bottom: 50px;
            }

            .metricsGrid {
                grid-template-columns: 1fr;
            }

            .metricCard {
                min-height: 260px;
                padding: 22px;
            }

            .telemetryPanel {
                margin-top: 40px;
            }

            .telemetryHeader {
                align-items: flex-start;
                flex-direction: column;
                justify-content: center;
                gap: 0.35rem;
                padding: 14px 18px;
            }

            .telemetryBody {
                padding: 26px 20px;
            }

            .barRow {
                grid-template-columns: 72px 1fr 34px;
                gap: 0.7rem;
            }
        }
    `,
};
