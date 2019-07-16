import React from 'react';
import { NavLink as ReactNavLink } from 'react-router-dom';

class NavLink extends React.Component {
    render() {
        return <ReactNavLink {...this.props} activeStyle = {{ font: 'bolder' }}/>
    }
}

export default NavLink;