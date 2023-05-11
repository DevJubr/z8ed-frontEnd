"use client";
import { Con, desktop, laptop, tablet } from "../hero/styled.js";
import styled from "styled-components";

const GttSection = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SetintCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`;

const HeadingSpan = styled.span`
  font-size: 2.2rem;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  font-weight: 600;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(154, 154, 154, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;

  @media ${tablet} {
    font-size: 3rem;
  }

  @media ${laptop} {
    font-size: 3rem;
  }

  @media ${desktop} {
    font-size: 3rem;
  }
`;

const GitButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 1rem 1.6rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(154, 154, 154, 1) 100%
  );
  border-radius: 0.5rem;
`;
const GetIntouch = () => {
  return (
    <GttSection>
      <Con>
        <SetintCon>
          <HeadingSpan>Tell me about your next project</HeadingSpan>
          <GitButton>get in touch</GitButton>
        </SetintCon>
      </Con>
    </GttSection>
  );
};

export default GetIntouch;
