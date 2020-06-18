import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import AddSubscriber from '../subscriber/subscriber.component';
import ShowSubscribers from '../../ShowSubscribers.js';
class PhoneDirectory extends React.Component{

    constructor()
    {
        super();
        this.state =
        {
            subscribersList:[]
        };

    }

    addSubscriber = (subscriber) =>
    {     
        console.log('Hi'); 
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length===0)
        {
            subscriber.id = 1;
        }
        else
        {
            subscriber.id = subscribersList[subscribersList.length-1].id +1;
        }
        subscribersList.push(subscriber);
        this.setState({subscribersList:subscribersList});   
       

    }

    deleteSubscriber = (subscriberId) =>
    {
        console.log(subscriberId);
        let subscribersList = this.state.subscribersList;
        subscribersList =subscribersList.filter((subscriber)=> subscriber.id!== subscriberId)
        console.log(subscribersList);
        this.setState({subscribersList:subscribersList});
        console.log(this.state);
    }

    render()
    {
        return(
            <Router>
            <Route exact path='/' render={(props)=> <ShowSubscribers {...props} deleteSubscriber={this.deleteSubscriber} subscribersList = {this.state.subscribersList} />}/>
            <Route exact path='/add' render={(props)=> <AddSubscriber {...props} addSubscriberHandler = {this.addSubscriber} />}/>
            </Router>
          
        )


    }  


}
export default PhoneDirectory