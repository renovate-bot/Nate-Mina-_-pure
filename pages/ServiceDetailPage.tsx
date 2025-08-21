import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData, IService } from '../constants';
import NotFoundPage from './NotFoundPage';

const ServiceDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const service = servicesData.find(s => s.id === id);

    if (!service) {
        return <NotFoundPage />;
    }

    return (
        <div className="bg-brand-bg-light">
            <div className="relative h-64 lg:h-80">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white text-center px-4">{service.title}</h1>
                </div>
            </div>

            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-text-primary mb-4">Service Overview</h2>
                            <p className="text-text-secondary leading-relaxed whitespace-pre-line">{service.longDescription}</p>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="bg-brand-surface p-8 rounded-lg">
                                <h3 className="text-xl font-bold text-text-primary mb-4">Other Services</h3>
                                <ul className="space-y-3">
                                    {servicesData
                                        .filter(s => s.id !== id)
                                        .map(otherService => (
                                            <li key={otherService.id}>
                                                <Link to={`/services/${otherService.id}`} className="flex items-center text-text-secondary hover:text-brand-blue font-medium transition-colors">
                                                    <svg className="w-4 h-4 mr-2 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                                    {otherService.title}
                                                </Link>
                                            </li>
                                    ))}
                                </ul>
                                <Link
                                    to="/contact"
                                    className="mt-8 w-full text-center block bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors"
                                >
                                    Request a Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;