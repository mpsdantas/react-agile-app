import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Backlog from "./container/Backlog";
import Releases from "./container/Releases";
import Sprints from "./container/Sprints";
import Home from "./container/Home";
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='/releases' component={Releases} />
            <Route path='/backlog' component={Backlog} />
            <Route path='/sprint' component={Sprints} />
        </Route>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
