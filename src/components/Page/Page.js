import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PageHeader from "./PageHeader";
import Content from "../Main/Content";

const Page = props => {
  const { page } = props;
  const htmlAst = (page || {}).htmlAst;

  return (
    <Article>
      <PageHeader {...page.frontmatter} />
      <Content htmlAst={htmlAst} />
    </Article>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired
};

export default Page;
