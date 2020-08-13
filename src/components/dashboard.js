import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios'
import { Navbar } from './navbar';
// this is another cmpnt which gives us table data only, main component is our dashboard
const Reservelistdisplay = props => (
    <tr>
      <td className=" text-monospace text-capitalize ">{props.reserve.name}</td>
      <td className=" text-monospace text-capitalize alert-secondary alert-info">{props.reserve.date}</td>
      <td className=" text-monospace text-capitalize ">{props.reserve.time}</td>
      <td className=" text-monospace text-capitalize alert-secondary alert-info">{props.reserve.description}</td>
      <td className=" text-monospace text-capitalize">
          {/* props.reserve._id gives the id to edit route so that it can be used then */}
        <Link to={"/editreserve/"+props.reserve._id}><img className=" h-25 img-thumbnail " src="https://image.flaticon.com/icons/png/128/61/61456.png"></img></Link><span>||</span> 
        <img  onClick={() => { props.delete(props.reserve._id) }}  className="img-thumbnail h-25 " src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699013-icon-27-trash-can-128.png" ></img>
              </td>
    </tr>
  )
class Dashboard extends Component {
    constructor(props){
        super(props)
        let token=localStorage.getItem('token')
let loggedin=true
if(token===null){
    loggedin=false;
}
console.log(this)
this.delete = this.delete.bind(this)

this.state={
    loggedin,
    reservations:[]

}
    }
    componentDidMount() {
        axios.get("http://localhost:3002/reserve/reserveinfo")
          .then(res => {
            const reservations = res.data;
            console.log(reservations)
            this.setState({ reservations });
            
          })
      }
      delete(id) {
          console.log('del called')
        axios.delete('http://localhost:3002/reserve/delete/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          reservations: this.state.reservations.filter(el => el._id !== id)
        })
      }
      tablebody=()=>{
        // var style={
        //     height:55,
        //     width:75
        // }
            return this.state.reservations.map(reserve => {
                return <Reservelistdisplay reserve={reserve} delete={this.delete} key={reserve._id}/>;
              })
       
    }

    
    render() {
        if(this.state.loggedin===false){
            return <Redirect to="/"/>
        } 
        return (<div className='dashboard-bg'>
            <Navbar/>
              <table className="table">
        <thead className="thead-light">
            <tr>
            <th className="text-center">name</th>
                <th className="text-center">date</th>
                <th className="text-center">time</th>
                <th className="text-center">description</th>
                <th className="text-center">Actions</th>

            </tr>
        </thead>
        <tbody>
       {this.tablebody()}
        </tbody>
    </table>
            <br></br>
            <Link style={{position:"absolute",top:2,right:35}} className=' display-5 font-weight-bold' to="/logout">logout</Link>
            </div> );
    }
}
 
export default Dashboard;