import React from 'react';
import './subscriber.styles.css';
import Header from '../header/header.component';
class AddSubscriber extends React.Component
{
    constructor()
    {
        super();
        this.state = 
        {
            id:0,
            name:'',
            phone:''
        };

    }
    handleChange = (e) =>
    {
        
      const title = e.target.name;
      const value = e.target.value;
        this.setState({[title]:value});
    }

    render()
    {
        return(
            <div> 
            <Header heading="ADD SUBSCRIBERS"/>
            <div className="component-body-container">
            
            <button className="appButton">Back</button>
            <form className="subscriber-form">
                        <label htmlFor="name" className="label-control">Name: </label><br />
                        <input id="name" type="text" className="input-control" name="name" onChange={this.handleChange}/><br /><br />
                        <label htmlFor="phone" className="label-control">Phone: </label><br />
                        <input id="phone" type="text" className="input-control" name="phone" onChange={this.handleChange}/><br /><br />

                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added: </span><br />
                            <span className="subscriber-info">Name: {this.state.name}</span><br />
                            <span className="subscriber-info">Phone:{this.state.phone} </span><br />
                        </div>

                        <button type="submit" className="appButton" >Add</button>
                    </form>

            </div>
            
            </div>
            
           

        )

    }

}
export default AddSubscriber;