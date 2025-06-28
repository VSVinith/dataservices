import { useState } from "react"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"


const Login = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const changeUsername = (event) => {
        setUsername(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }
    const onSubmitForm = async(event) => {
        event.preventDefault()
        const userDetails = {username, password}
        const url = 'https://apis.ccbp.in/login'
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        console.log(response)
        const data = await response.json()
        console.log(data)
        if(response.ok === true){
            console.log("success")
            Cookies.set('jwt_token', data.jwt_token, {expires: 30})
            navigate('/home')
        } else {
            console.log("failed")
        }
    }


    return (
        <form className="login-container" onSubmit={onSubmitForm}>
            <h1>
                Login to your account
            </h1>
            <label htmlFor="username">username</label>
            <input id="username" onChange={changeUsername} type="name" />
            <label htmlFor="password">Password</label>
            <input id="password" onChange={changePassword} type="password"/>
            <button type="submit">Login</button>

        </form>
    )
}

export default Login