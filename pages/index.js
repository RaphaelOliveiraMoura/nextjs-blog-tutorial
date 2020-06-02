import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software developer</p>
        <p>
          Js Enthusiast and improving development code skills with contruibuting
          in open source projects
        </p>
      </section>
    </Layout>
  );
}
