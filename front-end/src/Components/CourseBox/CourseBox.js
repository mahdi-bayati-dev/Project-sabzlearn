import React from "react";
import "./courseBox.css";

function CourseBox({ img, title, teacher, rating, price, users }) {
  return (
    <div className="col-4">
      <div className="course-box">
        <a href="/">
          <img src={img} alt="Course" className="course-box__img" />
        </a>
        <div className="course-box__main">
          <a href="/" className="course-box__title">
            {title}
          </a>
          <div className="course-box__rating-teacher">
            <div className="course-box__teacher">
              <span>{teacher}</span>
            </div>
            <div className="course-box__rating">
              <span>{rating}</span>
            </div>
          </div>
          <div className="course-box__status">
            <span>{price}</span>
            <span>{users}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseBox;
