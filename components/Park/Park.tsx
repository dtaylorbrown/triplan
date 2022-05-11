import { ParkEntityProps } from "../../pages/parks/[resort]/[slug]";

const ParkItem:React.FC<ParkEntityProps> = ({ park }) => {
  console.log(park)
  return(
    <h2>{park.name}</h2>
  )
}

export default ParkItem;
