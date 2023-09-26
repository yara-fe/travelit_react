// GET all itineraries
export async function getItineraries() {
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


// GET single itinerary
export async function getItinerary(itineraryID) {
    //URL for GET request for all itineraries
    const url = `${import.meta.env.VITE_API_URL}/itinerary/${itineraryID}` ;

    const response = await fetch(url, {method: "GET"})

    //check if GET request is successful
    if (!response.ok) {

        //throw error if not successful
        const fallbackError = `Error fetching itinerary with id ${itineraryID}`

        const data =awaitresponse.json().catch(() =>{
            throw new Error (fallbackError)
    })

    const errorMessage = data?.detail?? fallbackError
    thrownewError(errorMessage)
    }

    return await response.json()
}

//POST an itinerary
export default async function postItinerary(itinerary) {
    
    const url = `${import.meta.env.VITE_API_URL}/itinerary/`;
    
    const response = await fetch(url, { 
        method: "POST", 
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(itinerary),
    })
    console.log(itinerary)

    //check if POST request is successful
    if (!response.ok) {

        //throw error if not successful
        const fallbackError = `Error trying to create itinerary`

        const data = await response.json().catch(() => {
            throw new Error (fallbackError)
    })

        const errorMessage = data?.detail ?? fallbackError
        throw new Error(errorMessage)
    }

    return await response.json()
}

