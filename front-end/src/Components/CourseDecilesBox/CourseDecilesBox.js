import React from "react";
import "./CourseDecilesBox.css";
function CourseDecilesBox({title , text , icon}) {
  return (
    <>
      <div class="col-4">
        <div class="course-boxes__box">
          <div class="course-boxes__box-right">
            <i class={`course-boxes__box-right-icon fas fa-${icon}`}></i>
          </div>
          <div class="course-boxes__box-left">
            <span class="course-boxes__box-left-title">{title}</span>
            <span class="course-boxes__box-left--subtitle">{text}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDecilesBox;
