import React,{Component} from 'react';
import Header from './component/header/header.component';
import './App.css';
class App extends Component {
  
  render()
  {
    return(
      <div>
       <Header/>
        <button className="appButton">Add</button>
        <div className="content">
        <span className="name_h">Name</span>
        <span className="phone_h">Phone</span>
        </div>
      
        <div className="content">
        <span className="name">Shilphnfbfdbfdbfdb</span>
        <span className="phone">9929647262</span>
        </div>

        <div className="content">
        <span className="name">Prakhar</span>
        <span className="phone">9829030356</span>
        </div>
   
      
      </div>

    );
  }
}

export default App;
