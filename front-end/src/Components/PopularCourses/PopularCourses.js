import React from "react";
import "./PopularCourses.css";
import SectionHeader from "../sectionHeadr/sectionHeader";
function PopularCourses() {
  return (
    <>
      <div className="popular">
        <div className="container">
          <SectionHeader
            title={"محبوب ترین دوره ها"}
            description={"دوره های محبوب بر اساس نظر دانشجویان"}
          />
        </div>
      </div>
    </>
  );
}

export default PopularCourses;
