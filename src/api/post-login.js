//API function that sends a POST request when user logs in

async function postLogin(username, password) {
    
    const url = `${import.meta.env.VITE_API_URL}/api-token-auth/`;
    
    //Inform server that we are sending JSON data so we set the Content-Type header to application/json
    const response = await fetch(url, { 
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": username,
            "password": password,
        }),
    })

    //check if GET request is successful
    if (!response.ok) {

        //throw error if not successful
        const fallbackError = `Error trying to login`

        const data = await response.json().catch(() => {
            throw new Error (fallbackError)
    })

        const errorMessage = data?.detail ?? fallbackError
        throw new Error(errorMessage)
    }

    return await response.json()
}

export default postLogin