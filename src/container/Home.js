import React, {Component} from 'react';
import HomeCard from '../ui/HomeCard';
import {browserHistory} from "react-router";
export default class Home extends Component{
    homeCardReleases = {
        title:'Releases',
        text: 'Manage Releases',
        action: () => browserHistory.push('/releases')
    }
    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manage Backlog',
        action: () => browserHistory.push('/backlog')
    }
    homeCardSprints = {
        title: 'Sprints',
        text: 'Manage Sprints',
        action: () => browserHistory.push('/sprints')
    }
    render(){
        return(
            <div className="container text-center">
                <div className="row">
                    <HomeCard {...this.homeCardReleases}/>
                    <HomeCard {...this.homeCardBacklog}/>
                    <HomeCard {...this.homeCardSprints}/>
                </div>
            </div>
        );
    }
}