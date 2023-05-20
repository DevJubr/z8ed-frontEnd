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

const IinkDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: aliceblue;
  gap: 0.6rem;
  a {
    text-decoration: none;
    color: aliceblue;
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterTag>
      <Con>
        <FooterCon>
          <span className="left">© 2023 All rights reserved.</span>
          <IinkDiv>
            <a href="#">Linkedin</a> /
            <a href="https://www.behance.net/zayedurrahman">Behance</a> /
            <a href="https://www.facebook.com/zayed662">Facebook</a>
          </IinkDiv>
        </FooterCon>
      </Con>
    </FooterTag>
  );
};

export default Footer;
