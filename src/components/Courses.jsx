import React from 'react';
import bike from '../images/mountain-bike.png';

import CourseLists from './CourseLists';

const Courses = ({courses}) => {
    console.log(courses)
  return (
    <>
      {courses.map((course) => (
          <CourseLists 
        key={course.id}
        course={course}
        />
      ))}
    </>
  );
}

export default Courses;