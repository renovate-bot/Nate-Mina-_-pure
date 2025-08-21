import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationData, NavItem } from '../constants';

const Logo: React.FC = () => (
    <Link to="/" className="text-2xl font-bold text-text-primary hover:text-brand-blue transition-colors">
        Pure<span className="text-brand-blue">Comp</span>
    </Link>
);

const NavLinks: React.FC<{ items: NavItem[]; onLinkClick?: () => void }> = ({ items, onLinkClick }) => {
    const location = useLocation();

    return (
        <>
            {items.map((item) => (
                <div key={item.name} className="relative group">
                    {item.children ? (
                        <>
                            <button className="flex items-center text-left w-full px-4 py-2 text-text-primary hover:bg-gray-100 rounded-md font-medium">
                                {item.name}
                                <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className="absolute z-20 left-0 mt-1 w-56 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                <div className="py-1">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.name}
                                            to={child.path}
                                            onClick={onLinkClick}
                                            className="block px-4 py-2 text-sm text-text-secondary hover:bg-gray-100 hover:text-brand-blue rounded-md mx-1"
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <Link
                            to={item.path}
                            onClick={onLinkClick}
                            className={`px-4 py-2 rounded-md font-medium ${location.pathname === item.path ? 'text-brand-blue' : 'text-text-primary hover:bg-gray-100'}`}
                        >
                            {item.name}
                        </Link>
                    )}
                </div>
            ))}
        </>
    );
};


const TopBar: React.FC = () => (
    <div className="bg-brand-surface text-text-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-10 flex justify-between items-center text-xs">
           <div className="flex items-center space-x-6">
                <a href="mailto:nate@dom-i-nate.pro" className="flex items-center hover:text-brand-blue transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                    nate@dom-i-nate.pro
                </a>
                 <a href="tel:585-484-1764" className="flex items-center hover:text-brand-blue transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                    (585) 484-1764
                </a>
           </div>
           {/* Add social links here if needed */}
        </div>
    </div>
);

const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <header className="bg-brand-bg-light/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Logo />
                    <nav className="hidden lg:flex items-center space-x-2">
                        <NavLinks items={navigationData} />
                    </nav>
                    <div className="hidden lg:block">
                         <Link to="/contact" className="bg-brand-blue text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-blue-dark transition-colors text-sm">
                            Get A Quote
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} aria-label="Open menu" className="text-text-primary">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-lg absolute top-20 left-0 w-full">
                    <nav className="flex flex-col p-4 space-y-2">
                       {navigationData.map((item) => (
                           <div key={item.name}>
                               {item.children ? (
                                   <div>
                                       <h3 className="font-semibold px-4 pt-2 text-text-primary">{item.name}</h3>
                                       <div className="pl-4">
                                            {item.children.map(child => (
                                                <Link key={child.path} to={child.path} className="block px-4 py-2 text-text-secondary hover:bg-gray-100 rounded-md">{child.name}</Link>
                                            ))}
                                       </div>
                                   </div>
                               ) : (
                                  <Link to={item.path} className="block px-4 py-2 text-text-primary hover:bg-gray-100 rounded-md">{item.name}</Link>
                               )}
                           </div>
                       ))}
                        <div className="pt-4">
                             <Link to="/contact" className="w-full text-center bg-brand-blue text-white px-5 py-3 rounded-lg font-medium hover:bg-brand-blue-dark transition-colors block">
                                Get A Quote
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4 text-white">PureComp</h3>
                    <p className="text-gray-300 text-sm">Your trusted partner for business IT services and computer support. We keep your technology running, so you can focus on what you do best.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/about" className="text-gray-300 hover:text-brand-blue transition-colors text-sm">About Us</Link></li>
                        <li><Link to="/contact" className="text-gray-300 hover:text-brand-blue transition-colors text-sm">Contact</Link></li>
                        <li><a href="#" className="text-gray-300 hover:text-brand-blue transition-colors text-sm">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
                    <ul className="space-y-2">
                        {navigationData.find(i => i.name === 'IT Services')?.children?.slice(0, 4).map(service => (
                             <li key={service.path}><Link to={service.path} className="text-gray-300 hover:text-brand-blue transition-colors text-sm">{service.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>San Jose, CA</li>
                        <li className="pt-2">P: (585) 484-1764</li>
                        <li>E: nate@dom-i-nate.pro</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} PureComp. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);


interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-brand-bg-light font-sans text-text-primary">
            <TopBar />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;