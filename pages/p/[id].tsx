import React from "react"
import { GetServerSideProps } from "next"
import ReactMarkdown from "react-markdown"
import prisma from '../../lib/prisma';
import Layout from "../../components/Layout"
import { PostProps } from "../../components/Post"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.trip.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      traveller: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
}

const Post: React.FC<PostProps> = (props) => {
  let title = props.title

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {props?.traveller?.name || "Unknown traveller"}</p>
        <ReactMarkdown children={props.content} />
      </div>
    </Layout>
  )
}

export default Post
