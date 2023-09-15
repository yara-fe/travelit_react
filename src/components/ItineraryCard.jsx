import { Link } from "react-router-dom"
import "./ItineraryCard.css"

function ItineraryCard(props) {
    const { itineraryData } = props
    const itineraryLink = `itinerary/${itineraryData.id}`;
    
    return (
        <div className="card-cntnr">
            <div className="itinerary-card">
                <Link to ={itineraryLink}>
                    <img src={itineraryData.image} />
                    <h3>{itineraryData.title}</h3>
                </Link>
            </div>
        </div>
    )
}

export default ItineraryCard