import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 140px 4vw;
        background: #07070b;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .sectionHeader {
            display: grid;
            grid-template-columns:
                minmax(0, 1.45fr)
                minmax(280px, 0.55fr);
            gap: 5rem;
            align-items: end;
            margin-bottom: 90px;
        }

        .sectionIndex {
            display: block;
            margin-bottom: 2rem;
            color: #55555e;
            font-size: 0.62rem;
            letter-spacing: 0.18em;
        }

        h2 {
            max-width: 950px;
            font-size: clamp(3.8rem, 6vw, 7rem);
            line-height: 0.92;
            letter-spacing: -0.06em;
            font-weight: 600;
        }

        h2 span {
            display: block;
            color: #555560;
            font-weight: 400;
        }

        .sectionHeader > p {
            max-width: 410px;
            color: #74747d;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .experimentGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .experimentCard {
            min-width: 0;
            border-right: 1px solid rgba(255, 255, 255, 0.09);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            background: #07070b;
        }

        .visualArea {
            position: relative;
            min-height: 540px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background:
                radial-gradient(
                    circle at center,
                    rgba(255, 255, 255, 0.035),
                    transparent 58%
                ),
                #09090e;
        }

        .visualArea::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 1;
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
            background-size: 52px 52px;
        }

        .visualImage {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.12;
            filter: grayscale(1) contrast(1.15) brightness(0.6);
            transform: scale(1.02);
            transition:
                transform 0.8s ease,
                opacity 0.6s ease,
                filter 0.6s ease;
        }

        .visualImageOverlay {
            position: absolute;
            inset: 0;
            z-index: 1;
            background:
                linear-gradient(
                    180deg,
                    rgba(7, 7, 11, 0.2),
                    rgba(7, 7, 11, 0.72)
                ),
                radial-gradient(
                    circle at center,
                    rgba(7, 7, 11, 0.05),
                    rgba(7, 7, 11, 0.75)
                );
        }

        .experimentCard:hover .visualImage {
            opacity: 0.2;
            filter: grayscale(0.65) contrast(1.15) brightness(0.72);
            transform: scale(1.08);
        }

        .visualIcon {
            position: absolute;
            top: 56px;
            right: 24px;
            z-index: 5;
            width: 42px;
            height: 42px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 50%;
            background: rgba(5, 5, 9, 0.55);
            backdrop-filter: blur(12px);
            color: #777782;
            font-size: 1rem;
            transition:
                color 0.3s ease,
                background 0.3s ease,
                transform 0.3s ease;
        }

        .experimentCard:hover .visualIcon {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
            transform: rotate(-8deg) scale(1.08);
        }

        .visualMeta {
            position: absolute;
            top: 24px;
            left: 24px;
            right: 24px;
            z-index: 5;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #51515a;
            font-size: 0.56rem;
            letter-spacing: 0.14em;
        }

        .status {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .statusDot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #a7a7b2;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.45);
        }

        .categoryBadge {
            position: absolute;
            right: 24px;
            bottom: 24px;
            z-index: 5;
            padding: 0.55rem 0.7rem;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 999px;
            background: rgba(5, 5, 9, 0.72);
            backdrop-filter: blur(14px);
            color: #686872;
            font-size: 0.55rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .interfaceVisual {
            position: relative;
            z-index: 2;
            width: min(72%, 520px);
            aspect-ratio: 1.38;
            border: 1px solid rgba(255, 255, 255, 0.13);
            border-radius: 8px;
            background: rgba(7, 7, 12, 0.85);
            box-shadow: 0 45px 90px rgba(0, 0, 0, 0.5);
            transform: perspective(1000px) rotateX(7deg) rotateY(-8deg);
            overflow: hidden;
            transition: transform 0.6s ease;
        }

        .experimentCard:hover .interfaceVisual {
            transform: perspective(1000px) rotateX(2deg) rotateY(-2deg)
                scale(1.025);
        }

        .interfaceTop {
            height: 38px;
            padding: 0 14px;
            display: flex;
            align-items: center;
            gap: 6px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .interfaceTop span {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #3e3e47;
        }

        .interfaceBody {
            height: calc(100% - 38px);
            display: grid;
            grid-template-columns: 23% 1fr;
        }

        .interfaceSide {
            border-right: 1px solid rgba(255, 255, 255, 0.07);
            background: rgba(255, 255, 255, 0.012);
        }

        .interfaceMain {
            padding: 9%;
        }

        .interfaceTitle,
        .interfaceLine {
            display: block;
            border-radius: 999px;
            background: #303038;
        }

        .interfaceTitle {
            width: 72%;
            height: 15px;
            margin-bottom: 14px;
            background: #777780;
        }

        .interfaceLine {
            width: 56%;
            height: 6px;
            margin-bottom: 8px;
        }

        .interfaceLine.short {
            width: 35%;
        }

        .interfaceCards {
            margin-top: 11%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }

        .interfaceCards span {
            aspect-ratio: 1;
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 5px;
            background: linear-gradient(145deg, #14141a, #08080d);
        }

        .signalVisual {
            position: relative;
            z-index: 2;
            width: 320px;
            height: 320px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .signalOrbit {
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.13);
            border-radius: 50%;
        }

        .orbitOne {
            width: 100%;
            height: 100%;
            animation: rotate 24s linear infinite;
        }

        .orbitTwo {
            width: 72%;
            height: 72%;
            border-style: dashed;
            animation: rotateReverse 18s linear infinite;
        }

        .orbitThree {
            width: 44%;
            height: 44%;
            animation: rotate 14s linear infinite;
        }

        .signalCore {
            width: 95px;
            height: 95px;
            border-radius: 50%;
            background: radial-gradient(
                circle at 35% 28%,
                #d8d8df,
                #53535e 24%,
                #101016 67%
            );
            box-shadow: 0 0 70px rgba(255, 255, 255, 0.07);
        }

        .node {
            position: absolute;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #a7a7b0;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.55);
        }

        .nodeOne {
            top: 9%;
            left: 30%;
        }

        .nodeTwo {
            top: 43%;
            right: -1%;
        }

        .nodeThree {
            bottom: 7%;
            left: 38%;
        }

        .nodeFour {
            top: 34%;
            left: 8%;
        }

        .spatialVisual {
            position: relative;
            z-index: 2;
            width: 340px;
            height: 340px;
            transform: rotate(-8deg);
        }

        .spatialCube {
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.14);
            background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.08),
                rgba(255, 255, 255, 0.01)
            );
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
            transition: transform 0.5s ease;
        }

        .cubeOne {
            width: 130px;
            height: 130px;
            top: 15px;
            left: 28px;
        }

        .cubeTwo {
            width: 95px;
            height: 95px;
            top: 82px;
            right: 22px;
        }

        .cubeThree {
            width: 110px;
            height: 110px;
            bottom: 15px;
            left: 78px;
        }

        .cubeFour {
            width: 62px;
            height: 62px;
            bottom: 45px;
            right: 20px;
        }

        .cubeFive {
            width: 52px;
            height: 52px;
            top: 142px;
            left: 5px;
        }

        .experimentCard:hover .cubeOne {
            transform: translate(-8px, -8px);
        }

        .experimentCard:hover .cubeTwo {
            transform: translate(8px, -4px);
        }

        .experimentCard:hover .cubeThree {
            transform: translateY(9px);
        }

        .experimentCard:hover .cubeFour {
            transform: translate(8px, 7px);
        }

        .experimentCard:hover .cubeFive {
            transform: translateX(-7px);
        }

        .coreVisual {
            position: relative;
            z-index: 2;
            width: 330px;
            height: 330px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .coreRing {
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 50%;
        }

        .ringOuter {
            width: 100%;
            height: 100%;
            animation: rotate 30s linear infinite;
        }

        .ringMiddle {
            width: 70%;
            height: 70%;
            border-style: dashed;
            animation: rotateReverse 22s linear infinite;
        }

        .ringInner {
            width: 46%;
            height: 46%;
        }

        .systemCore {
            width: 108px;
            height: 108px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 18px;
            background: linear-gradient(145deg, #17171e, #08080d);
            box-shadow:
                inset 0 0 35px rgba(255, 255, 255, 0.025),
                0 35px 60px rgba(0, 0, 0, 0.45);
            transform: rotate(45deg);
        }

        .systemCore span {
            color: #85858e;
            font-size: 1.4rem;
            font-weight: 700;
            letter-spacing: 0.06em;
            transform: rotate(-45deg);
        }

        .cardContent {
            min-height: 245px;
            padding: 30px;
        }

        .cardHeading {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
        }

        .cardHeading h3 {
            color: #d2d2d8;
            font-size: clamp(1.6rem, 2vw, 2.3rem);
            font-weight: 500;
            letter-spacing: -0.035em;
        }

        .cardArrow {
            width: 44px;
            height: 44px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 50%;
            color: #595962;
            font-size: 1.05rem;
            transition:
                background 0.3s ease,
                color 0.3s ease,
                transform 0.3s ease;
        }

        .experimentCard:hover .cardArrow {
            background: #f4f4f4;
            color: #050509;
            transform: translateY(-2px);
        }

        .cardContent > p {
            max-width: 560px;
            margin-top: 1.2rem;
            color: #6d6d76;
            font-size: 0.86rem;
            line-height: 1.8;
        }

        .tags {
            margin-top: 1.6rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .tags span {
            padding: 0.45rem 0.65rem;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 999px;
            color: #51515a;
            font-size: 0.52rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        @keyframes rotateReverse {
            from {
                transform: rotate(360deg);
            }

            to {
                transform: rotate(0deg);
            }
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 2rem;
                margin-bottom: 65px;
            }

            .experimentGrid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            h2 {
                font-size: clamp(3rem, 14vw, 4.8rem);
            }

            .visualArea {
                min-height: 410px;
            }

            .interfaceVisual {
                width: 84%;
            }

            .signalVisual,
            .coreVisual {
                width: 240px;
                height: 240px;
            }

            .spatialVisual {
                width: 250px;
                height: 250px;
                transform: scale(0.78) rotate(-8deg);
            }

            .cardContent {
                min-height: auto;
                padding: 24px 20px 28px;
            }
        }
    `,
};
