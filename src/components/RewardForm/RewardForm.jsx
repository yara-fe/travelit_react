import "../rewardForm/RewardForm.css"
import { useState } from 'react'
import { useParams } from "react-router-dom"

import postReward from "../../api/rewardsAPI"

function RewardForm() {

    //use useParams hook and the url to identify which itinerary to award the reward to.
    const { id } = useParams() 

    const [ successMessage, setSuccessMessage ] = useState("")

    //State to manage input values
    const [ rewardData, setRewardData ] = useState({
        amount: 0,
        comment:'',
        anonymous: false,
        itinerary: parseInt(id) //convert the id from string to number
    })

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

        setSuccessMessage("Thanks for giving a reward!")
        setRewardData=({
            amount: 0,
            comment: "",
            anonymous: false,
            itinerary: parseInt(id,10)
        })

        //clear success message after 5 secs
        setTimeout(() => {
            setSuccessMessage("")
        }, 5000)

        }
        catch (error) {
            console.error("Error submitting reward", error.message)
        }
    }

    return (
        <>
        <div className="form-wrapper">
            <form className="reward-form">
                <div className="amount">
                    <label className="form-label">Amount</label>
                    <input 
                    type="number" 
                    placeholder="Enter amount"
                    name="amount"
                    value={rewardData.amount}
                    onChange={handleChange}
                    className="form-input"
                    />
                </div>
                <div className="comment">
                    <label className="form-label">Comment</label>
                    <input 
                    type="text" 
                    placeholder="Enter a comment"
                    name="comment"
                    value={rewardData.comment}
                    onChange={handleChange}
                    className="form-input"
                    />
                </div>
                <div className="anonymous">
                    <label className="anonymous-lbl">Anonymous?</label>
                    <input
                    type="checkbox"
                    name="anonymous"
                    checked={rewardData.anonymous}
                    onChange={handleChange}
                    className="form-checkbox"
                    />
                </div>
            </form>
            <button onClick={handleSubmit} className="submit-btn">Submit</button>
        </div>
        <div className="msg-wrapper">
            {successMessage && 
            <div className="success-msg">{successMessage}</div>
            }
        </div>
        </>
    )
}

export default RewardForm