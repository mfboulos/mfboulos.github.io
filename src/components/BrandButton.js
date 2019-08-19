import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BrandButton = (props) => {
    return (
        <a href={props.href}>
            <FontAwesomeIcon style={{height: 'auto', margin: '10px', ...props.style}} color='#ddfcfe' size='3x' icon={['fab', `${props.brand}`]} />
        </a>
    )
}

export default BrandButton