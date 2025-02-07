import Index from "./pages/Index/Index";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Category from "./pages/Category/Category";
import ArticleInfo from "./pages/ArticleInfo/Articleinfo";
import Courses from "./pages/Courses/Courses";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const Routes = [
  { path: '/', element: <Index /> },
  { path: '/course-info/:courseName', element: <CourseInfo /> },
  { path: '/category-info/:categoryName', element: <Category /> },
  { path: '/article-info/:articleName', element: <ArticleInfo /> },
  { path: '/courses', element: <Courses /> },
  { path: '/login', element: < Login/> },
  { path: '/register', element: < Register /> },
];

export default Routes;
