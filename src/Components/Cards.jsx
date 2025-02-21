import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  const getCourses = () => {
    let allCourses = [];
    if (courses && typeof courses === 'object') {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
    }
    return allCourses;
  };

  return (
    <div>
         { getCourses().map((course) => {
           return <Card course = {course}/>
          })}
        </div>
    )
}

export default Cards;
