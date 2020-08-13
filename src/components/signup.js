import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';
class Signup extends Component {
    state = { 
        username:"",
        pwd:"",
        pwd2:"",
        isregist:false

     }
    submitform=(e)=>{
e.preventDefault()
if(this.state.pwd===this.state.pwd2){
this.setState({
    isregist:true
})
axios.post("http://localhost:3002/login/addlogin",{username:this.state.username,
pwd:this.state.pwd}).then(doc=>{
console.log('doc addded',doc.data)

}).catch(err=>{
    console.log(err)
})
}
else{
    alert(' passwords should match')
}

    }
    
    onname=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    onpwd=(e)=>{
        this.setState({
            pwd:e.target.value
        })
    }
    onpwd2=(e)=>{
        this.setState({
            pwd2:e.target.value
        })
    }
    render() {

        if(this.state.isregist){
            return <Redirect to="/"/>

        }
        
        return ( <div className=" registerpage-bg">
            <form style={{display:"block",textAlign:"center"}} onSubmit={this.submitform}>
            <h2 className="display-4 text-center text-monospace text-black-50">Register</h2>

            <div className="form-group">
            <label><strong>Username</strong></label>
            <input style={{width:"40%"},{display:"block"},{textAlign:"center"},{borderWidth:"medium"}} name="username" value={this.state.username} onChange={this.onname} type="text " placeholder="enter username" required className=" form-group "></input>
            </div>
        <div className="form-group">
        <label><strong>Password</strong></label>
        
            <input style={{width:"40%"},{display:"block"},{textAlign:"center"},{borderWidth:"medium"}} name="pwd" value={this.state.password} onChange={this.onpwd} type="password" placeholder="enter password" required className=" form-group"></input>
        </div>
        <div className="form-group">
        <label><strong>Confirm Password</strong></label>
        
            <input style={{width:"40%"},{display:"block"},{textAlign:"center"},{borderWidth:"medium"}} name="password2" value={this.state.password} onChange={this.onpwd2} type="password" placeholder="confirm password" required className=" form-group"></input>
        </div>
        <div className="form-group">
<button   className="btn btn-outline-danger alert-danger text-center  ">Register</button> </div>
        </form>
                </div> );
    }
}
 
export default Signup;