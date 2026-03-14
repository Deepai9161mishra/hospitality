import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutUsPage';
import AppointmentForm from '../pages/AppointmentForm';
import ServicesPage from '../pages/ServicesPage';
import ServiceDetails from '../components/ServiceDetails';
import DepartmentsPage from '../pages/DepartmentsPage';
import DoctorsPage from '../pages/DoctorsPage';
import DoctorDetailsPage from '../components/DoctorDetailsPage';
import NotFoundPage from '../pages/NotFoundPage.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: "about",
                element: <AboutPage/>
            },
            {
                path: "appointment",
                element: <AppointmentForm/>
            },
            {
                path: "services",
                element: <ServicesPage/>,
            },
            {
                path: "services/:slug",
                element: <ServiceDetails/>
            },
            {
                path: "departments",
                element: <DepartmentsPage/>,
            },
            {
                path: "departments/:slug",
                element: <ServiceDetails/>
            },
            {
                path: "doctors",
                element: <DoctorsPage/>,
            },
            {
                path: "doctors/:slug",
                element: <DoctorDetailsPage/>,
            },
            {
                path: "*",
                element: <NotFoundPage/>,
            }
        ],
    },
]);

export default router;
