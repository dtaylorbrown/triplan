import { Fragment } from "react";
import { ParkEntityProps } from "../../pages/parks/[resort]/[slug]";

const ParkItem:React.FC<ParkEntityProps> = ({ park }) => {
  return(
    <Fragment>
      <h2>{park.name}</h2>
      {JSON.stringify(park)}
    </Fragment>
  )
}

export default ParkItem;
