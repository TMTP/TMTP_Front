import * as React from "react";
import useSeoDetail from "../../hooks/components/seo/hook";

const FindBox = () => {
  const { data } = useSeoDetail();
  return (
    <div>
      <p>{data.site.siteMetadata.title}</p>
    </div>
  );
};

export default FindBox;
