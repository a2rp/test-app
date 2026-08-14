import { Styled } from "./styled";

const links = [
    {
        label: "Portfolio",
        href: "https://www.ashishranjan.net",
    },
    {
        label: "GitHub",
        href: "https://github.com/a2rp",
    },
    {
        label: "CodePen",
        href: "https://codepen.io/ash1198",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/theash.ashish/",
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
    },
    {
        label: "Buy Me A Coffee",
        href: "https://buymeacoffee.com/a2rp",
    },
    {
        label: "Patreon",
        href: "https://patreon.com/a2rp",
    },
];

function Footer() {
    return (
        <Styled.Wrapper>
            <div className="footerGrid" />

            <div className="footerTop">
                <div className="footerIntro">
                    <span className="footerIndex">06 / END OF SESSION</span>

                    <h2>
                        Keep building.
                        <span>Keep experimenting.</span>
                    </h2>

                    <p>
                        a2rp LAB is an ongoing collection of experiments in
                        code, interfaces, systems, AI and emerging technology.
                    </p>
                </div>

                <div className="contactPanel">
                    <span className="contactLabel">START A CONVERSATION</span>

                    <a
                        className="emailLink"
                        href="mailto:ash.ranjan09@gmail.com"
                    >
                        <span>ash.ranjan09@gmail.com</span>
                        <strong>↗</strong>
                    </a>

                    <div className="contactMeta">
                        <div>
                            <span>Status</span>

                            <strong className="available">
                                <span className="statusDot" />
                                AVAILABLE
                            </strong>
                        </div>

                        <div>
                            <span>Mode</span>
                            <strong>REMOTE</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="linksGrid">
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>{link.label}</span>
                        <span>↗</span>
                    </a>
                ))}

                <a href="mailto:ash.ranjan09@gmail.com">
                    <span>Email</span>
                    <span>↗</span>
                </a>

                <a
                    href="https://a2rp-donation-page.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span>Support</span>
                    <span>↗</span>
                </a>
            </div>

            <div className="footerBottom">
                <div className="footerBrand">
                    <strong>a2rp</strong>
                    <span>LAB</span>
                </div>

                <p>© 2026 Ashish Ranjan</p>

                <p>Build. Break. Learn. Repeat.</p>

                <a href="#home">
                    Back to top
                    <span>↑</span>
                </a>
            </div>
        </Styled.Wrapper>
    );
}

export default Footer;
