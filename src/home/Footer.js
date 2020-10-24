import React from 'react'

 function Footer(props) {
    const numbers = [
        
    (<i className="fab fa-instagram"/>),
    (<i className="fab fa-facebook-f"/>),
    (<i className="fab fa-twitter"/>),
    (<i className="fab fa-google"/>),
    (<i className="fab fa-apple"/>),
    (<i className="fab fa-pinterest"/>),
    (<i className="fab fa-youtube"/>)
    ];

    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
        <div className="footeri">
        <h4>Copyright © 2084 Company Name</h4>
        <ul>{listItems}</ul>
        </div>
    );
}

export default Footer;
