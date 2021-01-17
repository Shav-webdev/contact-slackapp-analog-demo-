import React from "react";

const Article = ({ text }) => {
  return <article>{text}</article>;
};

export default React.memo(Article);
