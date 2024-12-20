import React from "react";
import "./aboutUs.css";
import SectionHeader from "../sectionHeadr/sectionHeader";
import AboutUsBox from "../aboutUsBox/aboutUsBox";

function AboutUs() {
  return (
    <>
      <div className="about-us">
        <div className="container">
          <SectionHeader
            title={"ما چه کمکی بهتون میکنیم؟"}
            description={
              "از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"
            }
          />
          <div className="container">
            <div className="row">
              <AboutUsBox
                icon="far fa-copyright"
                title="دوره های اختصاصی"
                desc="با پشتیبانی و کیفیت بالا ارائه میده !"
              />

              <AboutUsBox
                icon="fas fa-cogs"
                title="دوره های فنی"
                desc="آموزش تخصصی در حوزه های مختلف"
              />
              <AboutUsBox
                icon="fas fa-cogs"
                title="دوره های فنی"
                desc="آموزش تخصصی در حوزه های مختلف"
              />
              <AboutUsBox
                icon="fas fa-leaf"
                title="اجازه تدریس"
                desc="به هر مدرسی رو نمیده. چون کیفیت براش مهمه !"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
