import React from 'react';
import WorkProject from './WorkProject';
import calpoly from '../static/calpoly.png';

class Resume extends React.Component {
    workProjects = [
        {
            name: 'NLP Benefits',
            shortDescription: 'ETL software for parsing thousands of Anthem EOC documents into a knowledge base',
            role: 'Software Developer',
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
                'Postman',
                'Bitbucket',
                'Git',
                'JIRA'
            ]
        },
        {
            name: 'AssignForce',
            shortDescription: "Online training batch management application for Revature's VP of Technology",
            role: 'Software Developer',
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
        return (
            <div>
                <h1>Work Projects</h1>
                <div style={{margin: '20px'}}>
                    {this.workProjects.map((p, index) => <WorkProject key={index} {...p} />)}
                </div>
                <h1>Education</h1>
                <div style={{margin: '20px', display: 'grid', gridTemplateColumns: '200px auto'}}>
                    <img style={{height: '150px', gridColumnEnd: 2}} src={calpoly} title='Cal Poly San Luis Obispo'/>
                    <div style={{gridColumnStart: 2}}>
                        <h3>California Polytechnic State University, San Luis Obispo</h3>
                        <p style={{color: '#dddddd'}}>September 2013 - June 2017</p>
                        <p>B.S in Mathematics, minor in Computer Science</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;