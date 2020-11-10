import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import TechStackCard from './TechStackCard';

class WorkProject extends React.Component {
    render() {
        let isWideEnough = window.innerWidth > 720
        let rolesAndAccomplishments = isWideEnough
        ? <div style={{display: 'grid', gridTemplateColumns: '45% 5% 45% 5%'}}>
            <div style={{gridColumnEnd: 2}}>
                <h3>Roles:</h3>
                <ul>
                    {this.props.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
            </div>
            <div style={{gridColumnStart: 3, gridColumnEnd: 4}}>
                <h3>Accomplishments:</h3>
                <ul>
                    {this.props.accomplishments.map((acc, index) => <li key={index}>{acc}</li>)}
                </ul>
            </div>
        </div>
        : <div>
            <div>
                <h3>Roles:</h3>
                <ul>
                    {this.props.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
            </div>
            <div style={{marginTop: '20px'}}>
                <h3>Accomplishments:</h3>
                <ul>
                    {this.props.accomplishments.map((acc, index) => <li key={index}>{acc}</li>)}
                </ul>
            </div>
        </div>

        let positionAndDates = isWideEnough
            ? <div>
                <div style={{position: 'absolute', top: '15px', right: '20px'}}>{this.props.role}</div>
                <div style={{position: 'absolute', top: '40px', right: '20px', color: '#dddddd',
                maxWidth: '25%', textAlign: 'right', fontSize: 12}}>{this.props.start} - {this.props.end}</div>
            </div>
            : <div>
                <div style={{marginTop: '20px'}}>{this.props.role}</div>
                <div style={{color: '#dddddd', fontSize: 12}}>{this.props.start} - {this.props.end}</div>
            </div>

        return (
            <Accordion style={{padding: '3px'}}>
                <Card style={{borderRadius: '5px', backgroundColor: '#444444'}}>
                    <Accordion.Toggle style={{cursor: 'pointer'}} as={Card.Header} variant='link' eventKey={this.props.id}>
                        <div style={{fontSize: 20}}>{this.props.name}</div>
                        <div style={{color: '#dddddd', fontSize: 12,
                        maxWidth: isWideEnough ? '70%' : '100%'}}>{this.props.shortDescription}</div>
                        {positionAndDates}
                    </Accordion.Toggle>
                
                    <Accordion.Collapse>
                        <Card.Body style={{backgroundColor: '#616161'}}>
                            {rolesAndAccomplishments}
                            <div style={{marginTop: '20px'}}>
                                <h3>Tech Stack:</h3>
                                {this.props.techStack.map((tech, index) => <TechStackCard key={index} tech={tech} />)}
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}

export default WorkProject;