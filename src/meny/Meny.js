import React, {Component} from 'react';
import MenyView from './MenyView';
import Button from 'react-bootstrap/Button';
import './Meny.css';

class Meny extends Component {
    state = {
        ushqimiFiltruar: [],
        ushqimet: [
            {
                id: 1, img: '/img/image1.jfif',
                emri: 'CHICKEN CRUNCH', qmimi: '6.50', lloji: 'menyKryesore'
            },
            {
                id: 2, img: '/img/image6.jpg',
                emri: 'ROASTED FISH', qmimi: '7.50', lloji: 'menyKryesore'
            },
            {
                id: 3, img: '/img/image3.jfif',
                emri: 'CHICKEN CRUNCH', qmimi: '4.00', lloji: 'menyKryesore'
            },
            {
                id: 4, img: '/img/image4.jpg',
                emri: 'CARROT CAKE', qmimi: '2.50', lloji: 'desert'
            },
            {
                id: 5, img: '/img/image17.jpg',
                emri: 'VEGAN BREAKFAST', qmimi: '4.50', lloji: 'mengjes'
            },
            {
                id: 6, img: '/img/image16.jpg',
                emri: 'BACKEDD EGGS', qmimi: '3.50', lloji: 'mengjes'
            },
            {
                id: 7, img: 'img/image7.jpg',
                emri: 'MEXICAN BEEF', qmimi: '6.00', lloji: 'menyKryesore'
            },
            {
                id: 8, img: '/img/image8.jpg',
                emri: 'BANANA PUDDING', qmimi: '2.00', lloji: 'desert'
            },
            {
                id: 9,
                img: '/img/image9.jpg',
                emri: 'GREEK SALAD', qmimi: '3.50', lloji: 'mengjes'
            },
            {
                id: 10,
                img: '/img/image10.jpg',
                emri: 'CHICKEN SOUP', qmimi: '2.50', lloji: 'paragjelle'
            },
            {
                id: 11,
                img: '/img/image11.jpg',
                emri: 'BROCCOLI SOUP', qmimi: '3.00', lloji: 'paragjelle'
            },
            {
                id: 12,
                img: '/img/image12.jpg',
                emri: 'VEGETABLE SOUP', qmimi: '4.20', lloji: 'paragjelle'
            },
            {
                id: 13,
                img: '/img/image13.jfif',
                emri: 'CREAM OF MUSHURUMS', qmimi: '3.70', lloji: 'paragjelle'
            },
            {
                id: 14,
                img: '/img/image14.jfif',
                emri: 'FRUIT SALAD  ', qmimi: '2.50', lloji: 'desert'
            },
            {
                id: 15,
                img: '/img/image15.jpg',
                emri: 'PANCAKE', qmimi: '4.50', lloji: 'mengjes'
            },
        ],

    }

    showElement = (a) => {
        this.setState({
            ushqimiFiltruar: this.state.ushqimet.filter(item => item.lloji === a)
        })
    }

    showAllElements = () => {
        this.setState({
            ushqimiFiltruar:this.state.ushqimet
        })
    }

    componentDidMount() {
        this.setState({
            ushqimiFiltruar: this.state.ushqimet
        });
    }

    render() {
        const {ushqimet} = this.state;
        return (
            <div className="menydiv">

                <div className="butonat">
                    <button className="btn" onClick={() => {
                        this.showElement('mengjes')
                    }}>Mengjes
                    </button>

                    <Button variant="danger" onClick={() => {
                        this.showElement('paragjelle')
                    }}>
                        Paragjelle
                    </Button>

                    <button className="btn" onClick={() => {
                        this.showElement('menyKryesore')
                    }}>Meny kryesore
                    </button>

                    <button className="btn" onClick={() => {
                        this.showElement('desert')
                    }}>Desert
                    </button>

                    <button className="btn" onClick={() => {
                        this.showAllElements()
                    }}>All Food
                    </button>

                </div>

                {this.state.ushqimiFiltruar?.map(item => (
                    <MenyView key={item.id} img={item.img} emri={item.emri} qmimi={item.qmimi}/>
                ))}
            </div>
        )
    }
}

export default Meny;