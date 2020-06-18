import React,{Component} from 'react';
import Header from './component/header/header.component';
import './ShowSubscribers.css';
import {Link} from 'react-router-dom';


class ShowSubscribers extends Component {


 
  render()
  {
   
    return(
      <div>
       <Header heading="Phone Directory"/>
       <Link to='/add'>  <button  className="appButton">Add</button> </Link>
        <div className="component-body-container">
        
        <div className="content">
        <span className="name_h">Name</span>
        <span className="phone_h">Phone</span>
        </div>
      
       
        {
           this.props.subscribersList.map(sub =>{
            return  <div key={sub.id} className="content">
            <span className="name">{sub.name}</span>
            <span className="phone">{sub.phone}</span>
            <button onClick={this.props.deleteSubscriber.bind(this,sub.id)} className="deletebtn">DELETE</button>
            </div>
          })
        }
      
        
        
        </div>
        
      </div>

    )
  }
}

export default ShowSubscribers;
