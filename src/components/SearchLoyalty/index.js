import { useState } from 'react'
import NavigationBar from '../NavigationBar'
import './index.css'
import { Link } from 'react-router-dom'


const SearchLoyalty = () => {

    const [clientId, setClientId] = useState('')

    const onChangeClientId = (event) => {
        setClientId(event.target.value)
    }

    const route =  clientId ? `/loyalty/${clientId}`:`/loyalty`

    // const route =  `/loyalty`

    return (
        <><NavigationBar />
            <div className='search-loyalty-container'>
                <div >
                    <form className='form-container'>
                        <input className='input' type="text" placeholder="Loyalty Number" />
                        <p>Or</p>
                        <input onChange={onChangeClientId} className='input' type="text" placeholder="Client ID" />
                        <p>Or</p>
                        <input className='input' type="text" placeholder="Email ID" />
                        <br></br>
                        <br></br>
                        <Link to={route}>
                            <button type="submit" className="button">Search</button>
                        </Link>

                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchLoyalty