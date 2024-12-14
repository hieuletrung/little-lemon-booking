import React from 'react';
import orderIcon from './img/order.png';

function Specials() {
  const specials = [
    {
      img: 'path/to/image1.jpg',
      title: 'Special Item 1',
      price: '$10.99',
      description: 'Description for special item 1.',
      orderLink: '#'
    },
    {
      img: 'path/to/image2.jpg',
      title: 'Special Item 2',
      price: '$12.99',
      description: 'Description for special item 2.',
      orderLink: '#'
    },
    {
      img: 'path/to/image3.jpg',
      title: 'Special Item 3',
      price: '$9.99',
      description: 'Description for special item 3.',
      orderLink: '#'
    }
  ];

  return (
    <div className="specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <button className="specials-button">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specials.map((special, index) => (
          <div className="special-item" key={index}>
            <img src={special.img} alt={special.title} />
            <h3>{special.title} - {special.price}</h3>
            <p>{special.description}</p>
            <a href={special.orderLink} className="order-link">
              Order for Delivery
              <img src={orderIcon} alt="Order Icon"/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specials;