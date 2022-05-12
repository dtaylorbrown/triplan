import { Fragment } from "react";
import Head from 'next/head';
import NextImage from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import ParkEntities from "../utils/parkEntities";

const Home: React.FC = () => {
  const resorts = ParkEntities;
  return (
    <Fragment>
      <Head>
				<title>Triplan</title>
			</Head>
      <Layout>
        <h1 className="main-title">Plan your next trip</h1>
        <ul className="park-list">
          {resorts.map((resort) => {
            return(
              <li key={resort.slug}>
                <NextImage src={resort.icon.url} width={resort.icon.width} height={resort.icon.height}/>
                <h2>{resort.name}</h2>
                {resort.parks.map((park) => {
                  return (
                    <Link key={park.slug} href={`/parks/${resort.slug}/${park.slug}`}><a>{park.name}</a></Link>
                  )
                })}
              </li>
            );
          })}
        </ul>
      </Layout>
    </Fragment>
  )
}

export default Home
