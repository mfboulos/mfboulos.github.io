import React from 'react';
import TechStackIcon from './TechStackIcon';

class TechStackCard extends React.Component {
    render() {
        let isWide = window.innerWidth > window.innerHeight
        let minDim = Math.min(window.innerWidth, window.innerHeight)

        return (
            <div style={{height: minDim / 5, display: 'inline-block', margin: '10px', borderRadius: '5px', border: '1px solid #888888'}}>
                <TechStackIcon style={{height: '75%', padding: minDim / 50, ...this.props.style}} tech={TechStackIcon.niceName(this.props.tech)} />
                <div style={{height: '0px', margin: 'auto', width: '90%', borderTop: '1px solid #888888'}} />
                <div style={{height: '25%', width: '100%', textAlign: 'center'}}>
                    <div style={{fontSize: isWide ? '3vh' : '3vw', padding: '1px 0'}}>
                        {TechStackIcon.niceName(this.props.tech)}
                    </div>
                </div>
            </div>
        )
    }
}

export default TechStackCard;