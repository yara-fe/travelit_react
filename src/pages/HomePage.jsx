import useItineraries from "../hooks/use-itineraries";
import ItineraryCard from "../components/ItineraryCard";
import "./Homepage.css"


function HomePage() {

    const { itineraries } = useItineraries()

    return (
        <>
            <h1> HomePage </h1>
            <div id="itinerary-list">
                {itineraries.map((itineraryData, key) => {
                    return <ItineraryCard key={key} itineraryData={itineraryData} />
                })}
            </div>
        </>
    )
}

export default HomePage;