import './Forms.css'
import { useState } from "react"

import postItinerary from "../../api/itinerariesAPI"

function ItineraryForm() {

  //State to manage success message when submitting form
  const [ successMessage, setSuccessMessage ] = useState("")

  //State to manage input values
  const [ itinerary, setItinerary ] = useState({
    title: '',
    description:'',
    audience: '',
    cost:'',
    travel_date:'',
    location:'',
    itinerary_notes:'',
    image:''
  })

  //Event handler to update state for all fields
  const handleChange = (event) => {
    const { name, value, type } = event.target
    setItinerary((prevItinerary) => ({
        ...prevItinerary,
        [name]: type === "select-one" ? value: value,
    }))

    console.log(itinerary)
  }

  //Event handler for submiting the form
  const handleSubmit = async (event) => {
    event.preventDefault() 
    console.log("submit")
    try {
        const response = await postItinerary({
            ...itinerary,
            date_created: new Date().toISOString()
        })
    
    console.log('Itinerary created successfully', response)
    setSuccessMessage("Itinerary created!")
    setItinerary(itinerary)

    //clear success message after 5 secs
    setTimeout(() => {setSuccessMessage("")}, 5000)
    }

    catch (error) {
        console.error("Error submitting itinerary", error.message)
    }
}

  //Form Layout
  return (
    <div className="form-wrapper">
      <form className='itinerary-form'>
        <div className="form-item">
          <label className="form-label">Title</label>
          <input className="form-input"
          type="text" 
          placeholder="Enter a title for your itinerary"
          name="title"
          value={itinerary.title}
          onChange={handleChange} />
        </div>
        <div className="form-item">
          <label className="form-label">Description</label>
          <textarea className="form-input"
          rows="3" 
          placeholder="Briefly describe what the itinerary is about. For eg. Solo trip around Japan!"
          name="description"
          value={itinerary.description}
          onChange={handleChange} />
        </div>
        <div className="form-item">
          <label className="form-label">Location</label>
          <input className="form-input"
          type="text" 
          placeholder="Enter a title for your itinerary"
          name="location"
          value={itinerary.location}
          onChange={handleChange} />
        </div>
        <div className="form-item">
          <label className="form-label">Pefect for</label>
          <select className="form-input"
          size='4'
          name="audience" 
          value={itinerary.audience}
          onChange={handleChange} >
            <option value="Family">Family</option>
            <option value="Solo">Solo</option>
            <option value="Couple">Couple</option>
            <option value="Friends">Friends</option>
          </select>
        </div>
        <div className="form-item">
          <label className="form-label">Cost</label>
          <select className="form-input"
          size='3'
          name="cost" 
          value={itinerary.cost}
          onChange={handleChange} >
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>
        </div>
        <div className="form-item">
          <label className="form-label">Travel Period</label>
          <input className="form-input"
          type="text" 
          placeholder="Enter month or month range for travelling"
          name="travel_date"
          value={itinerary.travel_date}
          onChange={handleChange} />
        </div>
        <div className="form-item">
          <label className="form-label">Itinerary Details</label>
          <textarea className="form-input"
          rows="20"
          placeholder="Tell us about the itinerary!"
          name="itinerary_notes"
          value={itinerary.itinerary_notes}
          onChange={handleChange} />
        </div>
        <div className="form-item">
          <label className="form-label">Image URL</label>
          <input className="form-input"
          type="text" 
          placeholder="Enter a image url"
          name="image"
          value={itinerary.image}
          onChange={handleChange} />
        </div>
        <button onClick={handleSubmit} className="submit-btn">Submit</button>
      </form>
      {successMessage && (
        <div className="success-msg">{successMessage}</div>
      )}
    </div>
  )
}

export default ItineraryForm