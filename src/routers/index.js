//Layouts
import HeaderOnly from '../components/Layout/HeaderOnly';
import LayoutAdmin from '../components/Layout/LayoutAdmin';

import Movies from "../pages/Movies";
import About from "../pages/About";
import Detail from '../pages/Detail';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';

//Public routes
const publicRoutes = [
    { path: '/', component: Movies },
    { path: '/about', component: About, layout: HeaderOnly },
    { path: '/movie/:id/*', component: Detail },
    { path: '/contact', component: Contact, layout: HeaderOnly },
    { path: '/admin', component: Admin, layout: LayoutAdmin },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };