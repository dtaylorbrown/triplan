import { Fragment } from "react";
import Head from 'next/head';
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import prisma from '../lib/prisma';
import Layout from "../components/Layout"
import Trip, { TripProps } from "../components/Trip/Trip"

import { getSession } from "next-auth/react"

// TODO - get these from session id?!
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {

  const session = await getSession(ctx);

  console.log('yoyoy', session);

  if(!session) {
    return { props: { error: "Unauthenticated" } }
  }

  // get user id from session and query based on traveller id
  const trips = await prisma.trip.findUnique({
    where: {
      id: "001"
    }
  });
  return { props: { trips } }
}

type Props = {
  trips: TripProps[]
}

const TripFeed: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <Fragment>
      <Head>
				<title>Trips - Triplan</title>
      </Head>
      <Layout>
        <h1>Upcoming Trips</h1>
        {/* <ul>
          {props.trips.map((post) => (
            <li key={post.id}>
              <Trip trip={post} />
            </li>
          ))}
        </ul> */}
      </Layout>
    </Fragment>
  )
}

export default TripFeed;
