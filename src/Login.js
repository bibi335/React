import React from 'react'
import'./Login.css'

class Login extends React.Component {
    state  = {
        username:'',
        password:''
    }
    usernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
     
      
    }
    passwordChange=(event)=>{
        this.setState({
            password:event.target.value})
       
    }
    handleSubmit=(event)=>{
        alert("username:"+this.state.username)
        alert("password:"+this.state.password)
    }
render() {
    return <div className="Login"><h1>Login</h1>
    <h2>username:{this.state.username}</h2>
<form onSubmit={this.handleSubmit}>
<input onChange={this.usernameChange} type="text" name="username"/>
<input type="text" name="password"/>
<input class="btn btn-primary" type="submit"value="Login"/>
</form>

    </div>
    
   
}

}

export default Login;