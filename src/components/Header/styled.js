import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 82px;
        padding: 0 4vw;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(5, 5, 9, 0.72);
        backdrop-filter: blur(22px);

        .brand {
            justify-self: start;
            display: flex;
            align-items: center;
            gap: 0.65rem;
        }

        .brandMark {
            color: #f4f4f4;
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: 0.08em;
        }

        .brandLabel {
            padding: 0.35rem 0.5rem;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 4px;
            color: #74747d;
            font-size: 0.58rem;
            font-weight: 700;
            letter-spacing: 0.18em;
        }

        .nav {
            display: flex;
            align-items: center;
            gap: 2.4rem;
        }

        .nav a {
            position: relative;
            color: #77777f;
            font-size: 0.68rem;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            transition: color 0.25s ease;
        }

        .nav a::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -9px;
            width: 0;
            height: 1px;
            background: #f4f4f4;
            transition: width 0.25s ease;
        }

        .nav a:hover {
            color: #f4f4f4;
        }

        .nav a:hover::after {
            width: 100%;
        }

        .githubLink {
            justify-self: end;
            display: flex;
            align-items: center;
            gap: 0.65rem;
            padding: 0.78rem 1rem;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 999px;
            color: #b5b5bb;
            font-size: 0.66rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
            transition:
                background 0.3s ease,
                color 0.3s ease,
                border-color 0.3s ease,
                transform 0.3s ease;
        }

        .githubIcon {
            font-size: 1rem;
        }

        .externalIcon {
            font-size: 0.9rem;
            transition: transform 0.25s ease;
        }

        .githubLink:hover {
            background: #f4f4f4;
            color: #050509;
            border-color: #f4f4f4;
            transform: translateY(-2px);
        }

        .githubLink:hover .externalIcon {
            transform: translate(2px, -2px);
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr auto;

            .nav {
                display: none;
            }
        }

        @media (max-width: 560px) {
            height: 70px;
            padding: 0 20px;

            .brandLabel {
                display: none;
            }

            .githubLink {
                padding: 0.68rem 0.8rem;
                font-size: 0.58rem;
            }
        }
    `,
};
