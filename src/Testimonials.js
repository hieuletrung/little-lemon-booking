import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      rating: '★★★★★',
      name: 'John Doe',
      text: 'This is an amazing service!',
      img: 'path/to/image1.jpg'
    },
    {
      rating: '★★★★☆',
      name: 'Jane Smith',
      text: 'I love the quality and the service.',
      img: 'path/to/image2.jpg'
    },
    {
      rating: '★★★★★',
      name: 'Sam Wilson',
      text: 'Highly recommend to everyone.',
      img: 'path/to/image3.jpg'
    },
    {
      rating: '★★★★★',
      name: 'Anna Johnson',
      text: 'A wonderful experience from start to finish.',
      img: 'path/to/image4.jpg'
    }
  ];

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <p>{testimonial.rating}</p>
            <img src={testimonial.img} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;