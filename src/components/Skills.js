import React from 'react';
import FlipMove from 'react-flip-move';
import TechStackIcon from './TechStackIcon';
import TechStackCard from './TechStackCard';

class Skills extends React.Component {
    allSkills = Object.keys(TechStackIcon.icons).map((icon, index) => {
        return <TechStackCard key={index} tech={icon} />
    })

    constructor(props) {
        super()
        this.state = {currentFilter: null}
        this.onButtonClick = this.onButtonClick.bind(this)
    }

    onButtonClick(filter) {
        let handler = function() {
            if (this.state.currentFilter === filter) {
                this.setState({currentFilter: null})
            }
            else {
                this.setState({currentFilter: filter})
            }
        }
        handler = handler.bind(this)
        return handler
    }

    render() {
        let buttons = ['Programming Language', 'Database', 'DevOps', 'Frameworks, Libraries, and API\'s', 'Testing', 'IDE']
        if (window.innerWidth < 765) {
            buttons = [buttons.slice(0, buttons.length / 2), buttons.slice(buttons.length / 2, buttons.length)]
        }
        else {
            buttons = [buttons]
        }

        return (
            <div>
                {buttons.map(list =>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
                        {list.map(c => 
                            <div className='cButton' style={{margin: 'auto',
                            backgroundColor: c === this.state.currentFilter ? 'rgba(224, 252, 254, 0.15)' : null}}
                            onClick={this.onButtonClick(c)}>
                                <div style={{padding: '5px', userSelect: 'none'}}>{c}</div>
                            </div>
                        )}
                    </div>
                )}
                <FlipMove>
                    {this.state.currentFilter
                        ? this.allSkills.filter(s => TechStackIcon.getCategory(s.props.tech).includes(this.state.currentFilter))
                        : this.allSkills}
                </FlipMove>
            </div>
        )
    }
}
export default Skills