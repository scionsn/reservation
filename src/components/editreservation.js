import React, { Component } from 'react';
import axios from 'axios'
class EditReserve extends Component {
    constructor(props){
super(props)
this.state = {
    name:"",
date:"",
time:"",
description:""  }
// props are received from dashboard which is id of reservation to be updated
console.log(this.props.match.params.id)
    }
    componentDidMount() {
        axios.get('http://localhost:3002/reserve/'+this.props.match.params.id)
          .then(response => {
            this.setState({
              name: response.data.name,
              date: response.data.date,
              time: response.data.time,
              description: response.data.description
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
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
                       axios.post("http://localhost:3002/reserve/update/"+this.props.match.params.id,{
                           name:this.state.name,
                           date:this.state.date,
                           time:this.state.time,
                           description:this.state.description
                       }).then(doc=>{
                           console.log('doc updated',doc.data)
                       }).catch(err=>{
                           console.log('err in updating doc',err)
                       })
                       window.location="/dashboard"
                       
                    }
   
    render() { 
        return ( <div>
            <br></br>
            <h3 className="editreserve-bg display-4 font-weight-bold text-center">Edit Reservation</h3>
            <br></br>
    <form onSubmit={this.submitform}>
    
    <div className="form-group">
    <label><strong>Name</strong></label>
    <input style={{width:"60%"}} name="name" value={this.state.name} onChange={this.onchangename} type="text " placeholder="enter name" required className=" full-width form-control"></input>

    </div>
    <div className="form-group">
    <label><strong>Date</strong></label>
    
        <input style={{width:"60%"}} name="date" value={this.state.date} onChange={this.onchangedate} type="text " placeholder="enter description" required className="form-control"></input>
    </div>
    <div className="form-group">
    <label><strong>Time</strong></label>
    
        <input style={{width:"60%"}} name="time" value={this.state.time} onChange={this.onchangetime} type="text " placeholder="enter duration" required className="form-control"></input>
    </div>
    <div className="form-group">
        <label><strong>Description</strong></label>
    <input style={{width:"60%"}} name="description" value={this.state.description} onChange={this.onchangedesc} type="text " placeholder="enter date" required className="form-control"></input>
    
    </div>
    
    <div className="form-group">
    <input type="submit" value="Update" className="btn btn-outline-success"></input>
    </div>
    </form>
            </div> );
    }
}
 
export default EditReserve;