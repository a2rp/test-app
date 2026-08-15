import {
    FiArrowUp,
    FiCodepen,
    FiCoffee,
    FiExternalLink,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiYoutube,
} from "react-icons/fi";

import { Styled } from "./styled";

const socialLinks = [
    {
        label: "Portfolio",
        href: "https://www.ashishranjan.net",
        icon: FiGlobe,
    },
    {
        label: "GitHub",
        href: "https://github.com/a2rp",
        icon: FiGithub,
    },
    {
        label: "CodePen",
        href: "https://codepen.io/ash1198",
        icon: FiCodepen,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
        icon: FiLinkedin,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/theash.ashish/",
        icon: FiFacebook,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        icon: FiYoutube,
    },
];

const supportLinks = [
    {
        label: "Support",
        href: "https://a2rp-donation-page.netlify.app/",
        icon: FiHeart,
    },
    {
        label: "Buy Me A Coffee",
        href: "https://buymeacoffee.com/a2rp",
        icon: FiCoffee,
    },
    {
        label: "Patreon",
        href: "https://patreon.com/a2rp",
        icon: FiExternalLink,
    },
    {
        label: "Email",
        href: "mailto:ash.ranjan09@gmail.com",
        icon: FiMail,
    },
];

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <div className="footerMain">
                <div className="brandColumn">
                    <a className="brand" href="#home">
                        <span className="brandMark">a2rp</span>

                        <span className="brandName">TEST APP</span>
                    </a>

                    <p>
                        An experimental frontend playground for creative
                        interfaces, interaction ideas and modern web concepts.
                    </p>

                    <a
                        className="repositoryLink"
                        href="https://github.com/a2rp/test-app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiGithub />
                        <span>View Repository</span>
                        <FiExternalLink />
                    </a>
                </div>

                <div className="linksColumn">
                    <div className="linkGroup">
                        <span className="groupLabel">Navigate</span>

                        <a href="#experiments">Experiments</a>

                        <a href="#stack">Stack</a>

                        <a href="#process">Process</a>

                        <a href="#about">About</a>
                    </div>

                    <div className="linkGroup">
                        <span className="groupLabel">Connect</span>

                        {socialLinks.map((link) => {
                            const Icon = link.icon;

                            return (
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={link.label}
                                >
                                    <Icon />
                                    <span>{link.label}</span>
                                </a>
                            );
                        })}
                    </div>

                    <div className="linkGroup">
                        <span className="groupLabel">Support</span>

                        {supportLinks.map((link) => {
                            const Icon = link.icon;

                            return (
                                <a
                                    href={link.href}
                                    target={
                                        link.href.startsWith("mailto:")
                                            ? undefined
                                            : "_blank"
                                    }
                                    rel={
                                        link.href.startsWith("mailto:")
                                            ? undefined
                                            : "noreferrer"
                                    }
                                    key={link.label}
                                >
                                    <Icon />
                                    <span>{link.label}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="footerBottom">
                <div className="copyright">
                    <span>© {currentYear}</span>

                    <span className="separator">/</span>

                    <span>
                        Developed by{" "}
                        <a
                            href="https://www.ashishranjan.net"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ashish Ranjan
                        </a>
                    </span>
                </div>

                <div className="status">
                    <span className="statusDot" />
                    <span>System Online</span>
                </div>

                <a className="backToTop" href="#home" aria-label="Back to top">
                    <span>Back to top</span>
                    <FiArrowUp />
                </a>
            </div>
        </Styled.Wrapper>
    );
}

export default Footer;
