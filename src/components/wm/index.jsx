"use client";

import { items } from "@/utils";
import { Con, HeroItem0 } from "../hero/styled";
import {
  HeadingSubtitle,
  HeadingTitle,
  ProfiloHeader,
  ProfiloHeaderText,
} from "../protfoilio/style";
import Item from "./item";
import { WhyMeConntent } from "./style";

const WhyMee = () => {
  return (
    <section>
      <Con>
        <div className="whyMee__con">
          <ProfiloHeader>
            <HeroItem0>
              <span className="active_text">portfolio</span>
            </HeroItem0>
            <ProfiloHeaderText>
              <HeadingTitle>
                portfolio of our work in last future year.
              </HeadingTitle>
              <HeadingSubtitle>
                Lorem adipisicing elit. Adipisci maiores omnis fugiat laudantium
                hic, ea blanditiis temporibus dolorum et iusto illum aut quos
                autem vero fuga, quaerat quasi eveniet odio?
              </HeadingSubtitle>
            </ProfiloHeaderText>
          </ProfiloHeader>

          <WhyMeConntent>
            {items.map((item) => (
              <Item {...item} />
            ))}
          </WhyMeConntent>
        </div>
      </Con>
    </section>
  );
};

export default WhyMee;
