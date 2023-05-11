import styled from "styled-components";
import { desktop, laptop, tablet } from "../hero/styled.js";

const Portfolios = styled.div`
  display: flex;
  grid-gap: 4rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  @media ${tablet} {
    flex-wrap: wrap;
  }

  @media ${laptop} {
    flex-wrap: wrap;
  }
  @media ${desktop} {
    flex-wrap: wrap;
  }
`;

const PortfolioCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.4rem;
`;

const ProfiloHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`;

const ProfiloHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 70%;
  @media ${tablet} {
    width: 100%;
  }

  @media ${laptop} {
    width: 100%;
  }

  @media ${desktop} {
    width: 100%;
  }
`;

const HeadingTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 0.8px;
  text-align: center;
`;

const HeadingSubtitle = styled.p`
  text-transform: capitalize;
  text-align: center;
  font-size: 0.8rem;
  letter-spacing: 1px;
  @media ${tablet} {
    font-size: 1rem;
  }

  @media ${laptop} {
    font-size: 1rem;
  }

  @media ${desktop} {
    font-size: 1rem;
  }
`;

const Portfolio = styled.div`
  background: #111118;
  padding: 1rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.4rem;

  @media ${tablet} {
    width: 380px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1.6rem;
  }

  @media ${laptop} {
    width: 380px;
    heigh: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1.6rem;
  }

  @media ${desktop} {
    width: 380px;
    heigh: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1.6rem;
  }
`;

const PortfolioImg = styled.div`
  width: 100%;
  height: 220px;
  img {
    border-radius: 0.8rem;
    width: 100% !important;
    height: 100% !important;
    object-fit: "cover";
  }
`;

const PortfolioTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.6rem;
`;

const ProjectName = styled.span`
  font-size: 1.5rem;
  text-transform: capitalize;
  letter-spacing: 1px;
`;

const ProjectSubtitle = styled.p`
  font-size: 0.77rem;
  text-transform: capitalize;
  letter-spacing: 1px;
`;

const PortfolioButton = styled.button`
  border: none;
  outline: none;
  background: #3f5023;
  color: #d2d2d2;
  font-size: 0.8rem;
  text-transform: capitalize;
  padding: 0.8rem 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  gap: 0.4rem;
  letter-spacing: 1px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: #5a762e;
  }
`;

const PaginationBtn = styled.button`
  border: none;
  outline: none;
  background: #3f5023;
  width: 60px;
  height: 60px;
  color: aliceblue;
  border-radius: 50%;
  cursor: pointer;
  & i {
    font-size: 1.6rem;
    width: 100%;
    height: 100%;
  }
`;

const PaginationBtnDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export {
  HeadingSubtitle,
  HeadingTitle,
  Portfolio,
  PortfolioButton,
  PortfolioCon,
  PortfolioImg,
  PortfolioTextContent,
  Portfolios,
  ProfiloHeader,
  ProfiloHeaderText,
  ProjectName,
  ProjectSubtitle,
  desktop,
  laptop,
  tablet,
  PaginationBtn,
  PaginationBtnDiv,
};
