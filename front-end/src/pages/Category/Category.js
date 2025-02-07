import React from "react";
import "./Category.css";
import TopBar from "../../Components/TopBar/TopBar";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import CourseBox from "../../Components/courseBox/courseBox";
import Pagination from "../../Components/pagination/pagination";
function Category() {
  return (
    <>
      <TopBar />
      <NavBar />
      <section className="courses">
        <div className="container">
          <div className="courses-top-bar">
            <div className="courses-top-bar__right">
              <div className="courses-top-bar__row-btn courses-top-bar__icon--active">
                <i className="fas fa-border-all courses-top-bar__icon"></i>
              </div>
              <div className="courses-top-bar__column-btn">
                <i className="fas fa-align-left courses-top-bar__icon"></i>
              </div>

              <div className="courses-top-bar__selection">
                <span className="courses-top-bar__selection-title">
                  مرتب سازی پیش فرض
                  <i className="fas fa-angle-down courses-top-bar__selection-icon"></i>
                </span>
                <ul className="courses-top-bar__selection-list">
                  <li className="courses-top-bar__selection-item courses-top-bar__selection-item--active">
                    مرتب سازی پیش فرض
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس محبوبیت
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس امتیاز
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس آخرین
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس ارزان ترین
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس گران ترین
                  </li>
                </ul>
              </div>
            </div>

            <div className="courses-top-bar__left">
              <form action="#" className="courses-top-bar__form">
                <input
                  type="text"
                  className="courses-top-bar__input"
                  placeholder="جستجوی دوره ..."
                />
                <i className="fas fa-search courses-top-bar__search-icon"></i>
              </form>
            </div>
          </div>
          <div className="courses-content">
            <div className="container">
              <div className="row">
                <CourseBox
                  img={"/images//courses/fareelancer.png"}
                  title={"دوره پروژه محور متخصص جنگو"}
                  teacher={"رضا دولتی"}
                  price={1_000_000}
                  users={500}
                  rating={4.5}
                />
                <CourseBox
                  img={"/images//courses/fareelancer.png"}
                  title={"دوره پروژه محور متخصص جنگو"}
                  teacher={"رضا دولتی"}
                  price={1_000_000}
                  users={500}
                  rating={4.5}
                />
                <CourseBox
                  img={"/images//courses/fareelancer.png"}
                  title={"دوره پروژه محور متخصص جنگو"}
                  teacher={"رضا دولتی"}
                  price={1_000_000}
                  users={500}
                  rating={4.5}
                />
              </div>
            </div>
          </div>
          <Pagination/>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Category;
