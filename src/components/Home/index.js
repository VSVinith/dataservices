import NavigationBar from '../NavigationBar'
import { Link } from 'react-router-dom'


import './index.css'

const Home = () => {


    return (
        // <h1>Home</h1>

        <>
            <NavigationBar />
            <div className="home-container">
                <div className="loyalty-container">
                    <div className='loyalty-header'>Loyalty App</div>
                    {/* <div></div> */}
                    <p className='para'>Use this app to search and lookup Guests Loyalty Accounts, Points and Sailing History</p>
                    <Link to="/search">
                        <button type='button' className='button'>Open App</button>
                    </Link>
                </div>
            </div>
        </>
    )
}


export default Home