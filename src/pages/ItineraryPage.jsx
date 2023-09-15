import { useParams } from "react-router-dom"
import useItinerary from "../hooks/use-itinerary"


function ItineraryPage() {

    //Use hook from react router called 'useParams' to get the id from the URL and pass it to our useItinerary hook

    const { id } = useParams()

    //Grab all info that useItinerary returns
    const { itinerary, isLoading, error } = useItinerary(id)
    
    if (isLoading) {
        return (<p>Loading...</p>)
    }

    if (error) {
        return (<p>{error.message}</p>)
    }

    return (
        <div>
            <h1> Itineraries </h1>
            <h2> {itinerary.title} </h2>
            <h3> Created at: {itinerary.date_created} </h3>
            <h3> Rewards </h3>
            <ul>
                {itinerary.rewards.map((rewardData, key) => {
                    return (
                        <li key={key}>
                            Amount: {rewardData.amount},
                            Giver: {rewardData.giver}
                        </li>
                    )
                })}
            </ul>
        </div>
    ) 
}

export default ItineraryPage;