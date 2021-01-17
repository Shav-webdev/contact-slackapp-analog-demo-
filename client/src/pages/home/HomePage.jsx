import React from "react";
import { withNamespaces } from "react-i18next";
import Page from "../layout/Page";
import Header from "../layout/header/Header";
import Main from "../layout/main/Main";
import Footer from "../layout/footer/Footer";
import ButtonsSection from "../home/components/ButtonsSection"
import classes from "./HomePage.module.scss"

const HomePage = ({ t }) => {


  return (
    <Page>
      <Header />
      <Main>
        <div className={classes["homepage"]}>
          <ButtonsSection/>
        </div>

      </Main>
      <Footer />
    </Page>
  );
};

export default React.memo(withNamespaces()(HomePage));
