import React from 'react'
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
            let amountDone = 0
            data.sort((d1, d2) => new Date(d2.updated_at) - new Date(d1.updated_at))
            for (let project of data.filter(d => !d.private)) {
                fetch(`https://raw.githubusercontent.com/mfboulos/${project.name}/${project.default_branch}/boulos.json`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Repo has no display properties!')
                    }
                    return res.json()
                })
                .then(data => {
                    this.projects.push(<Project key={project.id} project={project} display={data}></Project>)
                })
                .catch(err => {})
                .finally(() => {
                    amountDone++
                    if (amountDone === data.filter(d => !d.private).length) {
                        this.setState({'isLoading': false})
                    }
                })
            }
        })
        .catch(err => console.log(err.message));
    }

    render() {
        return (
            <div>
                <h1>Projects</h1>
                {this.state.isLoading
                    ? <LoadingIcon/>
                    : <div style={{margin: Math.min(window.innerWidth / 20, 30) + 'px'}}>{this.projects}</div>}
            </div>
        )
    }
}

export default Projects;