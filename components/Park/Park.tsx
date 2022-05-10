type ParkProps = {
  entity: string
}

const ParkItem:React.FC<ParkProps> = ({ entity }) => {
  return(
    <h2>Park item...{entity}</h2>
  )
}

export default ParkItem;
