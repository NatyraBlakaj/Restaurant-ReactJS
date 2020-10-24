import React, {Component} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css';

const slideImages = [
    'img/slide1.jpg',
    'img/slide2.jpg',
    'img/slide3.jpg'
];

class Slideshow extends Component {
    render() {
        return (
            <div className="slide-container">
                <Slide>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>

                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>

                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>

                        </div>
                    </div>
                </Slide>
            </div>
        );
    }
}

export default Slideshow;