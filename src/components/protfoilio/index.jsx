"use client";
import { Con } from "../hero/styled.js";
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
    setProjects(dta);
  }
  useEffect(() => {
    jj(pageN);
  }, [pageN]);

  const hendelPagination = (e) => {
    const name = e.target.attributes.name.nodeValue;
    console.log(name);
    if (name === "prev") {
      if (pageN > 1) {
        setpageN((prev) => {
          return prev - 1;
        });
      }
    }

    if (pageN <= Math.ceil(Projects.meta.pagination.total) / 3)
      if (name === "next") {
        setpageN((prev) => {
          return prev + 1;
        });
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
            {Projects?.data?.map((item) => {
              return <SingelPortfolio key={item.id} {...item.attributes} />;
            })}
          </Portfolios>

          <PaginationBtnDiv>
            <PaginationBtn
              className="bi bi-chevron-left"
              name="prev"
              onClick={(e) => hendelPagination(e)}
            ></PaginationBtn>
            <PaginationBtn
              name="next"
              className="bi bi-chevron-right"
              onClick={(e) => hendelPagination(e)}
            ></PaginationBtn>
          </PaginationBtnDiv>
        </PortfolioCon>
      </Con>
    </div>
  );
};

export default ProtfolioSection;
