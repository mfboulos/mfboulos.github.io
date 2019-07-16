import React from 'react';

class Project extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {this.props.projectProps.id}
                    </button>
                    </h5>
                </div>
            
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        {this.props.projectProps.desc}
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;