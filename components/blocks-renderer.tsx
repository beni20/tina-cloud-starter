import type { Page, PageBlocks } from "../tina/__generated__/types";
import { Content } from "./blocks/content";
import { Car } from "./blocks/car";
import { Car1 } from "./blocks/car1";
import { Features } from "./blocks/features";
import { Hero } from "./blocks/hero";
import { Testimonial } from "./blocks/testimonial";
import { tinaField } from "tinacms/dist/react";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksFeatures":
      return <Features data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
	case "PageBlocksCar":
      return <Car data={block} />;
	case "PageBlocksCar1":
      return <Car1 data={block} />;  
    default:
      return null;
  }
};
