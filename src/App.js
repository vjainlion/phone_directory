import React,{Component} from 'react';
import Header from './component/header/header.component';
import './App.css';

const subscribers = [
  {
    id:1,
    name:"Vaibhav",
    phone:9929647262
  },
  {
    id:2,
    name:"Palak",
    phone:9535443335
  }

];

class App extends Component {


  constructor()
  {
    super();
    this.state = 
    {
      subscribersListToShow:subscribers
    }
  }
  
  handleClick(value)
  {
    alert(value);
  }
  render()
  {
   

    return(
      <div>
       <Header heading="Phone Directory"/>
        <button onClick={this.handleClick.bind(this,"Deleted")} className="appButton">Add</button>
        <div className="component-body-container">
        
        <div className="content">
        <span className="name_h">Name</span>
        <span className="phone_h">Phone</span>
        </div>
      
       
        {
           this.state.subscribersListToShow.map(sub =>{
            return  <div key={sub.id} className="content">
            <span className="name">{sub.name}</span>
            <span className="phone">{sub.phone}</span>
            <button onClick={this.handleClick.bind(this,"Deleted")}  className="deletebtn">DELETE</button>
            </div>
          })
        }
      
        
        
        </div>
        
      </div>

    )
  }
}

export default App;
