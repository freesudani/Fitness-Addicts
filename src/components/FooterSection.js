import React from 'react';
import styled from 'styled-components';
import { AiFillInstagram, AiFillTwitterSquare, AiFillYoutube, AiFillFacebook } from "react-icons/ai";

const FooterContainer = styled.div`
 padding: 80px 60px;
 background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.9) 100%);
`;

const FooterWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-container: center;
 max-width: 1000px;
 margin: 0 auto;
`;

const Column = styled.div`
 display: flex;
 flex-direction: column;
 text-align: left;
 margin-left: 60px;
`;

const Row = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
 grid-gap: 20px;
`;

const FooterLink = styled.div`
 color: #fff;
 margin-bottom: 28px;
 font-size: 18px;
 cursor: pointer;
 text-decoration: none;
 margin-left: 5px;

 &:hover {
    color: #000d1a;
    transition: 200ms ease-in;
 }
`;

const FooterTitle = styled.div`
 font-size: 24px;
 color: #fff;
 margin-bottom: 40px;
 font-weight: bold;
`;

const SocialDiv = styled.div`
 display: flex;
`;



const FooterSection = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Row>
                    <Column>
                    <FooterTitle>About Us</FooterTitle>
                    <FooterLink href='#'>Story</FooterLink>
                    <FooterLink href='#'>Clients</FooterLink>
                    <FooterLink href='#'>Testimonials</FooterLink>
                    </Column>
                    <Column>
                    <FooterTitle>Programs</FooterTitle>
                    <FooterLink href='#'>Marketing</FooterLink>
                    <FooterLink href='#'>Consulting</FooterLink>
                    <FooterLink href='#'>Development</FooterLink>
                    <FooterLink href='#'>Trainers</FooterLink>
                    </Column>
                    <Column>
                    <FooterTitle>Contact Us</FooterTitle>
                    <FooterLink href='#'>United States</FooterLink>
                    <FooterLink href='#'>United Arab Emirates</FooterLink>
                    <FooterLink href='#'>Australia</FooterLink>
                    <FooterLink href='#'>Thailand</FooterLink>
                    </Column>
                    <Column>
                    <FooterTitle>Social Media</FooterTitle>
                    <SocialDiv>
                    <AiFillFacebook/><FooterLink href='#'>Facebook</FooterLink>
                    </SocialDiv>
                    <SocialDiv>
                    <AiFillYoutube/><FooterLink href='#'>Youtube</FooterLink>
                    </SocialDiv>
                    <SocialDiv>
                    <AiFillTwitterSquare/><FooterLink href='#'>Twitter</FooterLink>
                    </SocialDiv>
                    <SocialDiv>
                    <AiFillInstagram/><FooterLink href='#'>Instagram</FooterLink>
                    </SocialDiv>
                    </Column>
                </Row>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default FooterSection
