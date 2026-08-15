import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        position: relative;
        padding: 90px 4vw 30px;
        overflow: hidden;
        background: #050509;
        border-top: 1px solid rgba(255, 255, 255, 0.08);

        &::before {
            content: "";
            position: absolute;
            top: -220px;
            left: 50%;
            width: 700px;
            height: 420px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.035);
            filter: blur(110px);
            transform: translateX(-50%);
            pointer-events: none;
        }

        .footerMain {
            position: relative;
            z-index: 1;
            display: grid;
            grid-template-columns: minmax(280px, 0.8fr) minmax(0, 1.2fr);
            gap: clamp(4rem, 9vw, 10rem);
            padding-bottom: 80px;
        }

        .brandColumn {
            max-width: 520px;
        }

        .brand {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            gap: 14px;
        }

        .brandMark {
            width: 48px;
            height: 48px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 50%;
            color: #050509;
            background: #e1e1e5;
            font-size: 0.7rem;
            font-weight: 800;
            letter-spacing: -0.03em;
        }

        .brandName {
            color: #d6d6dc;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.18em;
        }

        .brandColumn > p {
            max-width: 460px;
            margin-top: 2rem;
            color: #696972;
            font-size: 0.9rem;
            line-height: 1.9;
        }

        .repositoryLink {
            width: fit-content;
            min-height: 46px;
            margin-top: 2rem;
            padding: 0 16px;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 999px;
            color: #8c8c95;
            background: rgba(255, 255, 255, 0.02);
            font-size: 0.64rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            transition:
                color 0.25s ease,
                background 0.25s ease,
                border-color 0.25s ease,
                transform 0.25s ease;
        }

        .repositoryLink svg:last-child {
            transition: transform 0.25s ease;
        }

        .repositoryLink:hover {
            color: #050509;
            background: #f4f4f4;
            border-color: #f4f4f4;
            transform: translateY(-2px);
        }

        .repositoryLink:hover svg:last-child {
            transform: translate(2px, -2px);
        }

        .linksColumn {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 3rem;
        }

        .linkGroup {
            min-width: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
        }

        .groupLabel {
            margin-bottom: 10px;
            color: #4f4f58;
            font-size: 0.58rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
        }

        .linkGroup a {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            color: #85858e;
            font-size: 0.78rem;
            line-height: 1.4;
            transition:
                color 0.25s ease,
                transform 0.25s ease;
        }

        .linkGroup a svg {
            flex: 0 0 auto;
            color: #55555e;
            font-size: 0.9rem;
            transition: color 0.25s ease;
        }

        .linkGroup a:hover {
            color: #f0f0f2;
            transform: translateX(4px);
        }

        .linkGroup a:hover svg {
            color: #d7d7dc;
        }

        .footerBottom {
            position: relative;
            z-index: 1;
            min-height: 72px;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 2rem;
            align-items: center;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .copyright {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            color: #4f4f58;
            font-size: 0.6rem;
            letter-spacing: 0.08em;
        }

        .copyright a {
            color: #8d8d96;
            transition: color 0.25s ease;
        }

        .copyright a:hover {
            color: #f4f4f4;
        }

        .separator {
            color: #34343c;
        }

        .status {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #595962;
            font-size: 0.58rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        .statusDot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #8e8e96;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.24);
            animation: statusPulse 2s ease-in-out infinite;
        }

        .backToTop {
            justify-self: end;
            display: inline-flex;
            align-items: center;
            gap: 9px;
            color: #62626b;
            font-size: 0.6rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            transition:
                color 0.25s ease,
                transform 0.25s ease;
        }

        .backToTop svg {
            transition: transform 0.25s ease;
        }

        .backToTop:hover {
            color: #f4f4f4;
        }

        .backToTop:hover svg {
            transform: translateY(-4px);
        }

        @keyframes statusPulse {
            0%,
            100% {
                opacity: 0.4;
                transform: scale(0.85);
            }

            50% {
                opacity: 1;
                transform: scale(1);
            }
        }

        @media (max-width: 1000px) {
            .footerMain {
                grid-template-columns: 1fr;
            }

            .linksColumn {
                max-width: 760px;
            }
        }

        @media (max-width: 760px) {
            padding: 70px 20px 24px;

            .linksColumn {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .footerBottom {
                padding-top: 24px;
                grid-template-columns: 1fr auto;
            }

            .status {
                justify-self: end;
            }

            .backToTop {
                grid-column: 1 / -1;
                justify-self: start;
            }
        }

        @media (max-width: 520px) {
            .footerMain {
                padding-bottom: 60px;
            }

            .linksColumn {
                grid-template-columns: 1fr;
                gap: 2.5rem;
            }

            .footerBottom {
                grid-template-columns: 1fr;
                gap: 16px;
            }

            .status,
            .backToTop {
                justify-self: start;
            }
        }
    `,
};
