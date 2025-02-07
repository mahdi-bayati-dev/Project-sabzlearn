import React from "react";
import "./PreSaleCourses.css";
import SectionHeader from "../sectionHeadr/sectionHeader";

function PreSaleCourses() {
  return (
    <>
      <div className="popular">
        <div className="container">
          <SectionHeader
            title={"دوره های پیش فروش"}
            description={"دوره های محبوب بر اساس نظر دانشجویان"}
          />
        </div>
      </div>
    </>
  );
}

export default PreSaleCourses;
