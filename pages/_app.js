import "antd/dist/antd.css";

import Head from "next/head";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
