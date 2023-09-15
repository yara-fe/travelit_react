//import components
import useItineraries from "../hooks/use-itineraries";
import ItineraryCard from "../components/ItineraryCard";
import HeroSection from "../components/HeroSection";

//import styling
import "./Homepage.css"


function HomePage() {

    const { itineraries } = useItineraries()

    return (
        <>
            <HeroSection></HeroSection>
            <div id="itinerary-list">
                {itineraries.map((itineraryData, key) => {
                    return <ItineraryCard key={key} itineraryData={itineraryData} />
                })}
            </div>
        </>
    )
}

export default HomePage;