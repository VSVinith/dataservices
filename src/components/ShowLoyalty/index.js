import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import './index.css'
import NavigationBar from '../NavigationBar';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getData } from '../../store/dataslice'

const ShowLoyalty = () => {


    const dispatch = useDispatch()

    const [loyaltyInfo, setLoyaltyInfo] = useState([])

    const params = useParams()
    // console.log(params)

    const { clientId } = params
    // console.log(clientId)    



    useEffect(() => {
        const getLoyaltyInfo = async () => {
            const api = `https://retoolapi.dev/JaWLpz/data?clientId=${clientId}`
            const response = await fetch(api)
            // console.log("response:", response)
            const data = await response.json()
            // console.log("data:", data)
            setLoyaltyInfo(data)
            dispatch(getData(data))

        }
        getLoyaltyInfo()
    }, [clientId])




    // const getLoyaltyInfo = async () => {

    //     // const api = `https://retoolapi.dev/JaWLpz/data`

    //     // const response = await fetch(api)

    //     const response = await fetch(`https://66ab7184636a4840d7cab177.mockapi.io/aza/loyalty/loyaltyinfo`)

    //     // const response = await fetch(`https://66ab7184636a4840d7cab177.mockapi.io/aza/loyalty/loyaltyinfo/`)


    //     console.log(response)
    //     const data = await response.json()
    //     // console.log([data])
    //     setLoyaltyInfo(data)

    // }

    // console.log("loyaltyInfo: ", loyaltyInfo)

    return (
        <div>
            <NavigationBar />
            <Table responsive="xl">
                <thead className='ncl-background'>
                    <tr>
                        <th >Res ID</th>
                        <th>Client ID</th>
                        <th>Ship</th>
                        <th>Sail Date</th>
                        <th>End Date</th>
                        <th>Cabin Category</th>
                        <th>Occupancy</th>
                        <th>Nights</th>
                        <th>Converted RCG Points</th>
                        <th>Gray Points</th>
                        <th>Calculated Points</th>
                        <th>RCG Calculated Sailing Points</th>
                        <th>Rooking Status</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {loyaltyInfo.map(info => (
                        <tr>
                            <td>{info.id}</td>
                            <td>{info.clientId}</td>
                            <td>{info.ship}</td>
                            <td>{info.sailDate}</td>
                            <td>{info.endDate}</td>
                            <td>{info.cabinCategory}</td>
                            <td>{info.occupancy}</td>
                            <td>8</td>
                            <td>{info.convertedRcgPoints}</td>
                            <td>{info.convertedRcgPoints}</td>
                            <td>{info.convertedRcgPoints}</td>
                            <td>{info.convertedRcgPoints}</td>
                            <td>{info.bookingStatus}</td>
                            <td>{info.firstName}</td>
                            <td>{info.fullName}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    );
}


// const ShowLoyalty = () => {

//     const getLoyaltyInfo = async () => {
//         const api = `https://retoolapi.dev/JaWLpz/data?clientId=56346`
//         const response = await fetch(api)
//         console.log("response:", response)
//         const data = await response.json()
//         console.log("data:", data)
//     }

//     useEffect(() => {
//         getLoyaltyInfo()
//     }, [])

//     return(
//         <h1>Loyalty page</h1>
//     )

// }

export default ShowLoyalty