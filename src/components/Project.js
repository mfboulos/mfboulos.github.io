import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import GithubButton from './GithubButton';
import TechStackCard from './TechStackCard';

export default (props) => {
    let descAndDemo = window.innerWidth > 600
        ? <div style={{display: 'grid', gridTemplateColumns: '60% 10% 30%'}}>
            <div style={{gridColumnEnd: 2}}>{props.data.description}</div>
            {props.data.demo
            ? <img style={{maxWidth: '100%', minWidth: '150px' , marginLeft: 'auto', height: 'auto', gridColumnStart: 3}}
            alt='Demo'
            src={'https://raw.githubusercontent.com/mfboulos/'
            + `${props.project.name}/${props.project.default_branch}/${props.data.demo}`} />
            : null}
        </div>
    : <div>
        {props.data.demo
        ? <img style={{maxWidth: '100%', minWidth: '150px' , marginLeft: 'auto', height: 'auto', marginBottom: '20px'}}
        alt='Demo'
        src={'https://raw.githubusercontent.com/mfboulos/'
        + `${props.project.name}/${props.project.default_branch}/${props.data.demo}`} />
        : null}
        <div>{props.data.description}</div>
    </div>

    let featuresAndStack = window.innerWidth > 600
    ? <div style={{marginTop: '20px', display: 'grid', gridTemplateColumns: '45% 10% 45%'}}>
        <div style={{gridColumnEnd: 2}}>
            <h3>Features:</h3>
            {props.data.features.map((feature, index) => <li key={index}>{feature}</li>)}
        </div>
        <div style={{gridColumnStart: 3}}>
            <h3>Tech Stack:</h3>
            {props.data.stack.map((t, index) => <TechStackCard key={index} tech={t} />)}
        </div>
    </div>
    : <div>
        <div style={{marginTop: '20px'}}>
            <h3>Features:</h3>
            {props.data.features.map((feature, index) => <li key={index}>{feature}</li>)}
        </div>
        <div style={{marginTop: '20px'}}>
            <h3>Tech Stack:</h3>
            {props.data.stack.map((t, index) => <TechStackCard key={index} tech={t} />)}
        </div>
    </div>

    return (
        <Accordion style={{padding: '3px'}} defaultActiveKey='abc'>
            <Card style={{borderRadius: '5px', backgroundColor: '#444444'}}>
                <Accordion.Toggle style={{cursor: 'pointer'}} as={Card.Header} variant='link' eventKey={props.id}>
                    <div style={{fontSize: 20}}>{props.data.displayName}</div>
                    <div style={{color: '#dddddd',fontSize: 14}}>{props.project.description}</div>
                </Accordion.Toggle>
            
                <Accordion.Collapse>
                    <Card.Body style={{backgroundColor: '#616161'}}>
                        {descAndDemo}
                        {featuresAndStack}
                        <div style={{marginTop: '20px'}}>
                            <GithubButton url={props.project.html_url} />
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}