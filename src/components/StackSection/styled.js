import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 140px 4vw;
        background: #050509;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .sectionHeader {
            display: grid;
            grid-template-columns: 0.95fr 1.05fr;
            gap: 5rem;
            align-items: end;
            margin-bottom: 80px;
        }

        .sectionLabel {
            display: inline-flex;
            align-items: center;
            margin-bottom: 1.4rem;
            color: #777782;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
        }

        .sectionHeader h2 {
            max-width: 850px;
            color: #e3e3e7;
            font-size: clamp(3.5rem, 6vw, 6.8rem);
            font-weight: 600;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .sectionHeader h2 span {
            display: block;
            color: #555560;
            font-weight: 400;
        }

        .sectionHeader > p {
            max-width: 520px;
            justify-self: end;
            color: #74747d;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .stackGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .stackCard {
            position: relative;
            min-height: 330px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            border-right: 1px solid rgba(255, 255, 255, 0.09);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            background: rgba(255, 255, 255, 0.008);
            transition:
                background 0.35s ease,
                transform 0.35s ease;
        }

        .stackCard::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: radial-gradient(
                circle at top right,
                rgba(255, 255, 255, 0.07),
                transparent 42%
            );
            opacity: 0;
            transition: opacity 0.35s ease;
        }

        .stackCard::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background: #d7d7dc;
            transition: width 0.4s ease;
        }

        .stackCard:hover {
            background: rgba(255, 255, 255, 0.025);
            transform: translateY(-4px);
        }

        .stackCard:hover::before {
            opacity: 1;
        }

        .stackCard:hover::after {
            width: 100%;
        }

        .cardTop {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .cardIndex {
            color: #4b4b54;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.17em;
        }

        .stackIcon {
            width: 44px;
            height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 50%;
            color: #85858f;
            background: rgba(255, 255, 255, 0.025);
            font-size: 1rem;
            transition:
                color 0.3s ease,
                background 0.3s ease,
                border-color 0.3s ease,
                transform 0.3s ease;
        }

        .stackCard:hover .stackIcon {
            color: #050509;
            background: #f4f4f4;
            border-color: #f4f4f4;
            transform: rotate(-8deg) scale(1.06);
        }

        .cardContent {
            position: relative;
            z-index: 1;
        }

        .category {
            display: block;
            margin-bottom: 0.9rem;
            color: #555560;
            font-size: 0.6rem;
            font-weight: 700;
            letter-spacing: 0.15em;
            text-transform: uppercase;
        }

        .cardContent h3 {
            margin-bottom: 1.1rem;
            color: #d7d7dc;
            font-size: clamp(1.8rem, 2.5vw, 2.7rem);
            font-weight: 500;
            line-height: 1;
            letter-spacing: -0.045em;
        }

        .cardContent p {
            max-width: 330px;
            color: #696972;
            font-size: 0.84rem;
            line-height: 1.8;
        }

        @media (max-width: 1050px) {
            .stackGrid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .stackCard {
                min-height: 300px;
            }
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 2rem;
                margin-bottom: 60px;
            }

            .sectionHeader > p {
                justify-self: start;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .sectionHeader h2 {
                font-size: clamp(3rem, 14vw, 4.8rem);
            }

            .stackGrid {
                grid-template-columns: 1fr;
            }

            .stackCard {
                min-height: 260px;
                padding: 26px;
            }

            .cardContent p {
                max-width: none;
            }
        }
    `,
};
