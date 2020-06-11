import React,{Component} from 'react';
import Header from './component/header/header.component';
import './App.css';
class App extends Component {
  
  render()
  {
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

    ]
    return(
      <div>
       <Header/>
        <button className="appButton">Add</button>
        <div className="content">
        <span className="name_h">Name</span>
        <span className="phone_h">Phone</span>
        </div>
      
       
        {
          subscribers.map(sub =>{
            return  <div key={sub.id} className="content">
            <span className="name">{sub.name}</span>
            <span className="phone">{sub.phone}</span>
            <button className="deletebtn">DELETE</button>
            </div>
          })
        }
      
      </div>

    )
  }
}

export default App;
