import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        position: relative;
        padding: 130px 4vw 30px;
        overflow: hidden;
        background: #050509;

        .footerGrid {
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
            background-size: 58px 58px;
            mask-image: linear-gradient(to bottom, black, transparent 72%);
            pointer-events: none;
        }

        .footerTop,
        .linksGrid,
        .footerBottom {
            position: relative;
            z-index: 1;
        }

        .footerTop {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 8vw;
            align-items: end;
        }

        .footerIndex {
            display: block;
            margin-bottom: 2rem;
            color: #505059;
            font-size: 0.56rem;
            letter-spacing: 0.17em;
        }

        .footerIntro h2 {
            max-width: 900px;
            color: #dedee3;
            font-size: clamp(3.8rem, 6.5vw, 7.5rem);
            line-height: 0.91;
            letter-spacing: -0.065em;
            font-weight: 600;
        }

        .footerIntro h2 span {
            display: block;
            color: #555560;
            font-weight: 400;
        }

        .footerIntro > p {
            max-width: 510px;
            margin-top: 2.4rem;
            color: #707079;
            font-size: 0.9rem;
            line-height: 1.85;
        }

        .contactPanel {
            border: 1px solid rgba(255, 255, 255, 0.09);
            background: rgba(255, 255, 255, 0.012);
        }

        .contactLabel {
            min-height: 48px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: #4e4e57;
            font-size: 0.52rem;
            letter-spacing: 0.15em;
        }

        .emailLink {
            min-height: 125px;
            padding: 26px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: #aaaab2;
            font-size: clamp(1rem, 1.6vw, 1.45rem);
            transition:
                background 0.3s ease,
                color 0.3s ease;
        }

        .emailLink:hover {
            background: rgba(255, 255, 255, 0.025);
            color: #e5e5e9;
        }

        .emailLink strong {
            width: 46px;
            height: 46px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 50%;
            color: #64646d;
            font-weight: 400;
            transition:
                background 0.3s ease,
                color 0.3s ease,
                transform 0.3s ease;
        }

        .emailLink:hover strong {
            background: #f4f4f4;
            color: #050509;
            transform: rotate(45deg);
        }

        .contactMeta {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .contactMeta > div {
            min-height: 88px;
            padding: 18px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .contactMeta > div:first-child {
            border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .contactMeta span {
            color: #46464f;
            font-size: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .contactMeta strong {
            color: #74747d;
            font-size: 0.58rem;
            font-weight: 500;
            letter-spacing: 0.11em;
        }

        .available {
            display: flex;
            align-items: center;
            gap: 0.55rem;
        }

        .statusDot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #aaaab3;
            box-shadow: 0 0 9px rgba(255, 255, 255, 0.4);
        }

        .linksGrid {
            margin-top: 100px;
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            border-left: 1px solid rgba(255, 255, 255, 0.08);
        }

        .linksGrid a {
            min-height: 82px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            border-right: 1px solid rgba(255, 255, 255, 0.08);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: #5d5d66;
            font-size: 0.56rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            transition:
                color 0.3s ease,
                background 0.3s ease;
        }

        .linksGrid a:hover {
            color: #d7d7dc;
            background: rgba(255, 255, 255, 0.025);
        }

        .linksGrid a span:last-child {
            color: #45454d;
            transition: transform 0.3s ease;
        }

        .linksGrid a:hover span:last-child {
            transform: rotate(45deg);
        }

        .footerBottom {
            margin-top: 70px;
            padding-top: 26px;
            display: grid;
            grid-template-columns: 1fr auto auto 1fr;
            gap: 2rem;
            align-items: center;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .footerBrand {
            display: flex;
            align-items: center;
            gap: 0.6rem;
        }

        .footerBrand strong {
            color: #c4c4ca;
            font-size: 0.78rem;
            letter-spacing: 0.08em;
        }

        .footerBrand span {
            padding: 0.28rem 0.4rem;
            border: 1px solid rgba(255, 255, 255, 0.09);
            border-radius: 3px;
            color: #55555e;
            font-size: 0.45rem;
            letter-spacing: 0.15em;
        }

        .footerBottom p,
        .footerBottom > a {
            color: #45454e;
            font-size: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.11em;
        }

        .footerBottom > a {
            justify-self: end;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            transition: color 0.3s ease;
        }

        .footerBottom > a:hover {
            color: #b7b7bf;
        }

        @media (max-width: 1100px) {
            .linksGrid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .footerBottom {
                grid-template-columns: 1fr 1fr;
            }

            .footerBottom > a {
                justify-self: start;
            }
        }

        @media (max-width: 900px) {
            padding: 100px 20px 30px;

            .footerTop {
                grid-template-columns: 1fr;
                gap: 4rem;
            }

            .linksGrid {
                margin-top: 70px;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px 25px;

            .footerIntro h2 {
                font-size: clamp(3rem, 14vw, 4.8rem);
            }

            .emailLink {
                min-height: 105px;
                padding: 20px;
                flex-direction: column;
                align-items: flex-start;
            }

            .contactMeta {
                grid-template-columns: 1fr;
            }

            .contactMeta > div:first-child {
                border-right: 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }

            .linksGrid {
                grid-template-columns: 1fr;
                margin-top: 60px;
            }

            .linksGrid a {
                min-height: 68px;
            }

            .footerBottom {
                margin-top: 50px;
                grid-template-columns: 1fr;
                gap: 0.9rem;
            }

            .footerBottom > a {
                justify-self: start;
            }
        }
    `,
};
