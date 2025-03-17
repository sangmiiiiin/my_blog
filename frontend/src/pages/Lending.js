import React from "react";
import { Background, Email, Github, HeaderContents, Instagram, Mail, Name, Position, SocialLink, SocialLinkItems, UnderLine, Velog } from "../components/LendingComponents";
import Button from '@mui/material/Button';

import gitImg from "../image/github.svg";
import InstaImg from "../image/instagram.svg";
import MailImg from "../image/envelope-fill.svg";
import VelogImg from "../image/velogImg.png";

const Lending = () => {
    const email = "kwk680037@gmail.com";
    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <Background>
            <HeaderContents>
                <Name>Sangmin's PortPolio</Name>
                <Position>FrontEnd Developer</Position>

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
                <Button variant="contained" href="/main">Go Shopping!</Button>
            </HeaderContents>
        </Background>
    );
};

export default Lending;