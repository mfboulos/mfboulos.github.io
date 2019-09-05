import React from 'react';
import loading from '../static/Infinity-3.7s-200px.svg';

const LoadingIcon = (props) => 
    <object style={{width: '35%', position: 'absolute' , top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
                    type='image/svg+xml'
                    data={loading}>Loading icon</object>

export default LoadingIcon