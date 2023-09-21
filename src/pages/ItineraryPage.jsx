import { useParams } from "react-router-dom"
import useItinerary from "../hooks/use-itinerary"
import ItineraryHero from "../components/ItineraryHero"




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
        <>
        
            <div className="itinerary-hero">
                <img src={itinerary.image} />
            </div>
            <h2> {itinerary.title} </h2>

            <div className="itinerary-wrapper">
                
                <div className="itinerary-overview">
                    <h3> Overview </h3>
                    <h4> Travel Period</h4>
                    <p> { itinerary.travel_date }</p>
                    <h4> Cost </h4>
                    <p> {itinerary.cost}</p>
                    <h4> Audience </h4>
                    <p> {itinerary.audience}</p>
                </div>
                <div className="itinerary-details">
                    <h3>Details</h3>
                    <p> { itinerary.description } </p>
                </div>
            </div>

            <div>
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
        </>
    ) 
}

export default ItineraryPage;