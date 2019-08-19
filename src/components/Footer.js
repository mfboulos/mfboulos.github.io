import React from 'react';
import BrandButton from './BrandButton';

const Footer = (props) => {
    return (
        <div style={{backgroundColor: '#1a1a1a', position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
            <div style={{marginLeft: '2.5%', marginRight: '2.5%', width: '95%'}}>
                <div style={{width: '90%', height: 0, margin: 'auto', borderTop: '1px solid #ddfcfe'}} />
                <div style={{float: 'left'}}>
                    <div style={{marginTop: '7px', marginBottom: '3px'}}>mboulos95@gmail.com</div>
                    <div style={{marginTop: '3px', marginBottom: '7px'}}>916 • 230 • 0589</div>
                </div>
                <BrandButton style={{float: 'right'}} href='https://www.linkedin.com/in/michaelboulos/' brand='linkedin' />
                <BrandButton style={{float: 'right'}} href='https://github.com/mfboulos' brand='github' />
                <BrandButton style={{float: 'right'}} href='https://stackoverflow.com/users/11379566/tcfp' brand='stack-overflow' />
                <BrandButton style={{float: 'right'}} href='https://www.hackerrank.com/mboulos95' brand='hackerrank' />
            </div>
        </div>
    )
}

export default Footer;