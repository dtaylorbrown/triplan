import Router from "next/router";

export type TripProps = {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  traveller: {
    name: string;
    email: string;
    image?: string;
  } | null;
};

const Trip: React.FC<{ trip: TripProps }> = ({ trip }) => {
  return (
    // TODO this is terrible... use link plz
    <div onClick={() => Router.push("/trip/[id]", `/trip/${trip.id}`)}>
      <h2>{trip.title}</h2>
    </div>
  );
};

export default Trip;
