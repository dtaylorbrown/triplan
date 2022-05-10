import { Fragment } from "react";
import Head from 'next/head';

import Layout from "../components/Layout"

const WishList: React.FC = () => {
  return (
    <Fragment>
      <Head>
				<title>Wish List - Triplan</title>
      </Head>
      <Layout>
        <h1>wish wish wish</h1>
      </Layout>
    </Fragment>
  )
}

export default WishList
