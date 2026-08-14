import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        min-height: 100vh;
        padding: 140px 4vw 70px;
        display: flex;
        align-items: center;
        overflow: hidden;
        background: #050509;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .gridOverlay {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(
                    rgba(255, 255, 255, 0.025) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.025) 1px,
                    transparent 1px
                );
            background-size: 64px 64px;
            mask-image: linear-gradient(
                to bottom,
                transparent,
                black 14%,
                black 84%,
                transparent
            );
            pointer-events: none;
        }

        .glow {
            position: absolute;
            border-radius: 50%;
            filter: blur(140px);
            pointer-events: none;
        }

        .glowOne {
            width: 500px;
            height: 500px;
            top: 10%;
            right: 8%;
            background: rgba(120, 120, 255, 0.08);
        }

        .glowTwo {
            width: 350px;
            height: 350px;
            left: 10%;
            bottom: -10%;
            background: rgba(255, 255, 255, 0.05);
        }

        .heroContent {
            position: relative;
            z-index: 2;
            width: min(760px, 58%);
        }

        .eyebrow {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 2rem;
            color: #777780;
            font-size: 0.68rem;
            text-transform: uppercase;
            letter-spacing: 0.18em;
        }

        .statusDot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #f4f4f4;
            box-shadow: 0 0 14px rgba(255, 255, 255, 0.75);
        }

        h1 {
            margin: 0;
            font-size: clamp(4rem, 7.5vw, 8.5rem);
            line-height: 0.84;
            letter-spacing: -0.065em;
            font-weight: 700;
        }

        h1 span {
            display: block;
            color: #555560;
            font-weight: 500;
        }

        .heroBottom {
            margin-top: 3rem;
            display: flex;
            align-items: flex-end;
            gap: 3rem;
        }

        .heroBottom p {
            max-width: 470px;
            color: #85858d;
            font-size: 0.95rem;
            line-height: 1.8;
        }

        .primaryCta {
            flex-shrink: 0;
            min-width: 220px;
            padding: 1rem 1.2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.025);
            color: #c5c5ca;
            font-size: 0.67rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
            transition:
                background 0.3s ease,
                color 0.3s ease,
                border-color 0.3s ease;
        }

        .primaryCta:hover {
            background: #f4f4f4;
            color: #050509;
            border-color: #f4f4f4;
        }

        .labPanel {
            position: absolute;
            z-index: 2;
            right: 4vw;
            top: 50%;
            width: min(34vw, 520px);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 10px;
            background: rgba(8, 8, 14, 0.82);
            box-shadow:
                0 60px 120px rgba(0, 0, 0, 0.55),
                0 0 80px rgba(90, 90, 255, 0.03);
            backdrop-filter: blur(20px);
            transform: translateY(-50%) perspective(1300px) rotateY(-7deg);
            overflow: hidden;
        }

        .panelHeader {
            height: 46px;
            padding: 0 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: #666670;
            font-size: 0.58rem;
            letter-spacing: 0.14em;
        }

        .panelDots {
            display: flex;
            gap: 6px;
        }

        .panelDots span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #414149;
        }

        .panelBody {
            padding: 28px;
        }

        .terminalLine {
            display: flex;
            gap: 0.8rem;
            margin-bottom: 0.85rem;
            color: #c8c8ce;
            font-family: "Courier New", monospace;
            font-size: 0.75rem;
        }

        .terminalPrompt {
            color: #f4f4f4;
        }

        .terminalLine.dim {
            color: #5f5f68;
        }

        .terminalLine.success {
            color: #b9b9c1;
        }

        .systemGrid {
            margin-top: 2rem;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            border-left: 1px solid rgba(255, 255, 255, 0.08);
        }

        .systemItem {
            min-height: 95px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-right: 1px solid rgba(255, 255, 255, 0.08);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .systemItem span {
            color: #52525b;
            font-size: 0.55rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .systemItem strong {
            color: #aaaab3;
            font-size: 0.68rem;
            font-weight: 500;
            letter-spacing: 0.08em;
        }

        .signal {
            height: 70px;
            margin-top: 2rem;
            display: flex;
            align-items: flex-end;
            gap: 7px;
        }

        .signal span {
            flex: 1;
            min-width: 4px;
            background: linear-gradient(to top, #33333b, #8e8e9a);
            animation: pulse 1.8s ease-in-out infinite alternate;
        }

        .signal span:nth-child(1) {
            height: 22%;
        }

        .signal span:nth-child(2) {
            height: 48%;
            animation-delay: 0.1s;
        }

        .signal span:nth-child(3) {
            height: 78%;
            animation-delay: 0.2s;
        }

        .signal span:nth-child(4) {
            height: 55%;
            animation-delay: 0.3s;
        }

        .signal span:nth-child(5) {
            height: 92%;
            animation-delay: 0.4s;
        }

        .signal span:nth-child(6) {
            height: 67%;
            animation-delay: 0.5s;
        }

        .signal span:nth-child(7) {
            height: 38%;
            animation-delay: 0.6s;
        }

        .signal span:nth-child(8) {
            height: 72%;
            animation-delay: 0.7s;
        }

        .heroMeta {
            position: absolute;
            left: 4vw;
            bottom: 32px;
            display: flex;
            gap: 2rem;
            color: #45454d;
            font-size: 0.56rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
        }

        .scrollIndicator {
            position: absolute;
            right: 4vw;
            bottom: 32px;
            display: flex;
            align-items: center;
            gap: 0.7rem;
            color: #4c4c55;
            font-size: 0.56rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            transition: color 0.3s ease;
        }

        .scrollIndicator:hover {
            color: #d8d8dc;
        }

        @keyframes pulse {
            from {
                opacity: 0.35;
                transform: scaleY(0.75);
                transform-origin: bottom;
            }

            to {
                opacity: 1;
                transform: scaleY(1);
                transform-origin: bottom;
            }
        }

        @media (max-width: 1100px) {
            .heroContent {
                width: 66%;
            }

            .labPanel {
                right: -8vw;
                opacity: 0.65;
            }
        }

        @media (max-width: 760px) {
            min-height: 100svh;
            padding: 120px 20px 90px;
            align-items: flex-start;

            .heroContent {
                width: 100%;
            }

            h1 {
                font-size: clamp(3.5rem, 17vw, 6rem);
            }

            .heroBottom {
                flex-direction: column;
                align-items: flex-start;
                gap: 1.5rem;
            }

            .heroBottom p {
                max-width: 100%;
            }

            .primaryCta {
                width: 100%;
            }

            .labPanel {
                width: 78vw;
                right: -36vw;
                top: 72%;
                opacity: 0.24;
                pointer-events: none;
            }

            .heroMeta {
                display: none;
            }

            .scrollIndicator {
                left: 20px;
                right: auto;
                bottom: 24px;
            }
        }
    `,
};
