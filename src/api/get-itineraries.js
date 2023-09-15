async function getItineraries() {
    //URL for GET request for all itineraries
    const url = `${import.meta.env.VITE_API_URL}/itinerary` ;

    const response = await fetch(url, {method: "GET"})

    //check if GET request is successful
    if (!response.ok) {

        //throw error if not successful
        const fallbackError = `Error fetching itinerary`

        const data =awaitresponse.json().catch(() =>{
            throw new Error (fallbackError)
    })

    const errorMessage = data?.detail?? fallbackError
    thrownewError(errorMessage)
    }

    return await response.json()
}

export default getItineraries
