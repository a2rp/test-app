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
            align-items: start;
            margin-bottom: 80px;
        }

        .sectionLabel {
            color: #777782;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
        }

        .sectionHeader > p {
            max-width: 520px;
            color: #74747d;
            font-size: 0.9rem;
            line-height: 1.85;
        }

        .aboutGrid {
            display: grid;
            grid-template-columns: minmax(320px, 0.85fr) minmax(0, 1.15fr);
            gap: clamp(3rem, 7vw, 8rem);
            align-items: center;
        }

        .visualColumn {
            min-width: 0;
        }

        .imageWrapper {
            position: relative;
            min-height: 620px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: #0b0b10;
        }

        .imageWrapper img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(1) contrast(1.05) brightness(0.58);
            transform: scale(1.01);
            transition:
                transform 0.9s ease,
                filter 0.6s ease;
        }

        .imageWrapper:hover img {
            transform: scale(1.06);
            filter: grayscale(0.65) contrast(1.05) brightness(0.68);
        }

        .imageOverlay {
            position: absolute;
            inset: 0;
            background:
                linear-gradient(
                    180deg,
                    rgba(5, 5, 9, 0.04),
                    rgba(5, 5, 9, 0.72)
                ),
                radial-gradient(
                    circle at top right,
                    rgba(255, 255, 255, 0.1),
                    transparent 42%
                );
        }

        .imageLabel {
            position: absolute;
            left: 24px;
            right: 24px;
            bottom: 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }

        .imageLabel span,
        .imageLabel strong {
            font-size: 0.58rem;
            letter-spacing: 0.16em;
            font-weight: 600;
        }

        .imageLabel span {
            color: #a1a1a9;
        }

        .imageLabel strong {
            color: #d6d6dc;
        }

        .imageCorner {
            position: absolute;
            top: 24px;
            right: 24px;
            width: 46px;
            height: 46px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 50%;
            color: #b2b2ba;
            background: rgba(5, 5, 9, 0.45);
            backdrop-filter: blur(12px);
            font-size: 1rem;
        }

        .contentColumn {
            max-width: 760px;
        }

        .smallLabel {
            display: block;
            margin-bottom: 1.5rem;
            color: #5d5d66;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.17em;
        }

        .contentColumn h2 {
            margin: 0;
            color: #e2e2e7;
            font-size: clamp(4rem, 7vw, 8rem);
            font-weight: 600;
            line-height: 0.88;
            letter-spacing: -0.07em;
        }

        .contentColumn h2 span {
            display: block;
            color: #555560;
            font-weight: 400;
        }

        .intro {
            max-width: 680px;
            margin-top: 2.5rem;
            color: #b0b0b8;
            font-size: clamp(1.05rem, 1.4vw, 1.25rem);
            line-height: 1.75;
        }

        .description {
            max-width: 650px;
            margin-top: 1.5rem;
            color: #707079;
            font-size: 0.9rem;
            line-height: 1.9;
        }

        .highlights {
            margin-top: 3rem;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .highlightItem {
            min-width: 0;
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 14px;
            border-right: 1px solid rgba(255, 255, 255, 0.09);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
        }

        .highlightIcon {
            width: 36px;
            height: 36px;
            flex: 0 0 36px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: #85858f;
            font-size: 0.85rem;
        }

        .highlightItem div {
            min-width: 0;
        }

        .highlightItem div span {
            display: block;
            margin-bottom: 5px;
            color: #53535c;
            font-size: 0.54rem;
            letter-spacing: 0.13em;
            text-transform: uppercase;
        }

        .highlightItem div strong {
            display: block;
            overflow: hidden;
            color: #b7b7be;
            font-size: 0.74rem;
            font-weight: 500;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .actions {
            margin-top: 2.2rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .primaryLink {
            min-height: 48px;
            padding: 0 18px;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: 1px solid #e1e1e5;
            border-radius: 999px;
            color: #050509;
            background: #e1e1e5;
            font-size: 0.66rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            transition:
                transform 0.25s ease,
                background 0.25s ease;
        }

        .primaryLink svg:last-child {
            transition: transform 0.25s ease;
        }

        .primaryLink:hover {
            background: #ffffff;
            transform: translateY(-2px);
        }

        .primaryLink:hover svg:last-child {
            transform: translate(2px, -2px);
        }

        .iconLink {
            width: 48px;
            height: 48px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 50%;
            color: #888892;
            background: rgba(255, 255, 255, 0.02);
            font-size: 1rem;
            transition:
                color 0.25s ease,
                background 0.25s ease,
                transform 0.25s ease;
        }

        .iconLink:hover {
            color: #050509;
            background: #f4f4f4;
            transform: translateY(-2px);
        }

        @media (max-width: 1000px) {
            .aboutGrid {
                grid-template-columns: 1fr;
            }

            .imageWrapper {
                min-height: 520px;
            }

            .contentColumn {
                max-width: none;
            }
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 1.5rem;
                margin-bottom: 60px;
            }
        }

        @media (max-width: 650px) {
            .highlights {
                grid-template-columns: 1fr;
            }

            .highlightItem div strong {
                white-space: normal;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .imageWrapper {
                min-height: 430px;
            }

            .contentColumn h2 {
                font-size: clamp(3.8rem, 18vw, 6rem);
            }

            .actions {
                flex-wrap: wrap;
            }
        }
    `,
};
