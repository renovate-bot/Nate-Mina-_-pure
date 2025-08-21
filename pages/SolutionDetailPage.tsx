import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { solutionsData } from '../constants';
import NotFoundPage from './NotFoundPage';

const SolutionDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const solution = solutionsData.find(s => s.id === id);

    if (!solution) {
        return <NotFoundPage />;
    }

    return (
        <div className="bg-brand-bg-light">
            <div className="relative h-64 lg:h-80">
                <img src={solution.imageUrl} alt={solution.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white text-center px-4">{solution.title}</h1>
                </div>
            </div>

            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-text-primary mb-4">Industry-Tailored Solutions</h2>
                        <p className="text-text-secondary leading-relaxed">{solution.description}</p>
                        <div className="mt-12 text-center">
                             <Link
                                to="/contact"
                                className="inline-block bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors"
                            >
                                Discuss Your Needs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionDetailPage;