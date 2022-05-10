import { Fragment } from "react";
import Head from 'next/head';
import { GetServerSideProps } from "next"
import prisma from '../lib/prisma';
import Layout from "../components/Layout"
import Trip, { TripProps } from "../components/Trip"

// TODO - get these from session id?!
export const getServerSideProps: GetServerSideProps = async () => {
  const trips = await prisma.trip.findMany({
    include: {
      traveller: {
        select: { name: true },
      },
    },
  });
  return { props: { trips } }
}

type Props = {
  trips: TripProps[]
}

const TripFeed: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Head>
				<title>Trips - Triplan</title>
      </Head>
      <Layout>
        <h1>Upcoming Trips</h1>
        <ul>
          {props.trips.map((post) => (
            <li key={post.id}>
              <Trip trip={post} />
            </li>
          ))}
        </ul>
      </Layout>
    </Fragment>
  )
}

export default TripFeed;
