import React from 'react'
import { Accordion } from 'react-bootstrap';
import Project from './Project';
import LoadingIcon from './Loading'

class Projects extends React.Component {
    projects = []

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/mfboulos/repos')
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error('There was a problem retrieving repos!')
        })
        .then((data) => {
            for (let project of data.filter(d => !d.private)) {
                let displayProps;
                fetch(`https://raw.githubusercontent.com/mfboulos/${project.name}/${project.default_branch}/.boulos`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Repo has no display properties!')
                    }
                    displayProps = res.json()
                })
                .catch(err => {})

                if (displayProps) {
                    this.projects.push(<Project key={project.id} projectProps={project}>{project.name}</Project>)
                }
            }

            this.setState({'isLoading': false})
        })
        .catch(err => console.log(err.message));
    }

    render() {
        if (this.state.isLoading) {
            return (
                <LoadingIcon/>
            )
        }
        else {
            return (
                <div>
                    <h1>Projects</h1>
                    <Accordion>{this.projects}</Accordion>
                </div>
            )
        }
    }
}

export default Projects;