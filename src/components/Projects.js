import React from 'react'
import Project from './Project';
import LoadingIcon from './Loading'

const projectData = [
    {
        "name": "oziachbot",
        "displayName": "OziachBot",
        "description": "IRC chatbot built to engage Twitch viewers with Old School Runescape API's, such as the Wiki page, and the Hiscores API. The bot was developed to run server-side on many streams concurrently, with robust architecture/security to protect user credentials and a light level of configuration for default usernames. This project development was suspended in November 2019 due to upkeep cost.",
        "features": [
            "IRC framework developed in Go leveraging go-irc and native Go concurrency",
            "Queries API's for external retrieval from user queries",
            "OAuth2 authentication through the Twitch API",
            "Configurable user settings for simplified viewer and user experience"
        ],
        "stack": [
            "Neo4j", "Go", "AWS", "React", "JavaScript", "Twitch", "Git", "Docker"
        ]
    },
    {
        "name": "downtime-alerter",
        "displayName": "SMS Downtime Alerter",
        "description": "Application that watches a URL, and notifies by SMS using the Twilio API as soon as it goes down. This was primarily developed to monitor the health of this portfolio while being hosted by Github Pages, but any URL that can handle a GET request can be monitored.",
        "features": [
            "Periodic URL health monitoring",
            "SMS notification with Twilio API",
            "Periodic reminder notifications during extended downtime"
        ],
        "stack": [
            "Python", "Twilio"
        ]
    },
    {
        "name": "document-storage",
        "displayName": "Document Storage Service",
        "description": "ID-based document storage and retrieval REST web service. Files are saved locally and referenced by a unique 20-character alphanumeric ID, through which they can be retrieved, updated, or deleted. File metadata (original file name/extension, file size) is stored in an in-memory H2 database, although the application can easily be configured to connect to a different SQL driver and database.",
        "features": [
            "Support for all file types",
            "SQL in-memory database metadata storage",
            "Local file storage with assigned unique ID through HTTP POST multipart form-data",
            "File retrieval by ID through HTTP GET",
            "File updation by ID through HTTP UPDATE",
            "File removal by ID through HTTP DELETE"
        ],
        "stack": [
            "Java", "Spring", "Hibernate", "SQL", "H2"
        ]
    },
    {
        "name": "3D-Surface-Viewer",
        "displayName": "OpenGL 3D Surface Viewer",
        "description": "OpenGL Surface Viewer for two-variable mathematical functions. The motivation is to improve on most available implementations of this idea by offering a more flexible way for users to view the functions they are working with, without having to worry about trivial things like large numbers or division by zero.",
        "features": [
            "User-defined function evaluation",
            "Camera rotation, pan, and zoom",
            "X and Y bounds",
            "Render resolution",
            "Output (Z) bounds",
            "Graceful handling of infinity and division by zero"
        ],
        "stack": [
            "OpenGL", "C++", "ExprTk"
        ],
        "demo": "demo.gif"
    }
]

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            projects: []
        }
    }

    componentDidMount() {
        let amountDone = 0
        let projectMap = new Map()
        projectData.forEach(data => {
            fetch(`https://api.github.com/repos/mfboulos/${data.name}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error retrieving repo')
                }
                return res.json()
            })
            .then(project => {
                projectMap.set(data, project)
            })
            .catch(err => console.log(err.message))
            .finally(() => {
                amountDone++
                if (amountDone === projectData.length) {
                    this.setState({
                        isLoading: false,
                        projects: [...projectMap.entries()].sort((a, b) => new Date(b[1].updated_at) - new Date(a[1].updated_at)).map(entry => {
                            const data = entry[0]
                            const project = entry[1]
                            return <Project key={project.id} project={project} data={data} />
                        })
                    })
                }
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Projects</h1>
                {this.state.isLoading
                    ? <LoadingIcon/>
                    : <div style={{margin: Math.min(window.innerWidth / 20, 30) + 'px'}}>{this.state.projects}</div>}
            </div>
        )
    }
}

export default Projects;