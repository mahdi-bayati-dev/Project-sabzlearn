import Index from "./pages/Index/Index";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Category from "./pages/Category/Category";
import Article from "./pages/Article/Article";

const Routes = [
  { path: '/', element: <Index /> },
  { path: '/course-info/:courseName', element: <CourseInfo /> },
  { path: '/category-info/:categoryName', element: <Category /> },
  { path: '/article-info/:articleName', element: <Article /> }
];

export default Routes;
