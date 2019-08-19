import React from 'react';
import TechStackIcon from './TechStackIcon';

const TechStackCard = (props) => {
    return (
        <div style={{height: '130px', display: 'inline-block', borderRadius: '5px', border: '1px solid #888888', margin: '10px'}}>
            <TechStackIcon style={{...props.style}} tech={props.tech} />
            <div style={{height: '0px', margin: 'auto', width: '90%', borderTop: '1px solid #888888'}} />
            <div style={{height: '30px', textAlign: 'center'}}>{props.tech}</div>
        </div>
    )
}

export default TechStackCard;