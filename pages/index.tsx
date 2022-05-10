import { Fragment } from "react";
import Head from 'next/head'
import Layout from "../components/Layout"

const Home: React.FC = () => {
  return (
    <Fragment>
      <Head>
				<title>Triplan</title>
			</Head>
      <Layout>
        <h1>yo yo yo</h1>
      </Layout>
    </Fragment>
  )
}

export default Home
