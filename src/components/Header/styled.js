import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed; top: 0; left: 0; z-index: 100; width: 100%; height: 82px;
        padding: 0 4vw; display: grid; grid-template-columns: 1fr auto auto; align-items: center;
        border-bottom: 1px solid rgba(255,255,255,.08); background: rgba(5,5,9,.86); backdrop-filter: blur(22px);
        .brand { justify-self: start; display: flex; align-items: center; gap: .65rem; }
        .brandLogo { width: 40px; height: 40px; object-fit: contain; border: 1px solid rgba(255,255,255,.14); border-radius: 10px; background: #111118; }
        .brandLabel { padding: .35rem .5rem; border: 1px solid rgba(255,255,255,.14); border-radius: 4px; color: #b8b8c1; font-size: .58rem; font-weight: 700; letter-spacing: .18em; }
        .nav { display: flex; align-items: center; gap: 2.4rem; }
        .nav a { position: relative; color: #77777f; font-size: .68rem; text-transform: uppercase; letter-spacing: .16em; transition: color .25s ease, text-shadow .25s ease; }
        .nav a::after { content: ""; position: absolute; left: 0; bottom: -9px; width: 0; height: 1px; background: #f4f4f4; transition: width .25s ease; }
        .nav a:hover, .nav a:focus-visible { color: #f4f4f4; text-shadow: 0 0 12px rgba(255,255,255,.3); }
        .nav a:hover::after, .nav a:focus-visible::after { width: 100%; }
        .githubLink { justify-self: end; display: flex; align-items: center; gap: .65rem; padding: .78rem 1rem; border: 1px solid rgba(255,255,255,.14); border-radius: 999px; color: #b5b5bb; font-size: .66rem; text-transform: uppercase; letter-spacing: .13em; transition: background .25s ease, color .25s ease, border-color .25s ease, box-shadow .25s ease; }
        .githubLink:hover, .githubLink:focus-visible { background: #f4f4f4; color: #050509; border-color: #f4f4f4; box-shadow: 0 0 0 4px rgba(255,255,255,.1); }
        .githubIcon { font-size: 1rem; } .externalIcon { font-size: .9rem; }
        .menuButton { display: none; }
        @media (max-width: 900px) {
            grid-template-columns: 1fr auto auto;
            .nav { display: none; position: absolute; top: 72px; right: 20px; padding: 12px; flex-direction: column; align-items: stretch; gap: 8px; border: 1px solid rgba(255,255,255,.14); border-radius: 12px; background: rgba(9,9,15,.97); box-shadow: 0 16px 40px rgba(0,0,0,.4); }
            .navOpen { display: flex; } .nav a { min-width: 145px; padding: 10px; }
            .menuButton { display: grid; place-items: center; width: 38px; height: 38px; margin-right: 10px; border: 1px solid rgba(255,255,255,.14); border-radius: 9px; color: #d7d7dc; cursor: pointer; }
        }
        @media (max-width: 560px) {
            height: 70px; padding: 0 20px; .brandLogo { width: 36px; height: 36px; }
            .githubLink { padding: .68rem .8rem; font-size: 0; } .githubLink .externalIcon { display: none; } .nav { top: 62px; }
        }
    `,
};