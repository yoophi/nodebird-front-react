import "antd/dist/antd.css";

import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";
import wrapper from "../store/configureStore";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(MyApp);
