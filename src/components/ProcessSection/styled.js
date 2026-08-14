import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 140px 4vw;
        background: #07070b;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .sectionHeader {
            display: grid;
            grid-template-columns: 0.55fr 1.45fr;
            gap: 5rem;
            margin-bottom: 90px;
        }

        .sectionIndex {
            color: #55555e;
            font-size: 0.62rem;
            letter-spacing: 0.18em;
        }

        .headingBlock h2 {
            max-width: 980px;
            font-size: clamp(3.8rem, 6vw, 7rem);
            line-height: 0.92;
            letter-spacing: -0.06em;
            font-weight: 600;
        }

        .headingBlock h2 span {
            display: block;
            color: #555560;
            font-weight: 400;
        }

        .headingBlock p {
            max-width: 520px;
            margin-top: 2.4rem;
            color: #74747d;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .processList {
            border-top: 1px solid rgba(255, 255, 255, 0.09);
        }

        .processItem {
            position: relative;
            min-height: 170px;
            display: grid;
            grid-template-columns: 90px 0.9fr 1.25fr 90px;
            gap: 2rem;
            align-items: center;
            padding: 34px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            transition:
                padding 0.35s ease,
                background 0.35s ease;
        }

        .processItem::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0;
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.03),
                transparent 70%
            );
            transition: opacity 0.35s ease;
        }

        .processItem:hover::before {
            opacity: 1;
        }

        .processItem:hover {
            padding-left: 18px;
            padding-right: 18px;
        }

        .processItem > * {
            position: relative;
            z-index: 1;
        }

        .stepNumber {
            color: #44444d;
            font-size: 0.58rem;
            letter-spacing: 0.16em;
        }

        .stepTitle {
            display: flex;
            flex-direction: column;
            gap: 0.55rem;
        }

        .stepTitle span {
            color: #4f4f58;
            font-size: 0.52rem;
            letter-spacing: 0.14em;
        }

        .stepTitle h3 {
            color: #d1d1d7;
            font-size: clamp(1.8rem, 2.6vw, 3rem);
            font-weight: 500;
            letter-spacing: -0.045em;
        }

        .processItem > p {
            max-width: 560px;
            color: #6d6d76;
            font-size: 0.86rem;
            line-height: 1.8;
        }

        .stepVisual {
            position: relative;
            height: 100%;
            min-height: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .stepNode {
            position: relative;
            z-index: 2;
            width: 12px;
            height: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            background: #0b0b10;
            box-shadow:
                inset 0 0 8px rgba(255, 255, 255, 0.12),
                0 0 12px rgba(255, 255, 255, 0.08);
            transition:
                background 0.3s ease,
                transform 0.3s ease;
        }

        .processItem:hover .stepNode {
            background: #d7d7dc;
            transform: scale(1.25);
        }

        .stepLine {
            position: absolute;
            top: 50%;
            left: calc(50% + 6px);
            width: calc(100% + 2rem);
            height: 1px;
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.14),
                rgba(255, 255, 255, 0.03)
            );
        }

        .processFooter {
            margin-top: 44px;
            padding: 26px 0;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 2rem;
            align-items: center;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .processFooter > span,
        .processFooter > strong {
            color: #4f4f58;
            font-size: 0.52rem;
            font-weight: 500;
            letter-spacing: 0.15em;
        }

        .loopIndicator {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 6px;
        }

        .loopIndicator span {
            height: 3px;
            background: #34343c;
            animation: loopPulse 2s ease-in-out infinite;
        }

        .loopIndicator span:nth-child(2) {
            animation-delay: 0.15s;
        }

        .loopIndicator span:nth-child(3) {
            animation-delay: 0.3s;
        }

        .loopIndicator span:nth-child(4) {
            animation-delay: 0.45s;
        }

        .loopIndicator span:nth-child(5) {
            animation-delay: 0.6s;
        }

        @keyframes loopPulse {
            0%,
            100% {
                opacity: 0.25;
                transform: scaleX(0.7);
            }

            50% {
                opacity: 1;
                transform: scaleX(1);
            }
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 2rem;
                margin-bottom: 65px;
            }

            .processItem {
                grid-template-columns: 52px 1fr 50px;
                gap: 1.2rem;
            }

            .processItem > p {
                grid-column: 2 / 4;
            }

            .stepVisual {
                grid-column: 3;
                grid-row: 1 / 3;
            }

            .stepLine {
                display: none;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .headingBlock h2 {
                font-size: clamp(3rem, 14vw, 4.8rem);
            }

            .processItem {
                min-height: auto;
                grid-template-columns: 34px 1fr;
                padding: 28px 0;
            }

            .processItem:hover {
                padding-left: 0;
                padding-right: 0;
            }

            .stepNumber {
                align-self: start;
                padding-top: 0.35rem;
            }

            .stepTitle {
                grid-column: 2;
            }

            .processItem > p {
                grid-column: 2;
            }

            .stepVisual {
                display: none;
            }

            .processFooter {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
        }
    `,
};
