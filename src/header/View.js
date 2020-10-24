import React, { Component } from 'react'

 class View extends Component {
    render() {
        return (
            
            <div>
                <div className="maindiv">
                    <ul className="lista">
                    <li>{this.props.name}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default View;
