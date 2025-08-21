
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import SolutionDetailPage from './pages/SolutionDetailPage';

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App: React.FC = () => {
    return (
        <HashRouter>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services/:id" element={<ServiceDetailPage />} />
                    <Route path="/solutions/:id" element={<SolutionDetailPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
};

export default App;