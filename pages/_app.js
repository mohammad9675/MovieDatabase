import "@/styles/globals.css";
import Layout from "./components/Layout";
import { SWRConfig } from "swr";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <SWRConfig
          value={{
            fetcher: (...args) => fetch(...args).then((res) => res.json()),
          }}
        >
          <Component {...pageProps} />;
        </SWRConfig>
      </Layout>
    </>
  );
}
