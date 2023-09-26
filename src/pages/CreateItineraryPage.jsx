import React from 'react'
import ItineraryForm from '../components/Forms/ItineraryForm'
import './CreateItineraryPage.css'

function CreateItinerary() {
  return (
    <>
    <div className='create-itinerary'>
      <h3>Have an awesome itinerary?</h3>
      <p>Fill in the form below to share your experiences with our TRAVELit Community!</p>
    </div>
    
    <div className='form-container'>
      <ItineraryForm></ItineraryForm>
    </div>
    </>
  )
}

export default CreateItinerary