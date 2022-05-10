import Router from "next/router";

export type TripProps = {
  id: string;
  title: string;
  traveller: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Trip: React.FC<{ trip: TripProps }> = ({ trip }) => {
  console.log(trip);
  const travellerName = trip.traveller ? trip.traveller.name : "Unknown traveller";
  return (
    // TODO this is terrible... use link plz
    <div onClick={() => Router.push("/trip/[id]", `/p/${trip.id}`)}>
      <h2>{trip.title}</h2>
      <small>By {travellerName}</small>
    </div>
  );
};

export default Trip;
