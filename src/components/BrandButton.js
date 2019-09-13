import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BrandButton = (props) => {
    return (
        <a href={props.href}>
            <FontAwesomeIcon style={{margin: '10px', ...props.style}} color='#ddfcfe' size='2x' icon={['fab', `${props.brand}`]} />
        </a>
    )
}

export default BrandButton