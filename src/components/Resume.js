import React from 'react';
import WorkProject from './WorkProject';
import calpoly from '../static/calpoly.png';

class Resume extends React.Component {
    workProjects = [
        {
            name: 'EQRS',
            shortDescription: 'Structured quality reporting system for ESRD patients and providers',
            role: 'Full Stack Software Engineer',
            start: 'July 2021',
            end: 'Current',
            roles: [
                'Designed incremental data migration system for archiving billions of clinical health records using a network of lightweight AWS Lambda applications, offloading work to Postgres RDS and Redshift and communicating through SQS'
            ],
            accomplishments: [
                'Orchestrated AWS Lambda deployment with S3 upload, proper IAM execution roles, SQS queue triggers, and secure credential retrieval in code through the Parameter Store and Secrets Manager',
                'Supervised data archival development through working sessions and thorough code review',
                'Developed data archival Java AWS Lambda to migrate billions of records between schemas using Redshift Copy/Unload'
            ],
            techStack: [
                'React',
                'JavaScript',
                'Material UI',
                'Java',
                'JUnit',
                'Maven',
                'Eclipse',
                'Git',
                'AWS',
                'JIRA'
            ]
        },
        {
            name: 'UniFHIR',
            shortDescription: 'FHIR-compliant server built for healthcare data exchange',
            role: 'Full Stack Software Engineer',
            start: 'February 2021',
            end: 'July 2021',
            roles: [
                'Developed React frontend to expose UniFHIR functionality on a readable, responsive interface',
                'Developed and refactored crucial components of the UniFHIR backend framework to reduce duplicated work and improve application resiliency',
            ],
            accomplishments: [
                'Integrated markdown formatting, sophisticated routing logic, and Material UI into UniFHIR documentation interface for a modern, simple, and elegant user experience',
                'Developed authentication workflow through an Okta OAuth2 handshake',
                'Established frontend testing framework using Jest to assert crucial functionality and Enzyme to isolate component units',
                'Leveraged HAPI FHIR server as a baseline for FHIR server specification compliance in a Java Spring Boot environment',
                'Redesigned backend search and validation libraries to an enumeration of search parameter groups and validation criteria, reducing significant code bloat',
                'Simplified ongoing development support for new FHIR resources and search parameters to enumeration edits, reducing long-term development efforts from days to minutes'
            ],
            techStack: [
                'React',
                'JavaScript',
                'Jest',
                'Enzyme',
                'Material UI',
                'Okta',
                'npm',
                'Java',
                'Spring',
                'JUnit',
                'Maven',
                'Docker',
                'Postman',
                'Eclipse',
                'Git',
                'JIRA'
            ]
        },
        {
            name: 'Batch Module',
            shortDescription: 'Modern web-based Sepasoft MES tools built for ISA-88 compliance on the Ignition platform',
            role: 'Lead Frontend Software Engineer',
            start: 'April 2020',
            end: 'Present',
            roles: [
                'Led development on React user interface for a seamless, uniform experience across all modular Perspective components',
                'Developed crucial UI components for core Batch functionality along with corresponding delegates in the backend',
            ],
            accomplishments: [
                'Completed the core elements of the Batch UI workflow well before major conference demos',
                'Integrated Batch procedures with GoJS to allow users to interact with ISA-88 equipment and logic steps as nodes in a graph',
                'Developed several general use internal components to significantly decrease development time and seamlessly adapt theming changes'
            ],
            techStack: [
                'React',
                'TypeScript',
                'Material UI',
                'npm',
                'Webpack',
                'Java',
                'JUnit',
                'Gradle',
                'Python',
                'IntelliJ',
                'Bitbucket',
                'Git',
                'JIRA'
            ]
        },
        {
            name: 'Sepasoft MES',
            shortDescription: 'Suite of MES enterprise tools built to efficiently and effectively satisfy the ISA-95 standard',
            role: 'Full Stack Software Engineer',
            start: 'Jan 2020',
            end: 'Present',
            roles: [
                'Maintained integrity of several concurrent software versions to ensure compatibility with various Ignition versions, SQL variants, and server configurations',
                'Designed long term solutions for foundational elements of backend infrastructure to prevent date-time lapses while upholding backwards compatibility',
            ],
            accomplishments: [
                'Redefined equipment shifts to account for breaks and spanning over multiple days',
                'Integrated new shift logic and equipment efficiency to calculate new analytical metrics'
            ],
            techStack: [
                'Java',
                'JUnit',
                'Maven',
                'Python',
                'Eclipse',
                'Bitbucket',
                'Git',
                'JIRA'
            ]
        },
        {
            name: 'NLP Benefits',
            shortDescription: 'ETL software for parsing thousands of Anthem insurance documents into a knowledge base',
            role: 'Software Engineer',
            start: 'August 2018',
            end: 'July 2019',
            roles: [
                'Led development on core language processing features throughout the team (10k+ lines of code)',
                'Spearheaded transition to enterprise architecture best practices',
                'Established feedback system into predictive models by continuously streaming predictions to analysts and routing their feedback into training data'
            ],
            accomplishments: [
                'Improved limitation phrase recognition from less than 50% to almost 100% by taking advantage of more sophisticated pattern recognition',
                'Developed benefit phrase extraction by establishing named entity recognition as a wrapper',
                'Drastically reduced complexity of inclusion/exclusion extraction from notes, from an average of 1 hour down to about 2 minutes',
                'Prevented over 100 bugs from reaching production through code review'
            ],
            techStack: [
                'Java',
                'JUnit',
                'Spring',
                'Maven',
                'MongoDB',
                'Python',
                'CoreNLP',
                'Eclipse',
                'Spyder',
                'Postman',
                'Bitbucket',
                'Git',
                'JIRA'
            ]
        },
        {
            name: 'AssignForce',
            shortDescription: "Online training batch management application for Revature's VP of Technology",
            role: 'Software Engineer',
            start: 'June 2018',
            end: 'July 2018',
            roles: [
                'Refactored front-end models to lessen load times and ensure consistent data binding throughout the application',
                'Applied user accessibility settings across the application',
                'Formalized Github issue documentation for internal issue tracking'
            ],
            accomplishments: [
                'Reduced load times across the application by at least 50%',
                'Eliminated overlapping work efforts throughout the team'
            ],
            techStack: [
                'Angular',
                'JavaScript',
                'Docker',
                'Github',
                'OracleSQL',
                'VSCode'
            ]
        }
    ]

