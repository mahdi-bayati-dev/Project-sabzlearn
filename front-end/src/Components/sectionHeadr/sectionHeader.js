import React from "react";
import "./sectionHeader.css";

function SectionHeader({ title, description, btnTitle , link="/" }) {
  return (
    <div className="courses-header">
      <div className="courses-header__right">
        <span className="courses-header__title title">{title}</span>
        <span className="courses-header__text">{description}</span>
      </div>
      {btnTitle  ? (
        <div className="courses-header__left">
          <a href={link} className="courses-header__link">
            {btnTitle}
            <i className="fas fa-arrow-left courses-header__icon"></i>
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default SectionHeader;
