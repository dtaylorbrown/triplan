import { Fragment } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import Head from 'next/head';
import Link from "next/link";
import prisma from '../lib/prisma';
import Layout from "../components/Layout"
import Trip, { TripProps } from "../components/Trip/Trip"

import { getSession } from "next-auth/react"

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);

  if(!session) {
    return { props: { error: "Unauthenticated" } }
  }

  const trips = await prisma.trip.findMany({
    where: {
      travellerId: session.user.id,
    }
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
        <Link href="/trip/add"><a>Add trip</a></Link>
        <ul>
          {props.trips.map((trip) => (
            <li key={trip.id}>
              <Trip trip={trip} />
            </li>
          ))}
        </ul>
      </Layout>
    </Fragment>
  )
}

export default TripFeed;
