import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ALLOW_LOGIN } from "../store/actions/actions";

const Login = () => {
    const Logged = useSelector((state) => state.loggedIn)
    console.log(process.env.NODE_ENV, process.env.REACT_APP_SEND_GRID_KEY)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const Login = () => {
        navigate('/')
    }
    const Allow_Login = () => {
        dispatch(ALLOW_LOGIN())
    }
    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={Login}>Login</button>
            <button onClick={Allow_Login}>Allow Login</button>
            {Logged && <p>I am True ooo</p>}
        </div>
        
    )
}

export default Login;
