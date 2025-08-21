import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData, testimonialsData, partnersData } from '../constants';

const HeroSection: React.FC = () => (
    <div className="relative bg-brand-surface">
        <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop" alt="Bay Area Business Technology" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-white/50"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20 lg:py-40">
                <h1 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight mb-4">
                    IT Services & Support for Bay Area Businesses
                </h1>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
                    Proactive & reliable IT support to keep your business running smoothly. We are your trusted partner in technology.
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-blue-dark transition-transform transform hover:scale-105"
                >
                    Get A Free Quote
                </Link>
            </div>
        </div>
    </div>
);

const ServiceCard: React.FC<{ service: typeof servicesData[0] }> = ({ service }) => (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
        <div className="inline-block p-4 bg-blue-100 rounded-full mb-4" dangerouslySetInnerHTML={{ __html: service.icon }} />
        <h3 className="text-xl font-bold text-text-primary mb-2">{service.title}</h3>
        <p className="text-text-secondary mb-4 h-20">{service.shortDescription}</p>
        <Link to={`/services/${service.id}`} className="font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors">
            Learn More &rarr;
        </Link>
    </div>
);

const ServicesSection: React.FC = () => (
    <div className="py-20 bg-brand-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">Comprehensive IT Solutions</h2>
                <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">From proactive maintenance to strategic consulting, we've got your technology needs covered.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {servicesData.slice(0, 4).map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    </div>
);

const WhyChooseUsSection: React.FC = () => (
    <div className="py-20 bg-brand-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" alt="Team collaborating" className="rounded-lg shadow-xl" />
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Why Partner with PureComp?</h2>
                    <p className="text-text-secondary mb-8">
                        We're not just another IT company. We're your strategic partner, dedicated to providing solutions that drive your business forward.
                    </p>
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                                <svg className="h-6 w-6 text-brand-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-text-primary">Proactive IT Support</h3>
                                <p className="text-text-secondary mt-1">We prevent problems before they disrupt your business, ensuring maximum uptime and efficiency.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                             <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                                <svg className="h-6 w-6 text-brand-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.176-5.97M15 21h6m-6-1a6 6 0 00-6-6" /></svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-text-primary">Experienced Technicians</h3>
                                <p className="text-text-secondary mt-1">Our certified experts have the knowledge and experience to handle any IT challenge.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                             <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                                <svg className="h-6 w-6 text-brand-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.5-5.5a12.025 12.025 0 015.118-2.583z" /></svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-text-primary">Cybersecurity Experts</h3>
                                <p className="text-text-secondary mt-1">We protect your valuable data with multi-layered security solutions and ongoing vigilance.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const TestimonialCard: React.FC<{ testimonial: typeof testimonialsData[0] }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brand-blue">
        <p className="italic text-text-secondary mb-4">"{testimonial.quote}"</p>
        <p className="font-bold text-text-primary">{testimonial.author}</p>
        <p className="text-sm text-gray-500">{testimonial.company}</p>
    </div>
);

const TestimonialsSection: React.FC = () => (
    <div className="py-20 bg-brand-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">What Our Clients Say</h2>
                <p className="mt-4 text-lg text-text-secondary">We're proud to build long-lasting partnerships with our clients.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
        </div>
    </div>
);

const PartnersSection: React.FC = () => (
    <div className="py-16 bg-brand-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <h3 className="text-center text-xl font-semibold text-text-secondary mb-8">Trusted by Bay Area Businesses</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
                {partnersData.map(partner => (
                    <img key={partner.name} src={partner.logoUrl} alt={partner.name} className="h-8 max-w-[120px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                ))}
            </div>
        </div>
    </div>
);

const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <WhyChooseUsSection />
            <TestimonialsSection />
            <PartnersSection />
        </div>
    );
};

export default HomePage;