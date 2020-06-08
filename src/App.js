import React,{Component} from 'react';


class App extends Component {
  
  render()
  {
    return(
      <div>
      { /*<div>
          Phone Directory   
        </div>
        <button>Add</button>
        <div>
        <span>Name</span><br/>
        <span>Phone</span>
        </div>*/
      }
      <label htmlFor='Name'>Name:</label>
        <input type='text' placeholder='type here' defaultValue='vaibhav'/>
      
      </div>

    );
  }
}

export default App;
