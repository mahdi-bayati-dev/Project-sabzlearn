import React from "react";
import Footer from "../../Components/Footer/Footer";
import TopBar from "../../Components/TopBar/TopBar";
import NavBar from "../../Components/NavBar/NavBar";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CourseBox from "../../Components/courseBox/courseBox";
import "./Courses.css";

function Courses() {
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
    <>
      <TopBar />
      <NavBar />
      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "/" },
          {
            id: 2,
            title: "تمامی دوره ها",
            to: "/courses",
          },
        ]}
      />
      <div className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="row">
              {courses.map((course) => (
                <CourseBox key={course.id} {...course} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="courses-pagination">
        <ul className="courses__pagination-list">
          <li className="courses__pagination-item">
            <a href="/" className="courses__pagination-link">
              <i className="fas fa-long-arrow-alt-right courses__pagination-icon"></i>
            </a>
          </li>
          <li className="courses__pagination-item">
            <a href="/" className="courses__pagination-link">
              1
            </a>
          </li>
          <li className="courses__pagination-item">
            <a href="/" className="courses__pagination-link">
              2
            </a>
          </li>
          <li className="courses__pagination-item">
            <a
              href="/"
              className="courses__pagination-link courses__pagination-link--active"
            >
              3
            </a>
          </li>
          <li className="courses__pagination-item">
            <a href="/" className="courses__pagination-link">
              <i className="fas fa-long-arrow-alt-left courses__pagination-icon"></i>
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Courses;