    render() {
        let isWideEnough = window.innerWidth > 600

        let education = isWideEnough
        ? <div style={{margin: Math.min(window.innerWidth / 20, 30) + 'px', display: 'grid', gridTemplateColumns: '175px auto'}}>
            <img style={{height: '150px', gridColumnEnd: 2}} src={calpoly} alt='' title='Cal Poly San Luis Obispo'/>
            <div style={{gridColumnStart: 2}}>
                <h3>California Polytechnic State University, San Luis Obispo</h3>
                <p style={{color: '#dddddd'}}>September 2013 - June 2017</p>
                <p>B.S in Mathematics, minor in Computer Science</p>
            </div>
        </div>
        : <div style={{margin: Math.min(window.innerWidth / 20, 30) + 'px'}}>
            <div style={{width: '100%'}}>
                <img style={{display: 'block', margin: 'auto', height: '150px'}} src={calpoly} alt='' title='Cal Poly San Luis Obispo'/>
            </div>
            <div style={{marginTop: '20px'}}>
                <h3>California Polytechnic State University, San Luis Obispo</h3>
                <p style={{color: '#dddddd'}}>September 2013 - June 2017</p>
                <p>B.S in Mathematics, minor in Computer Science</p>
            </div>
        </div>

        return (
            <div>
                <h1>Work Projects</h1>
                <div style={{margin: Math.min(window.innerWidth / 20, 30) + 'px'}}>
                    {this.workProjects.map((p, index) => <WorkProject key={index} {...p} />)}
                </div>
                <h1>Education</h1>
                {education}
            </div>
        )
    }
}

export default Resume;