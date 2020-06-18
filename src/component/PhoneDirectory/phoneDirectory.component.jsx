import React from 'react';

import AddSubscriber from '../subscriber/subscriber.component';

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
        console.log(this.state);

    }

    render()
    {
        return(

            <AddSubscriber addSubscriberHandler={this.addSubscriber}/>
        )


    }  


}
export default PhoneDirectory