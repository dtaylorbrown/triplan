import { GetServerSideProps } from "next"
import ReactMarkdown from "react-markdown"
import prisma from '../../lib/prisma';
import Layout from "../../components/Layout"
import { TripProps } from "../../components/Trip"

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

const Trip: React.FC<TripProps> = (props) => {
  let title = props.title

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {props?.traveller?.name || "Unknown traveller"}</p>
        <ReactMarkdown children={props.content} />
      </div>
    </Layout>
  )
}

export default Trip
