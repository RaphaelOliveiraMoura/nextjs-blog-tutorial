import { FC } from "react";
import Head from "next/head";

import Layout from "../../components/layout";
import Date from "../../components/date";

import utilStyles from "../../styles/utils.module.css";

import { getAllPostIds, getPostData } from "../../lib/posts";

export function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

interface Props {
  postData: {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  };
}

const Post: FC<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;
