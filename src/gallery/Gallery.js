import React, { Component } from 'react';
import './Gallery.css';
import gallery1 from '../gallery/gallery1.jpg';
import gallery2 from '../gallery/gallery2.jpg';
import gallery3 from '../gallery/gallery3.jpg';
import gallery4 from '../gallery/gallery4.jpg';
import gallery5 from '../gallery/gallery5.jfif';

 class Gallery extends Component {
    // this.state = [];

    render() {
        return (
            <div className="maindivg">
            <h1>GALLERY</h1>
            <div className="gallery">
                <div className="gallery-item">
                <img src={gallery5} alt="foto"></img>
                <h2>Curabitur</h2>
                <p>Cras in ante mattis, elementum nunc sed.</p>
                </div>
                <div className="gallery-item">
                <img src={gallery2} alt="foto"></img>
                <h2>Lorem ipsum</h2>
                <p>In ullamcorper gravida enim id pulvinar.</p>
                </div>
                <div className="gallery-item">
                <img src={gallery3} alt="foto"></img>
                <h2>Pellentesque</h2>
                <p>Maecenas efficitur nisi id sapien</p>
                </div>

            </div>
            <div className="gallery2">
                <div className="gallery-item2">
                <img src={gallery4} alt="foto"></img>
                <h2>Suspendisse</h2>
                <p>Mauris sit amet augue sit amet risus</p>
                </div>
                <div className="gallery-item2">
                <img src={gallery1} alt="foto"></img>
                <h2>Elementum</h2>
                <p>Mauris sit amet augue sit amet risus</p>
                </div>
            </div>
            </div>
        )
    }
}
export default Gallery;
