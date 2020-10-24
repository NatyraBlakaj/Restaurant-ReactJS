import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './header/Header';
import Home from './home/Home';
import Footer from './home/Footer';
import Gallery from './gallery/Gallery';
import Contact from './contact/Contact';
import Meny from './meny/Meny';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/gallery" component={Gallery}/>
                    <Route exact path="/meny" component={Meny}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
                <Footer/>

            </div>
        </Router>
    );
}

export default App;
