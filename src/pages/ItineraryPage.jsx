import { useParams } from "react-router-dom"
import useItinerary from "../hooks/use-itinerary"
import "./ItineraryPage.css"
import RewardForm from "../components/rewardform/RewardForm"
import RewardItem from "../components/RewardItem/RewardItem"

function ItineraryPage(props) {

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

        <h2 className="itinerary-title"> {itinerary.title} </h2>
        
        <section className="itinerary-wrapper">
            <div className="itinerary-overview">
                <h3> Overview </h3>
                <h4> Travel Time</h4>
                <p> { itinerary.travel_date }</p>
                <h4> Cost </h4>
                <p> {itinerary.cost}</p>
                <h4> Perfect for </h4>
                <p> {itinerary.audience}</p>
            </div>
            <div className="itinerary-details">
                <h3>Details</h3>
                <p> { itinerary.description } </p>
            </div>
        </section>

        <section className="support-wrapper">
            <h3> Support </h3>
            <p className="support-msg">Liked this itinerary? Share your support by gifting a reward to the creator!</p>
            <RewardForm></RewardForm>
            <div className="reward-list">
                <ul>
                    {itinerary.rewards.map((rewardData, key) => (
                        <RewardItem key={key} rewardData={rewardData} />
                        ))}
                </ul>
            </div>   
        </section>
        </>
    ) 
}

export default ItineraryPage;