import React from "react";
import SectionHeader from "../sectionHeadr/sectionHeader";
import ArticlesBox from "../ArticlesBox/ArticlesBox";
function LastArticles() {
  return (
    <>
      <section className="articles">
        <div className="container">
          <SectionHeader
            title={"جدیدترین مقاله ها"}
            description={"پیش به سوی ارتقای دانش"}
            btnTitle={"تمامی مقاله ها"}
          />
          <div className="articles__content">
            <div className="row">
                <ArticlesBox title={'نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون'} desc={'زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...'} cover={"images/blog/3.jpg"}/>
                <ArticlesBox title={'نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون'} desc={'زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...'} cover={"images/blog/3.jpg"}/>
                <ArticlesBox title={'نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون'} desc={'زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...'} cover={"images/blog/3.jpg"}/>


            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LastArticles;
