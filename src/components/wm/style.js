import styled from "styled-components";

const WhyMeConntent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0;

  & > .item {
    width: 434px;
    height: 200px;
    background: #1c1c1c;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 2rem;
    text-align: center;
    color: aliceblue;

    & span.headline {
      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: 500;
    }

    & .img i {
      font-size: 1.8rem;
    }
  }

  & > .item:nth-child(even) {
    background-color: #28664a;

    & .texts {
      background: none !important;
    }

    & p.subtitile {
      background: none !important;
    }
  }
  @media (max-width: 1550px) {
    grid-template-columns: repeat(3, 1fr);
    & > .item {
      width: 334px;
      height: 200px;
    }
  }
  @media (max-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
    & > .item {
      width: 300px;
      height: 200px;
    }
  }
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    & > .item {
      width: 340px;
      height: 200px;
    }
  }

  @media (max-width: 814px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    & > .item {
      width: 320px;
      height: 200px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    & > .item {
      width: 300px;
      height: 200px;
    }
  }
  @media (max-width: 688px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    grid-gap: 2;
    & > .item {
      width: 90%;
      height: 200px;
      border-radius: 1rem;
    }
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { WhyMeConntent };
