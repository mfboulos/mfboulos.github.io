import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import GithubButton from './GithubButton'

class Project extends React.Component {
    render() {
        return (
            <Accordion style={{padding: '3px'}} defaultActiveKey='abc'>
                <Card style={{borderRadius: '5px', backgroundColor: '#444444'}}>
                    <Accordion.Toggle style={{cursor: 'pointer'}} as={Card.Header} variant='link' eventKey={this.props.id}>
                        <div style={{fontSize: 20}}>{this.props.project.name}</div>
                        <div style={{color: '#dddddd',fontSize: 14}}>{this.props.project.description}</div>
                    </Accordion.Toggle>
                
                    <Accordion.Collapse>
                        <Card.Body style={{backgroundColor: '#616161'}}>
                            <div style={{display: 'grid', gridTemplateColumns: '70% 10% 20%'}}>
                                <div style={{gridColumnEnd: 2}}>{this.props.display.description}</div>
                                <img style={{maxWidth: '100%', minWidth: '150px' , height: 'auto', gridColumnStart: 3}}
                                src={'https://raw.githubusercontent.com/mfboulos/'
                                + `${this.props.project.name}/${this.props.project.default_branch}/${this.props.display.demo}`} />
                            </div>
                            <div style={{marginTop: '20px', display: 'grid', gridTemplateColumns: '45% 10% 45%'}}>
                                <div style={{gridColumnEnd: 2}}>
                                    <h3>Features:</h3>
                                    {this.props.display.features.map(feature => <li>{feature}</li>)}
                                </div>
                                <div style={{gridColumnStart: 3}}>
                                    <h3>Tech Stack:</h3>
                                    {this.props.display.stack.map(t => <li>{t}</li>)}
                                </div>
                            </div>
                            <div style={{marginTop: '20px'}}>
                                <GithubButton url={this.props.project.html_url} />
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}

export default Project;