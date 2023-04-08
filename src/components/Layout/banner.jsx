import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const Banner = (banner) => {
  return (
    <div className={`sm:${banner.hidden}`}>
      <StaticImage src="../../../static/banner.png" alt="Banner" />
    </div>
  );
};

export default Banner;
