import React from 'react';
import './index.css';
import Nav from './components/Nav';
import Testimonial from './components/Testimonial';
import Courses from './components/Courses';
// import vector from '../images/Vector.png'

function App() {
  
  const courses = [
    {
    id: 1,
    caption: 'Life lessons with Katie Zaferes',
    img: 'swimming.png',
    price: 136, 
    rating: 5,
    location: 'Online',
    openSpots: 0
  }, 
  {
    id: 2,
    caption: 'Learn wedding photography',
    img: 'wedding.png',
    price: 200,
    rating: 4,
    location: 'Norway',
    openSpots: 2
  },
  {
    id: 3,
    caption: 'Life lessons with Katie Zaferes',
    img: 'mountain-bike.png',
    price: 136, 
    rating: 5,
    location: 'Online',
    openSpots: 5
  },
];

  return (
    <div className="App">
      <div className='container'>
        <Nav />
        <Testimonial />
        <div className='card-lists'>
          <Courses courses={courses}/>
        </div>
    </div>
    </div>
  );
}

export default App;
