import React from 'react';
import TechStackIcon from './TechStackIcon';

class TechStackCard extends React.Component {
    render() {
        return (
            <div style={{height: window.innerWidth/5, display: 'inline-block', margin: '10px', borderRadius: '5px', border: '1px solid #888888'}}>
                <TechStackIcon style={{height: '75%', ...this.props.style}} tech={TechStackIcon.niceName(this.props.tech)} />
                <div style={{height: '0px', margin: 'auto', width: '90%', borderTop: '1px solid #888888'}} />
                <div style={{height: '25%', width: '100%', textAlign: 'center'}}>
                    <div style={{fontSize: '3vw', padding: '1px 0'}}>
                        {TechStackIcon.niceName(this.props.tech)}
                    </div>
                </div>
            </div>
        )
    }
}

export default TechStackCard;