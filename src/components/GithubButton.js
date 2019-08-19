import React from 'react';
import { Link } from 'react-router-dom';

const GithubButton = (props) => {
    return (
        <Link to={props.url}>
            <button style={{backgroundColor: '#ffffff', fontWeight: 'bold', margin: '5px', height: '40px'}}>
                Check out the source
                <img style={{padding: '5px', height: '100%'}} src='https://image.flaticon.com/icons/svg/25/25231.svg'/>
            </button>
        </Link>
    )
}

export default GithubButton