import React from 'react';
import TechStackIcon from './TechStackIcon';

class TechStackCard extends React.Component {
    render() {
        return (
            <div style={{height: '130px', display: 'inline-block', borderRadius: '5px', border: '1px solid #888888', margin: '10px'}}>
                <TechStackIcon style={{height: '100px', ...this.props.style}} tech={TechStackIcon.niceName(this.props.tech)} />
                <div style={{height: '0px', margin: 'auto', width: '90%', borderTop: '1px solid #888888'}} />
                <div style={{height: '30px', textAlign: 'center'}}>{TechStackIcon.niceName(this.props.tech)}</div>
            </div>
        )
    }
}

export default TechStackCard;