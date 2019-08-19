import React from 'react';

const GithubButton = (props) => {
    return (
        <button style={{backgroundColor: '#ffffff', fontWeight: 'bold', margin: '5px', height: '40px'}}
        onClick={() => {window.location.href = `${props.url}`}}>
            Check out the source
            <img alt='Github Icon' style={{padding: '5px', height: '100%'}} src='https://image.flaticon.com/icons/svg/25/25231.svg'/>
        </button>
    )
}

export default GithubButton