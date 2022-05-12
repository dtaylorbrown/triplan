import Layout from "../../components/Layout"

const NewTrip: React.FC = () => {

  const addTrip = (ev) => {
    ev.preventDefault();
    console.log('submit...')
  }

  return (
    <Layout>
      <h2>Add an upcoming trip</h2>
      <form className="trip-form" onSubmit={(ev) => addTrip(ev)}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title"/>
        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" name="startDate"/>
        <label htmlFor="endDate">End Date</label>
        <input type="date" name="endDate"/>
        <input type="submit" value="go" />
      </form>
    </Layout>
  )
}

export default NewTrip
