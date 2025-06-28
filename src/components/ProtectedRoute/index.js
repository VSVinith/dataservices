import Cookie from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({props})=> {
    const token = Cookie.get('jwt_token')
    // if(token === undefined){
    //     return <Navigate to="/" />
    // }else{
    //     return props
    // }

    return token ? <Outlet />:<Navigate to="/"/>
}

export default ProtectedRoute