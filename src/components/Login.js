import React from "react";
import { useParams } from "react-router-dom";

function Login(){
    const {id}=useParams();
    return(
        <div>
            <form>
                <h1>Se connecter  {id} </h1>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" aria-describedby="username-help" />
                <small id="username-help">Enter your username. Must be at least 6 characters long.</small>
                <label for="password">Password:</label>
                <input type="text" id="password" name="password" aria-describedby="password-help" />
                <small id="password-help">Enter your password. Must be at least  includes a mix of uppercase and lowercase letters.</small>
            </form>
        </div>
        )
}
export default Login;