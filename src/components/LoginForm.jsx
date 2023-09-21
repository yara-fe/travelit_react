import React from 'react'
import { useState } from 'react' //so that form can accept a username and password
import postLogin from '../api/post-login' //import API
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/use-auth.js"



function LoginForm() {

    const navigate = useNavigate()
    const { auth, setAuth } = useAuth()

    //Declare state variables and use the useState hook to create function called setCredentials which updates credential variables when user has entered log in details
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })

    //Update the credentials variable when user types something into the username and password
    const handleChange = (event) => {
        const {id, value } = event.target
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }))
    }

    //Call the API function when logging in
    const handleSubmit = (event) => {
        event.preventDefault()
        if (credentials.username && credentials.password) {
            postLogin(
                credentials.username,
                credentials.password
            ).then((response) => {
                console.log(response)
                window.localStorage.setItem("token", response.token)
                setAuth({
                    token: response.token,
                })
                navigate("/") //navigate back to homepage once user is logged in
            })
        }

        console.log(credentials)
    }

    //Returns the format of the page
    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                {/* <input type="text" id="username" placeholder="Enter username" /> */}
                <input
                    type='text'
                    id='username'
                    placeholder='Enter username'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type='password'
                    id='password'
                    placeholder='Enter password'
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
    )
}

export default LoginForm