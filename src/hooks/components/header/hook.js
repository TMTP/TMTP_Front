import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

function useHeaderDetail() {
  const title = "TMTP 이약저약";
  const data = useStaticQuery(graphql`
    {
      imageSharp(fluid: { src: {} }) {
        resize {
          src
          tracedSVG
          width
          height
          aspectRatio
          originalName
        }
      }
    }
  `);

  return { title, data };
}

export default useHeaderDetail;
