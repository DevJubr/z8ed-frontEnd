import styled, { keyframes } from "styled-components";

export const tablet = `(min-width: 768px)`;
export const laptop = `(min-width: 992px)`;
export const desktop = `(min-width: 1200px)`;

const Con = styled.div`
  max-width: 1300px;
  width: 90%;
  margin: 0 auto;

  @media ${tablet} {
    width: 80%;
  }

  @media ${laptop} {
    width: 75%;
  }

  @media ${desktop} {
    width: 70%;
  }
`;

const SectionHeroCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  gap: 2rem;
`;
const Hero = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HeroItem0 = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  gap: 0.6rem;
`;
const Popup = keyframes`
0%{
opacity: 1;
}
50%{
  opacity: .2;
}
100%{
  opacity: 1;
}
`;
const ActiveIcon = styled.div`
  width: 10px;
  height: 10px;
  background: #6ccca5;
  opacity: 1;
  border-radius: 50%;
  transition: opacity 0.5s;
  animation: ${Popup} 1s infinite ease-in-out;
`;

const HeroItem1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 50%;
  }
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  width: 98%;
  letter-spacing: 1px;

  @media ${tablet} {
    font-size: 2.5rem;
    letter-spacing: 1px;
    width: 70%;
  }

  @media ${laptop} {
    font-size: 3rem;
    letter-spacing: 1.5px;
    width: 70%;
  }

  @media ${desktop} {
    font-size: 4rem;
    letter-spacing: 1.8px;
    width: 70%;
  }
`;
const HeroItem3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeroItem2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const P = styled.p`
  text-transform: capitalize;
  text-align: center;
  line-height: 1.9;
  font-size: 0.7rem;
  letter-spacing: 1px;
  @media ${tablet} {
    font-size: 1rem;
    width: 90%;
  }

  @media ${laptop} {
    font-size: 1rem;
    width: 70%;
  }

  @media ${desktop} {
    font-size: 1rem;
    width: 60%;
  }
`;

const Button = styled.button`
  background: #3f5023;
  outline: none;
  border: none;
  text-transform: capitalize;
  letter-spacing: 1px;
  padding: 1rem 2rem;
  color: #d2d2d2;
  font-size: 0.8rem;
  border-radius: 2rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #5a762e;
  }

  @media ${tablet} {
    font-size: 1.2rem;
  }

  @media ${laptop} {
    font-size: 1.2rem;
  }

  @media ${desktop} {
    font-size: 1.2rem;
  }
`;

export {
  Con,
  SectionHeroCon,
  HeroItem3,
  HeroItem0,
  ActiveIcon,
  HeroItem1,
  H1,
  P,
  Button,
  HeroItem2,
  Hero,
};
