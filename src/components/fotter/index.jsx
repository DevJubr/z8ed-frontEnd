"use client";
import styled from "styled-components";
import { Con, desktop, laptop, tablet } from "../hero/styled";
const FooterCon = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 2rem 0;
`;

const FooterTag = styled.footer`
  border-top: 0.1px solid #dddddd21;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 0.5rem;
  font-weight: 300;
  @media ${tablet} {
    font-size: 0.8rem;
  }

  @media ${laptop} {
    font-size: 0.8rem;
  }

  @media ${desktop} {
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterTag>
      <Con>
        <FooterCon>
          <span className="left">© 2023 All rights reserved.</span>
          <p className="link">Linkedin / Dribbble / Instagram</p>
        </FooterCon>
      </Con>
    </FooterTag>
  );
};

export default Footer;
