import App from "next/app";
import React, { useEffect } from "react";
import "./styles/globals.css";
import Layout from "../clientF/components/Layouts/Layout";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../clientF/redux/createStore";
import { createWrapper } from "next-redux-wrapper";
import { motion } from "framer-motion";
function MyApp({ Component, pageProps, router })  {
  // static async getServerSideProps({ Component, ctx, router }) {
  //   const pageProps = Component.getServerSideProps
  //     ? await Component.getServerSideProps(ctx)
  //     : {};

  //   // console.log(pageProps);
  //   // console.log(router);
  //   return { pageProps: pageProps };
  // }
  // render() {
    // const { Component, pageProps, router } = this.props;
    // const Component = this.props.Component;
    // const appProps = this.props.appProps

    return (
      <Provider store={store}>
        {/* <motion.body
          animate={{
            // x: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            scale: [0, 0, 0, 1, 1],
            boxShadow: "3px 3px 0 rgba(0, 0, 0, 0.2)",
            transitionEnd: {
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              // default: { duration: 2 },
            },
          }}
          transition={{ duration: 3 }}
          key={router.route}
        > */}
        <Layout>
          {/* <motion.div
            animate={{
              x: 0,
              backgroundColor: "rgba(0, 0, 0, 1)",
              boxShadow: "3px 3px 0 rgba(0, 0, 0, 0.2)",
              transitionEnd: {
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                width: "100%",
              },
            }}
            key={router.route}
          > */}
          <Component {...pageProps} />
          {/* </motion.div> */}
        </Layout>
        {/* </motion.body> */}
      </Provider>
    );
  }
// }

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);

// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// export default MyApp
