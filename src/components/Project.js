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
                            {/* {this.props.display.description} */}
                            <div style={{display: 'grid', gridTemplateColumns: '80% 20%'}}>
                                <img style={{maxWidth: '100%', minWidth: '150px' , height: 'auto', gridColumnStart: 2}} src={this.props.display.img}></img>
                            </div>
                            <div style={{marginTop: '10px'}}>
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