import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import Testimonial from './pages/Testimonial';
import Gallery from './pages/Gallery';
import Banner from './pages/Banner';
import ProductImage from './pages/ProductImage';
import InteriorSolutions from './pages/InteriorSolutions';
import TrustedPartners from './pages/TrustedPartners';



// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        // { path: 'app', element: <DashboardApp /> },
        { path: 'contactUs', element: <ContactUs /> },
        { path: 'gallery', element: <Gallery /> },
        { path: 'testimonials', element: <Testimonial /> },
        { path: 'banner', element: <Banner /> },
        { path: 'category', element: <InteriorSolutions /> },
        { path: 'trustedPartners', element: <TrustedPartners /> },
        { path: 'productImage', element: <ProductImage /> },
        // { path: 'products', element: <Products /> },
        // { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
