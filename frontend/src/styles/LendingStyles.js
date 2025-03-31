import styled, { keyframes } from "styled-components";
import backgroundImg from "../image/background2.jpg";

const fadeInDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const Background = styled.header`
    background: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    height: 100vh;
    max-height: 100vh;

    @media only screen and (max-width: 320px) {
        width: 100%;
    }
`
export const HeaderContents = styled.div`
    text-align: center;
    padding-top: 25vh;
    color: white;
`

export const UnderLine = styled.hr`
    width: 21em;
    border-width: 2px;

    @media screen and (max-width: 380px){
        width: 13em;
    }
`
const commonSocialIcon = `
    width: 3vw;

    @media only screen and (max-width: 576px) {
        width: 6.5vw;
    }
`;

export const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const SocialLink = styled.a`
    margin: 5px;
    color: white;
    font-size: 2em;
    position: relative;

    &:hover {
        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: white;
        }
    }
`;

export const SocialLinkItems = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 1vh;
`;

export const Github = styled.img`
    ${commonSocialIcon}
    animation: ${fadeInUp} 1s ease-in-out;
`;

export const Instagram = styled.img`
    ${commonSocialIcon}
    animation: ${fadeInUp} 1.5s ease-in-out;
`;

export const Mail = styled.img`
    ${commonSocialIcon}
    animation: ${fadeInUp} 2s ease-in-out;
    cursor: pointer;
`;

export const Velog = styled.img`
    ${commonSocialIcon}
    animation: ${fadeInUp} 2.5s ease-in-out;
    cursor: pointer;
`

export const Name = styled.h1`
    font-family: 'Racing Sans One', cursive;
    font-size: 4.5em;
    animation: ${fadeInDown} 3s ease-in-out;

    @media only screen and (max-width: 576px) {
        margin-top: 3vh;
        font-size: 3.8em;
    }
`

export const Position = styled.p`
    font-size: 1.7em;
    animation: ${fadeInDown} 1s ease-in-out;

    @media only screen and (max-width: 576px) {
        font-size: 1.3em;
    }
`

export const ContactContainer = styled.div`
    margin-top: 4em;
    margin-bottom: 3em;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`

export const ContactTitle = styled.h2`
    font-weight: bold;
`

export const ContactContents = styled.p`
    margin-bottom: 10vh;
`

export const ContactButton = styled.a`
    position: relative;
    color: #697082;
    text-decoration: none;
    font-weight: 400;
    font-size: 1.2em;
    border: 2px solid #697082;
    border-radius: 4px;
    padding: 20px 65px;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        border: 2px solid #697082;
        border-radius: 50px;
        background-color: #697082;
        color: #697082;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: -14px;
        left: -12px;
        width: 132px;
        height: 25px;
    }
`;

export const Email = styled.span`
    text-transform: none;
    position: absolute;
    color: white;
    top: 20px;
    left: 12px;
    opacity: 0;
    transition: all 0s ease 0s;

    ${ContactButton}:hover & {
        opacity: 1;
        transition: all 0.25s ease-in-out 0.1s;
        font-size: 14px;
    }
`;