import React, { Component } from 'react';

 class MenyView extends Component {
    render() {
        const{id,img,emri,qmimi,lloji}=this.props;
        return (
            
            <div>
                <div className="ushqimetView">
                    <h2 className="emriUshqimit">{emri} </h2>
                    <p className="qmimiUshqimit">{qmimi} €</p>
                    <img src={img} alt=" "/>
                    <p>{lloji}</p>

                </div>
            </div>
        )
    }
}
export default MenyView;