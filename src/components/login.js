import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios'
class Login extends Component {
    constructor(props){
        super(props)
        
        this.state = { 
            username:"",
            pwd:""  ,
        loggedin:false   }
    }
   
     namefield=(e)=>{
this.setState({
    username:e.target.value
})
     }
     pwdfield=(e)=>{
this.setState({
    pwd:e.target.value
})
     }
    
     submitform=(event)=>{
        event.preventDefault();
      const{username,pwd}=this.state
     console.log(username,pwd)
     axios.get("http://localhost:3002/login/logininfo").then(info=>{
         console.log('info',info.data)
         info.data.map(val=>{
             if(val.username===username&&val.pwd===pwd){
                 localStorage.setItem('token','thisisatokenforlogin')
                 this.setState({
                     loggedin:true
                 })
             }
         })
     }).catch(err=>{
         console.log(err)
     })
     }
     
    render() { 
        if(this.state.loggedin){
            console.log(this.state)
           return <Redirect to="/dashboard"/>
        }
        return (<div className="w-50 mx-auto loginpage-bg">
            <h2 className="display-4 text-center text-monospace text-black-50">Login</h2>
            <form style={{display:"block",textAlign:"center"}} onSubmit={this.submitform} method='post'>

            <div className="form-group">
            <label><strong>Username</strong></label>
            <input style={{width:"20%"},{borderWidth:"medium"}} name="username" value={this.state.username} onChange={this.namefield} type="text " placeholder="enter username" required className=" form-control "></input>
            </div>
        <div className="form-group">
        <label><strong>Password</strong></label>
        
            <input  name="pwd" type="password"  value={this.state.password} onChange={this.pwdfield}  placeholder="enter password" required className="form-control"></input>
        </div>
        <div className="form-group">
        <input type="submit" value="login" className="btn btn-outline-success "></input>
        </div>
        </form>
        <p style={{width:"40%"},{display:"block"},{textAlign:"center"}}><strong>Not Registered yet? Register Now!</strong></p>
        <div style={{display:"block",textAlign:"center"}}> <button className="btn btn-outline-danger alert-danger text-center "><Link to='/register' >Register</Link> </button></div>
           
        
                </div> );
    }
}
 
export default Login;
// style={{width:"20%"},{borderWidth:"medium"}}