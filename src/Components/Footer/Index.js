import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from "./FooterElements.js"

export default function Index() {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>

                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Youtuber" rel="noopener noreferrer">
                                <FaYoutube/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                                <FaTwitter/>
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}
