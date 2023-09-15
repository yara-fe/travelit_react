import { useState, useEffect } from "react"

import getItinerary from "../api/get-itinerary"

export default function useItinerary(itineraryID) {

    //Use the useState hook to create state variable called itinerary and a function to update it called setItinerary. Initialise variable with empty array.
    const [itinerary, setItinerary] = useState([]);

    //Create state variable isLoading and errro to keep track of loading state and errors that might occur
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    //Use the useEffect hook to fetch all itinerary from API and update the sate variables accordingly.
    useEffect(() => {
        getItinerary(itineraryID)
            .then((itinerary) => {
                setItinerary(itinerary)
                setIsLoading(false)
            })
            .catch((error) => {
                setError(error)
                setIsLoading(false)
            })
    },[itineraryID])

    //return state varialbe and re-render components
    return {itinerary, isLoading, error}

}