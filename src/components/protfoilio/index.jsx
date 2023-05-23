"use client";
import { Con, HeroItem0 } from "../hero/styled.js";
import {
  PortfolioCon,
  ProfiloHeader,
  ProfiloHeaderText,
  HeadingTitle,
  HeadingSubtitle,
  Portfolios,
  PaginationBtn,
  PaginationBtnDiv,
} from "./style.js";
import SingelPortfolio from "./singelPortfolio";
import { useEffect, useState } from "react";
import { fetcher } from "@/app/api/index.js";
const ProtfolioSection = () => {
  const [Projects, setProjects] = useState([]);
  const [pageN, setpageN] = useState(1);
  async function jj(page) {
    const dta = await fetcher(
      `https://z8dport.onrender.com/api/projects?populate=*&pagination[page]=${page}&pagination[pageSize]=3`
    );
    console.log(dta);
    setProjects(dta.data);
  }
  useEffect(() => {
    jj(pageN);
  }, []);
  console.log(Projects);
  const hendelPagination = (e) => {
    const { name } = e.target;
    if (name === "prev" && pageN > 1) {
      setpageN((prev) => prev - 1);
      jj(pageN);
    }
    if (name === "next") {
      setpageN((prev) => prev + 1);
      jj(pageN);
    }
  };
  return (
    <div>
      <Con>
        <PortfolioCon>
          <ProfiloHeader>
            <ProfiloHeaderText>
              <HeadingTitle>projects</HeadingTitle>
              <HeadingSubtitle>
                portfolio of our work in last future year.
              </HeadingSubtitle>
            </ProfiloHeaderText>
          </ProfiloHeader>

          <Portfolios>
            {Projects.map((item) => {
              return <SingelPortfolio key={item.id} {...item.attributes} />;
            })}
          </Portfolios>

          <PaginationBtnDiv>
            <PaginationBtn name="prev" onClick={hendelPagination}>
              <i class="bi bi-chevron-left"></i>
            </PaginationBtn>
            <PaginationBtn name="next" onClick={hendelPagination}>
              <i class="bi bi-chevron-right"></i>
            </PaginationBtn>
          </PaginationBtnDiv>
        </PortfolioCon>
      </Con>
    </div>
  );
};

export default ProtfolioSection;
