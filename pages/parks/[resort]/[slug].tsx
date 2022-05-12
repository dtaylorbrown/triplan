import { GetStaticPaths, GetStaticProps } from "next";

import Layout from "../../../components/Layout";
import ParkItem from "../../../components/Park/Park";
import ParkEntities from "../../../utils/parkEntities";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let park = {};

  const {resort, slug} = params;
  const matchedResort = ParkEntities.find((park) => park.slug === resort);
  
  if(matchedResort) {
    const parkItem = matchedResort.parks.find((p) => p.slug === slug);
    const res = await fetch(`https://api.themeparks.wiki/v1/entity/${parkItem.id}/live`);
    // test error
    // const res = await fetch(`https://api.themeparks.wiki/v1/entity/1231231323/live`);
    park = await res.json();
  }
    
  if (!park) {
    return {
      notFound: true,
    }
  }

  return {
    props: { park }
  }
}

interface ParkProperties {
  [key: string]: string;
}

export type ParkEntityProps = {
  park: ParkProperties
}

const Park: React.FC<ParkEntityProps> = ({ park }) => {
  return (
    <Layout>
      {park.error ?
        <h1>{park.error}</h1> :
        <ParkItem park={park} />
      }
    </Layout>
  )
}

export default Park;