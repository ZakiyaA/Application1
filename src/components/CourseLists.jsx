import React from 'react'
import { AiFillStar } from "react-icons/ai";


const CourseLists = ({course}) => {
    console.log(course)
    let badgeValue ;
    if(course.openSpots === 0) {
        badgeValue = 'SOLD OUT'
    } else if (course.location === 'Online'){
        badgeValue = 'Online'
    }
console.log(badgeValue)
    return (
        <div className='card'>
          {badgeValue && <div className='badge'>{badgeValue}</div>}
            <img src={require(`../images/${course.img}`)}  alt='img' />
            <div className='img-caption'>
            <span className='course '><AiFillStar style={{color: 'red'}} /> <strong> {course.rating}</strong> (6) • {course.location}</span>
            </div>
            <div className='rating'>
                <p className='course name'>{course.caption}</p>
                <p className='course price'> <strong>From ${course.price}</strong> / person</p>
            </div>
        </div>
      )
    }


export default CourseLists;