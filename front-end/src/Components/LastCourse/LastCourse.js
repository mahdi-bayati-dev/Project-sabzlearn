import React from "react";
import "./LastCourse.css";
import SectionHeader from "../sectionHeadr/sectionHeader";
import CourseBox from "../courseBox/courseBox";


function LastCourse() {
  const courses = [
    {
      id: 1,
      img: "/images//courses/fareelancer.png",
      title: "دوره پروژه محور متخصص جنگو",
      teacher: "رضا دولتی",
      rating: 4.5,
      price: "1,000,000",
      users: 500,
    },
    {
        id: 2,
        img: "/images//courses/fareelancer.png",
        title: "دوره پروژه محور متخصص جنگو",
        teacher: "رضا دولتی",
        rating: 4.5,
        price: "1,000,000",
        users: 500,
      },
      {
        id: 3,
        img: "/images//courses/fareelancer.png",
        title: "دوره پروژه محور متخصص جنگو",
        teacher: "رضا دولتی",
        rating: 4.5,
        price: "1,000,000",
        users: 500,
      },
      {
        id: 4,
        img: "/images//courses/fareelancer.png",
        title: "دوره پروژه محور متخصص جنگو",
        teacher: "رضا دولتی",
        rating: 4.5,
        price: "1,000,000",
        users: 500,
      },
      {
        id: 5,
        img: "/images//courses/fareelancer.png",
        title: "دوره پروژه محور متخصص جنگو",
        teacher: "رضا دولتی",
        rating: 4.5,
        price: "1,000,000",
        users: 500,
      },
      {
        id: 6,
        img: "/images//courses/fareelancer.png",
        title: "دوره پروژه محور متخصص جنگو",
        teacher: "رضا دولتی",
        rating: 4.5,
        price: "1,000,000",
        users: 500,
      },
      
    
  ];

  return (
    <div className="courses">
      <div className="container">
        <SectionHeader
          title={"جدیدترین دوره ها"}
          description={"سکوی پرتاپ شما به سمت موفقیت"}
          link="/"
          btnTitle={"تمامی دوره ها"}
          btnHref={'/courses'}
        />
        <div className="courses-content">
          <div className="row">
            {courses.map((course) => (
              <CourseBox key={course.id} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastCourse;
