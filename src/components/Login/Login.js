import React from "react";
import "./login.css"
import {auth, provider} from "../../firebase";
import {Button} from "@material-ui/core";
import {login} from "../../features/userSlice";
import {useDispatch} from "react-redux";

function Login () {

    const dispatch = useDispatch()

    const sigIn = () => {
        auth.signInWithPopup(provider).then( ({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        } ).catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="http://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt="google logo"/>
                <Button variant='contained' color="primary"  onClick={sigIn}  >Login</Button>
            </div>
        </div>
    )
}

export default Login