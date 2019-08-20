import React from 'react';
import TechStackIcon from './TechStackIcon';
import LoadingIcon from './Loading';

class Landing extends React.Component {
    icons = []

    engineer = <div style={{fontSize: '9vw', fontFamily: 'monospace', position: 'absolute',
    top: '20%', left: '5%', userSelect: 'none'}}>Engineer</div>

    mathematician = <div style={{fontSize: '9vw', fontFamily: 'monospace', position: 'absolute',
    top: '50%', right: '5%', userSelect: 'none'}}>Mathematician</div>

    constructor(props) {
        super()
        this.state = {isLoading: true, dummy: false}
        this.refreshIcons = this.refreshIcons.bind(this)
    }

    overlap(i1, i2) {
        let i1Left = i1.props.style.left
        let i1Top = i1.props.style.top

        let i2Left = i2.props.style.left
        let i2Top = i2.props.style.top

        return !(i2Left > i1Left + this.size
            || i2Left + this.size < i1Left
            || i2Top > i1Top + this.size
            || i2Top + this.size < i1Top)
    }

    placeIcons(width, height) {
        let icons = []
        let size = width/10
        let allIcons = Object.keys(TechStackIcon.icons).map((icon, index) => 
            <div style={{position: 'absolute', width: `${size}px`, height: `${size}px`}}>
                <TechStackIcon style={{width: '100%', height: 'auto', opacity: '0.1'}} key={index} tech={icon} title=''/>
            </div>
        )

        let i = 100000
        for (let icon of allIcons) {
            do {
                icon.props.style.left = Math.floor(Math.random() * (width - size))
                icon.props.style.top = 50 + Math.floor(Math.random() * (0.9*height - size - 70))
            } while (icons.some(i => this.overlap(i, icon)) && i-- > 0)

            icons.push(icon)
        }

        for (let icon of icons) {
            icon.props.style.left = String(icon.props.style.left/width*100)+'%'
        }

        this.icons = icons
    }

    componentDidMount() {
        this.setState({isLoading: false})
    }

    refreshIcons() {
        this.setState({dummy: !this.state.dummy})
    }

    render () {
        this.placeIcons(window.innerWidth, window.innerHeight)
        return (
            <div>
                {this.state.isLoading ? <LoadingIcon/> : this.icons}
                {this.state.isLoading ? null : this.engineer}
                {this.state.isLoading ? null : this.mathematician}
                <div style={{cursor: 'pointer', position: 'absolute', bottom: '90px', left: '20px',
                outline: '3px solid #ddfcfe'}}
                onClick={this.refreshIcons}>
                    <div style={{padding: '5px', userSelect: 'none'}}>Shuffle!</div>
                </div>
            </div>
        )
    }
}

export default Landing