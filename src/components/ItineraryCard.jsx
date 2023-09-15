import { Link } from "react-router-dom"
import "./ItineraryCard.css"

function ItineraryCard(props) {
    const { itineraryData } = props
    const itineraryLink = `itinerary/${itineraryData.id}`;
    
    return (
        <div className="itinerary-card">
            <Link to ={itineraryLink}>
                <img src={itineraryData.image} />
                <h3>{itineraryData.title}</h3>
            </Link>
        </div>
    )
}

export default ItineraryCard