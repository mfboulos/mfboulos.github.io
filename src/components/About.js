import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <div style={{fontSize: 20, paddingLeft: window.innerWidth/20, paddingRight: window.innerWidth/20}}>
                <blockquote>
                    Eccentric backend-focused software engineer pushing the
                    boundaries of performance and the impossible, building great
                    things with great people.
                </blockquote>
                <div className='bio'>
                    I have always been a fiend for challenges,
                    puzzles, and marginal optimizations. This passion initially
                    drove me to studying math, but then I had the opportunity to
                    print <code>"Hello World!"</code> and my career trajectory
                    changed instantly. 
                </div>
                <div className='bio'>
                    The transition was easy, fluid, and meaningful;
                    I kicked off the ground running, and got to work with and mentor
                    some of the brightest upcoming minds in computer science. I am a
                    serious believer in the value of discourse and surrounding myself
                    with people I can learn from.
                </div>
                <blockquote>
                    If you are the smartest person in the room, then you are in the wrong room.
                </blockquote>
                <div className='bio'>
                    As a software engineer, I take full advantage of my
                    mathematical background to model solutions instantly. I take pride
                    in my work, and I am very excited to work with other engineers
                    that share my passion for challenges and excellence.
                </div>
            </div>
        )
    }
}

export default About;