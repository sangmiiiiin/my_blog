import React from "react";
import { Background, Email, Github, HeaderContents, Instagram, Mail, Name, Position, SocialLink, SocialLinkItems, UnderLine, Velog } from "../styles/LendingStyles";

import gitImg from "../image/github.svg";
import InstaImg from "../image/instagram.svg";
import MailImg from "../image/envelope-fill.svg";
import VelogImg from "../image/velogImg.png";
import GoShopButton from "../components/GoShopButton";

const Lending = () => {
    const email = "kwk680037@gmail.com";
    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <Background>
            <HeaderContents>
                <Name>Sangmin's mall</Name>
                <Position>climbing clothes</Position>

                <UnderLine />

                <SocialLinkItems>
                    <SocialLink href="https://github.com/sangmiiiiin">
                        <Github src={gitImg} />
                    </SocialLink>

                    <SocialLink href="https://www.instagram.com/sangmiiiiiin/">
                        <Instagram src={InstaImg} />
                    </SocialLink>

                    <SocialLink onClick={handleEmailClick}>
                        <Mail src={MailImg} />
                        <Email>{email}</Email>
                    </SocialLink>

                    <SocialLink href="https://velog.io/@sangmiiiiin">
                        <Velog src={VelogImg} />
                    </SocialLink>
                </SocialLinkItems>
                <GoShopButton />
            </HeaderContents>
        </Background>
    );
};

export default Lending;