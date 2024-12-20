import React from 'react'
import Header from '../../Components/Header/Header'
import LastCourse from '../../Components/LastCourse/LastCourse'
import AboutUs from '../../Components/aboutUs/aboutUs'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import PreSaleCourses from '../../Components/PreSaleCourses/PreSaleCourses'
import LastArticles from '../../Components/LastArticles/LastArticles'
import Footer from '../../Components/Footer/Footer'

import './Index.css'

export default function Index() {
  return (
    <>
    
    <Header/>
    <LastCourse/>
    <AboutUs/>
    <PopularCourses/>
    <PreSaleCourses/>
    <LastArticles/>
    <Footer/>

    </>

  )
}
