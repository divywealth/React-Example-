import {Outlet, Navigate} from 'react-router-dom'
import { useSelector } from "react-redux";
const ProtectedRoute = () => {
    const logged = useSelector((state) => state.loggedIn)
    return (
       logged ? <Outlet/> : <Navigate to={'/Login'}/>
    );
}

export default ProtectedRoute;