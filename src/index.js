import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Daily from './components/Daily';
import Resume from './components/Resume';
import Projects from './components/Projects';

ReactDOM.render((
<HashRouter>
    <div>
        <Route exact path="/" component={App}/>
        <Route path="/daily-coding-problem" component={Daily}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
    </div>
</HashRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
