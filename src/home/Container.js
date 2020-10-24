import React, { Component } from 'react';
import './Container.css';
import foto1 from '../home/foto1.jpg';


 class Container extends Component {
    render() {
        return (
            
                <div className="containerdiv">

                
                <div className="more-info">

                    <div className="info">
                        <h1>YOUR FOOD SHOP</h1>
                        <h3>ANOTHER BACER</h3>
                        <p>Pizza responsive web template is provided by templatemo website.
                        Feel free to download, adapt, and use this template for your websites.
                        Credit goes to Pixabay for images used in this template</p>
                        
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
                        
                        <p>Proin enim sem, ultricies sit amet convallis nec, sodales quis augue. Duis 
                        consequat felis ac justo luctus, a cursus tellus pharetra. In ullamcorper gravida enim id pulvinar.</p>
                    </div>
                  
                    <img src={foto1} alt="foto"></img>
                  
                
            </div>

            </div>
        )
    }
}
export default Container;
