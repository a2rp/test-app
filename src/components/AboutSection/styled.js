import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 140px 4vw;
        background: #07070b;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .sectionTop {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
        }

        .sectionIndex {
            color: #55555e;
            font-size: 0.62rem;
            letter-spacing: 0.18em;
        }

        .sectionTop > p {
            max-width: 520px;
            justify-self: end;
            color: #74747d;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .statement {
            margin-top: 100px;
        }

        .statement h2 {
            max-width: 1150px;
            font-size: clamp(4rem, 7vw, 8rem);
            line-height: 0.9;
            letter-spacing: -0.065em;
            font-weight: 600;
        }

        .statement h2 span {
            display: block;
            color: #555560;
            font-weight: 400;
        }

        .aboutGrid {
            margin-top: 110px;
            padding-top: 55px;
            display: grid;
            grid-template-columns:
                minmax(280px, 0.72fr)
                minmax(0, 1.28fr);
            gap: 8vw;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .aboutCopy {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .copyLabel {
            margin-bottom: 0.5rem;
            color: #4d4d56;
            font-size: 0.54rem;
            letter-spacing: 0.15em;
        }

        .aboutCopy p {
            max-width: 470px;
            color: #777780;
            font-size: 0.92rem;
            line-height: 1.9;
        }

        .identityPanel {
            border: 1px solid rgba(255, 255, 255, 0.09);
            background: rgba(255, 255, 255, 0.012);
        }

        .identityHeader {
            min-height: 48px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: #4c4c55;
            font-size: 0.52rem;
            letter-spacing: 0.14em;
        }

        .identityBody {
            padding: 40px;
            display: grid;
            grid-template-columns: 150px 1fr;
            gap: 3rem;
            align-items: center;
        }

        .identityMark {
            width: 150px;
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            background:
                linear-gradient(
                    145deg,
                    rgba(255, 255, 255, 0.06),
                    transparent 60%
                ),
                #09090e;
            box-shadow:
                inset 0 0 50px rgba(255, 255, 255, 0.025),
                0 30px 60px rgba(0, 0, 0, 0.35);
        }

        .identityMark span {
            color: #8b8b94;
            font-size: 2rem;
            font-weight: 600;
            letter-spacing: 0.08em;
        }

        .identityLabel {
            color: #505059;
            font-size: 0.52rem;
            letter-spacing: 0.15em;
        }

        .identityContent h3 {
            margin-top: 0.8rem;
            color: #d7d7dc;
            font-size: clamp(2rem, 3vw, 3.6rem);
            font-weight: 500;
            letter-spacing: -0.045em;
        }

        .identityContent > p {
            max-width: 620px;
            margin-top: 1.3rem;
            color: #72727b;
            font-size: 0.88rem;
            line-height: 1.85;
        }

        .identityMeta {
            margin-top: 1.6rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.55rem;
        }

        .identityMeta span {
            padding: 0.48rem 0.66rem;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 999px;
            color: #595962;
            font-size: 0.52rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .identityFooter {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .identityFooter a {
            min-height: 70px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            color: #66666f;
            font-size: 0.58rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
            transition:
                background 0.3s ease,
                color 0.3s ease;
        }

        .identityFooter a:first-child {
            border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .identityFooter a:hover {
            background: rgba(255, 255, 255, 0.035);
            color: #d8d8dd;
        }

        .identityFooter a span {
            transition: transform 0.3s ease;
        }

        .identityFooter a:hover span {
            transform: rotate(45deg);
        }

        .manifesto {
            margin-top: 100px;
            padding-top: 28px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .manifestoLabel {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            color: #44444d;
            font-size: 0.52rem;
            letter-spacing: 0.15em;
        }

        .manifestoText {
            margin-top: 35px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
        }

        .manifestoText span {
            color: #2f2f37;
            font-size: clamp(2.2rem, 5vw, 6rem);
            font-weight: 700;
            letter-spacing: -0.055em;
            transition:
                color 0.3s ease,
                transform 0.3s ease;
        }

        .manifestoText span:hover {
            color: #8b8b94;
            transform: translateY(-4px);
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .sectionTop {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .sectionTop > p {
                justify-self: start;
            }

            .statement {
                margin-top: 75px;
            }

            .aboutGrid {
                margin-top: 80px;
                grid-template-columns: 1fr;
                gap: 4rem;
            }

            .manifestoText {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .statement {
                margin-top: 60px;
            }

            .statement h2 {
                font-size: clamp(3.1rem, 14vw, 4.8rem);
            }

            .aboutGrid {
                margin-top: 60px;
                padding-top: 40px;
            }

            .identityBody {
                padding: 26px 20px;
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .identityMark {
                width: 110px;
            }

            .identityFooter {
                grid-template-columns: 1fr;
            }

            .identityFooter a:first-child {
                border-right: 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }

            .manifesto {
                margin-top: 70px;
            }

            .manifestoText {
                grid-template-columns: 1fr;
                gap: 0.25rem;
            }

            .manifestoText span {
                font-size: clamp(2.8rem, 14vw, 4.8rem);
            }
        }
    `,
};
