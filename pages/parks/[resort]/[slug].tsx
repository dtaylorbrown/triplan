import { GetServerSideProps } from "next"

import Layout from "../../../components/Layout";
import ParkItem from "../../../components/Park/Park";
import ParkEntities from "../../../utils/parkEntities";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const {resort, slug} = params;
  const matchedResort = ParkEntities.find((park) => park.slug === resort);
  let park = {};
  if(matchedResort) {
    park = matchedResort.parks.find((p) => p.slug === slug);
  }
  return {
    props: park,
  };
}

type ParkEntityProps = {
  id: string,
  name: string,
  slug: string,
}

const Park: React.FC<ParkEntityProps> = (props) => {
  return (
    <Layout>
      <h1>{props.name}</h1>
      <ParkItem entity={props.id} />
    </Layout>
  )
}

export default Park;
