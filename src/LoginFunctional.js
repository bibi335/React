import React, { useState } from 'react';
import Sample from './Sample';
import SampleClass from './SampleClass';
import './Loginf.css'
function LoginFunctional() {
    const names = ["name"]
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const passwordChange = (event) => {
        setPassword(event.target.value)
    }
    const usernameChange = (event) => {
        setUsername(event.target.value)
    }


    const handleSubmit = () => {}
    return  <div className = "LoginF" >
         <h1> Login Functional</h1>
     < h2 > username: { username } </h2> 
     {
            
            names.map(name => < h1 > { name } </h1>)
            }


            
            <SampleClass name = "user1" />
            <SampleClass name = { username }  /> 
            < form onSubmit = { handleSubmit } >
               < input onChange = { usernameChange }type = "text" name = "username" />
                <input onChange = { passwordChange } type = "text" name = "password" />
                
                <input class = "btn btn-primary" type = "submit"value = "Login" />
           
                </form> 
               
                </div>

        }
    export default LoginFunctional;