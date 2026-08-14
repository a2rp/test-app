import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 140px 4vw;
        background: #050509;
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

        .stackMatrix {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .stackGroup {
            min-width: 0;
            border-right: 1px solid rgba(255, 255, 255, 0.09);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            background: #07070b;
        }

        .groupHeader {
            min-height: 130px;
            padding: 28px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            background:
                linear-gradient(
                    135deg,
                    rgba(255, 255, 255, 0.025),
                    transparent 60%
                ),
                #07070b;
        }

        .groupHeader > span {
            color: #4c4c55;
            font-size: 0.55rem;
            letter-spacing: 0.15em;
        }

        .groupHeader h3 {
            color: #cfcfd5;
            font-size: clamp(1.8rem, 2.6vw, 3rem);
            font-weight: 500;
            letter-spacing: -0.04em;
        }

        .groupItems {
            display: grid;
        }

        .stackItem {
            min-height: 92px;
            padding: 0 26px;
            display: grid;
            grid-template-columns: 42px 1fr auto;
            gap: 1rem;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            transition:
                background 0.3s ease,
                padding 0.3s ease;
        }

        .stackItem:last-child {
            border-bottom: 0;
        }

        .stackItem:hover {
            padding-left: 34px;
            padding-right: 34px;
            background: rgba(255, 255, 255, 0.025);
        }

        .itemIndex {
            color: #404048;
            font-size: 0.54rem;
            letter-spacing: 0.13em;
        }

        .stackItem strong {
            color: #9d9da6;
            font-size: 0.85rem;
            font-weight: 500;
            letter-spacing: 0.02em;
            transition: color 0.3s ease;
        }

        .stackItem:hover strong {
            color: #e1e1e5;
        }

        .itemStatus {
            padding: 0.38rem 0.52rem;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 999px;
            color: #4d4d56;
            font-size: 0.48rem;
            letter-spacing: 0.13em;
        }

        .stackFooter {
            margin-top: 44px;
            padding-top: 28px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .stackStatus {
            display: flex;
            align-items: center;
            gap: 0.65rem;
            color: #5d5d66;
            font-size: 0.58rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .statusDot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #a8a8b2;
            box-shadow: 0 0 9px rgba(255, 255, 255, 0.45);
        }

        .stackFooter p {
            max-width: 420px;
            color: #4f4f58;
            font-size: 0.72rem;
            line-height: 1.7;
            text-align: right;
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 2rem;
                margin-bottom: 65px;
            }

            .stackMatrix {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .headingBlock h2 {
                font-size: clamp(3rem, 14vw, 4.8rem);
            }

            .groupHeader {
                min-height: 110px;
                padding: 22px;
            }

            .stackItem {
                min-height: 82px;
                padding: 0 20px;
                grid-template-columns: 34px 1fr;
            }

            .stackItem:hover {
                padding-left: 20px;
                padding-right: 20px;
            }

            .itemStatus {
                display: none;
            }

            .stackFooter {
                flex-direction: column;
                align-items: flex-start;
            }

            .stackFooter p {
                text-align: left;
            }
        }
    `,
};
