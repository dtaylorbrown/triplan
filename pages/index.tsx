import React from "react"
import { GetServerSideProps } from "next"
import prisma from '../lib/prisma';
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.trip.findMany({
    include: {
      traveller: {
        select: { name: true },
      },
    },
  });
  return { props: { feed } }
}

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Upcoming Trips</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  )
}

export default Blog
