import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.div`
 padding: 80px 60px;
 background: radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%)
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
 text-decoration: none;

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
                    <FooterLink href='#'>Facebook</FooterLink>
                    <FooterLink href='#'>Youtube</FooterLink>
                    <FooterLink href='#'>Twitter</FooterLink>
                    <FooterLink href='#'>Instagram</FooterLink>
                    </Column>
                </Row>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default FooterSection
