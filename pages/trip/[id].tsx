import { GetServerSideProps } from "next"
import ReactMarkdown from "react-markdown"
import prisma from '../../lib/prisma';
import Layout from "../../components/Layout"
import { TripProps } from "../../components/Trip/Trip"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const trip = await prisma.trip.findUnique({
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
    props: trip,
  };
}

const SingleTrip: React.FC<TripProps> = (props) => {
  return (
    <Layout>
      <div>
        <p>{ props.title }</p>
        <p>{ props.startDate.toString() }</p>
        <p>{ props.endDate.toString() }</p>
        <p>{ props.traveller.name }</p>
        <p>{ props.traveller.image }</p>
      </div>
    </Layout>
  )
}

export default SingleTrip
