import { lazy } from 'react';

// Lazy load the components
const Home = lazy(() => import('../../pages/Home/Home'));
const Courses = lazy(() => import('../../pages/Courses/Courses'));
const About = lazy(() => import('../../pages/About/About'));
const Blog = lazy(() => import('../../pages/Blog/Blog'));
const Contact = lazy(() => import('../../pages/Contact/Contact'));
const Notifications = lazy(() => import('../../pages/Notifications/Notifications'));
const VcProfile = lazy(() => import('../../pages/VcProfile/VcProfile'));
const Login = lazy(() => import('../../pages/LoginLogout/Login'));
const EmpSec = lazy(() => import('../EmployementSection/EmpSec'));
const ErrorPage = lazy(() => import('../../pages/ErrorPage/ErrorPage.jsx'));



export const myRoutes = [
  { path: '/', component: Home },
  { path: '/courses', component: Courses },
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
  { path: '/contact', component: Contact },
  { path: '/notifications', component: Notifications },
  { path: '/vcprofile', component: VcProfile },
  { path: '/login', component: Login },
  { path: '/emp', component: EmpSec },
  { path: '*', component: ErrorPage },
  
];


