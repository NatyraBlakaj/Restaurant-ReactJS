import React, { Component } from 'react';
import Container from './Container';
import Slideshow from "./Slideshow";

 class Home extends Component {
    render() {
        return (
            <div>
                <Slideshow/>
                <Container/>
            </div>
        )
    }
}
export default Home;
