import { useState, useEffect } from "react"

import { getItineraries } from "../api/itinerariesAPI";

export default function useItineraries() {

    //Use the useState hook to create state variable called itineraries and a function to update it called setItineraries. Initialise variable with empty array.
    const [itineraries, setItineraries] = useState([]);

    //Create state variable isLoading and errro to keep track of loading state and errors that might occur
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    //Use the useEffect hook to fetch all itineraries from API and update the sate variables accordingly.
    useEffect(() => {
        getItineraries()
            .then((itineraries) => {
                setItineraries(itineraries)
                setIsLoading(false)
            })
            .catch((error) => {
                setError(error)
                setIsLoading(false)
            })
    },[])

    //return state varialbe and re-render components
    return {itineraries, isLoading, error}

}