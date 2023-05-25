"use client";
import Image from "next/image";
import {
  ActiveIcon,
  Button,
  Con,
  H1,
  Hero,
  HeroItem0,
  HeroItem1,
  HeroItem2,
  HeroItem3,
  P,
  SectionHeroCon,
} from "./styled.js";
const HeroSection = () => {
  return (
    <Hero>
      <Con>
        <SectionHeroCon>
          <HeroItem0>
            <ActiveIcon></ActiveIcon>
            <span className="active_text">available now</span>
          </HeroItem0>
          <HeroItem1>
            <Image
              width={100}
              height={100}
              src={
                "https://res.cloudinary.com/dcdvmj0q4/image/upload/v1683800058/345457272_633572668198003_5035405670325297447_n_b6gs9k.jpg"
              }
              alt="jrs"
            />
          </HeroItem1>
          <HeroItem2>
            <H1>Building Your Presence with Design</H1>
          </HeroItem2>
          <HeroItem3>
            <P>
              experience in logo, stationery, and UX/UI design utilizing Adobe
              Illustrator, Photoshop, and Figma. Committed to realizing
              customers' objectives via exceptional results and attention to
              detail. Let's work together to make something spectacular
            </P>
          </HeroItem3>
          <div className="hero_item_4">
            <Button target="_blank" href="https://www.facebook.com/zayed662">
              let's talk
            </Button>
          </div>
        </SectionHeroCon>
      </Con>
    </Hero>
  );
};

export default HeroSection;
