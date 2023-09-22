import "../rewardForm/RewardForm.css"
import { useState } from 'react'
import { useParams } from "react-router-dom"

import postReward from "../../api/rewardsAPI"

function RewardForm() {

    const { id } = useParams() //use useParams hook and the url to identify which itinerary to award the reward to.
    // console.log("itinerary:", id)

    //State to manage input values
    const [ rewardData, setRewardData ] = useState({
        amount: 0,
        comment:'',
        anonymous: false,
        itinerary: parseInt(id) //convert the id from string to number
    })
    // console.log(rewardData)

    //Event handler to update state for all fields in the reward form
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        const fieldValue = type === "checkbox" ? checked : value
        
        setRewardData((prevrewardData) => ({
            ...prevrewardData,
            [name]: fieldValue,
        }))
    }

    //Event handler for submiting the form
    const handleSubmit = async (event) => {
        event.preventDefault() //Prevents the default form submission behaviour

        try {
            //submit the rewardData object to the API
            const response = await postReward({
                ...rewardData,
                reward_date: new Date().toISOString() //today's date
            })

        //Handle the API response
        console.log('Reward submitted successfully', response)
        }
        catch (error) {
            console.error("Error submitting reward", error.message)
        }
    }

    return (
        <>
            <div className="reward-frm">
                <form>
                    <input 
                    type="number" 
                    placeholder="Amount"
                    name="amount"
                    value={rewardData.amount}
                    onChange={handleChange}
                    // size="5"
                    />
                    <input 
                    type="text" 
                    placeholder="Enter a comment"
                    name="comment"
                    value={rewardData.comment}
                    onChange={handleChange}
                    size="120"
                    />
                    <label>
                    Anonymous:
                    <input
                    type="checkbox"
                    name="anonymous"
                    checked={rewardData.anonymous}
                    onChange={handleChange}
                    />
                    </label>
                </form>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default RewardForm