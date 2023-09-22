// export async function getReward(id)


//Handles submitting a reward
export default async function postReward(rewardData) {
    
    const url = `${import.meta.env.VITE_API_URL}/rewards/`;
    
    const response = await fetch(url, { 
        method: "POST", 
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rewardData),
    })
    console.log(rewardData)

    //check if POST request is successful
    if (!response.ok) {

        //throw error if not successful
        const fallbackError = `Error trying to submit reward`

        const data = await response.json().catch(() => {
            throw new Error (fallbackError)
    })

        const errorMessage = data?.detail ?? fallbackError
        throw new Error(errorMessage)
    }

    return await response.json()
}