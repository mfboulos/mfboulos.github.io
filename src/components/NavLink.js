import React from 'react';
import { NavLink as ReactNavLink } from 'react-router-dom';

class NavLink extends React.Component {
    constructor() {
        super();
        this.state = {hover: false};
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState({hover: !this.state.hover});
    }

    render() {
        var navStyle = {'color': '#31cbce', 'textDecoration': 'none'};
        if (this.state.hover) {
            navStyle.color = '#72f4fc';
        }
        
        return <ReactNavLink {...this.props}
            style = {navStyle}
            activeStyle = {{ 'color': '#b8fafe' }}
            onMouseEnter = {this.toggleHover}
            onMouseLeave = {this.toggleHover}/>
    }
}

export default NavLink;