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

const GAP = gql`
  query Projects($pagination: PaginationArg) {
    projects(pagination: $pagination) {
      meta {
        pagination {
          total
          pageSize
          pageCount
          page
        }
      }
      data {
        id
        attributes {
          body
          button
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
          tiitle
        }
      }
    }
  }
`;

import SingelPortfolio from "./singelPortfolio";
import { gql } from "@apollo/client";
import { getClient } from "@/utils/index.js";
import { useEffect, useState } from "react";
const ProtfolioSection = () => {
  const [Data, setData] = useState({});
  const [count, setcount] = useState(1);

  useEffect(() => {
    const client = getClient();
    const data = client.subscribe({
      query: GAP,
      variables: {
        pagination: {
          page: count,
          pageSize: 3,
        },
      },
    });
    const sub = data.subscribe({
      next: (result) => setData({ ...result?.data.projects }),
      error: (e) => console.log(e),
    });

    return () => sub.unsubscribe();
  }, [count]);
  const hendelPagination = (e) => {
    const { name } = e.target;
    if (name === "prev") {
      if (count > 1) {
        setcount((prev) => prev - 1);
      }
    }
    if (name === "next") {
      if (count <= Math.ceil(Data?.data?.length / 3)) {
        setcount((prev) => prev + 1);
      }
    }
  };
  return (
    <div>
      <Con>
        <PortfolioCon>
          <ProfiloHeader>
            <ProfiloHeaderText>
              <HeadingTitle>portfolio</HeadingTitle>
              <HeadingSubtitle>
                portfolio of our work in last future year.
              </HeadingSubtitle>
            </ProfiloHeaderText>
          </ProfiloHeader>

          <Portfolios>
            {Data?.data?.map((item) => {
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
