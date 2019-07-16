import React from 'react'
import { Route, Link } from 'react-router-dom';
import Project from './Project';

class Projects extends React.Component {
    stuff = [
        {'id': 123, 'name': 'hello', 'desc': 'this one sucks honestly'},
        {'id': 222, 'name': 'bye', 'desc': 'in the end, i liked this one a bit more'},
        {'id': 321, 'name': '345', 'desc': 'pineapple'},
    ]

    render() {
        var projects = [];
        for (let props of this.stuff) {
            projects.push(<Project key={props.id} projectProps={props}>{props.name}</Project>);
        }

        return (
            <div>
                <h1>Projects</h1>
                {projects}
            </div>
        )
    }
}

export default Projects;