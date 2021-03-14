import "antd/dist/antd.css";

import Head from "next/head";
import PropTypes from "prop-types";
import wrapper from "../store/configureStore";

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

export default wrapper.withRedux(MyApp);
