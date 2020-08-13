import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Logout extends Component {
    state = {  }
    render() { 
        return ( <div >
            <div className="logout-bg display-4 text-center text-light">You have Logged Out!!</div>
            <br></br>
<div  className=' font-weight-bold display-5 text-center text-uppercase!' ><Link to='/'> login again</Link>
</div>
        </div> );
    }
}
 
export default Logout;