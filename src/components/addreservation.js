import React, { Component } from 'react';
import axios from 'axios';
class Addreserve extends Component {
    state = {  
        name:"",
        date:"",
        time:"",
        description:""
    }
    onchangedesc=(event)=>{
        this.setState({
            description:event.target.value
        })
        }
    onchangename=(event)=>{
            this.setState({
                name:event.target.value
            })
            }
    
    onchangedate=event=>{
                this.setState({
                    date:event.target.value
                })
                }
                onchangetime=event=>{
                    this.setState({
                        time:event.target.value
                    })
                    }
    
    submitform=(event)=>{
    event.preventDefault();
   console.log(this.state)
   axios.post("http://localhost:3002/reserve/addreserve",{
       name:this.state.name,
       date:this.state.date,
       time:this.state.time,
       description:this.state.description
   }).then(doc=>{
       console.log('doc added',doc.data)
   }).catch(err=>{
       console.log('err in adding doc',err)
   })
   window.location="/dashboard"
   
}
    render() { 
        return ( <div>
            <br></br>
            <h3 className="display-4 font-weight-bold text-center addreserve-bg">Add Reservation</h3>
            <br></br>
    <form onSubmit={this.submitform}>
    
    <div className="form-group">
    <label><strong>Name</strong></label>
    <input style={{width:"50%"}} name="name" value={this.state.name} onChange={this.onchangename} type="text " placeholder="enter name" required className=" full-width form-control"></input>

    </div>
    <div className="form-group">
    <label><strong>Date</strong></label>
    
        <input style={{width:"50%"}} name="date" value={this.state.date} onChange={this.onchangedate} type="text " placeholder="enter date" required className="form-control"></input>
    </div>
    <div className="form-group">
    <label><strong>Time</strong></label>
    
        <input style={{width:"50%"}} name="time" value={this.state.time} onChange={this.onchangetime} type="text " placeholder="enter time" required className="form-control"></input>
    </div>
    <div className="form-group">
        <label><strong>Description</strong></label>
    <input style={{width:"50%"}} name="description" value={this.state.description} onChange={this.onchangedesc} type="text " placeholder="enter description" required className="form-control"></input>
    
    </div>
    
    <div className="form-group">
    <input type="submit" value="Submit" className="btn btn-outline-success"></input>
    </div>
    </form>
            </div> );
    }
}
 
export default Addreserve;