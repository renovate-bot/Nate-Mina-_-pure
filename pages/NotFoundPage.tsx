import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh] bg-brand-bg-light">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-200">404</h1>
                <h2 className="text-3xl font-bold text-text-primary mt-4">Page Not Found</h2>
                <p className="text-text-secondary mt-2">Sorry, we couldn't find the page you're looking for.</p>
                <div className="mt-8">
                    <Link
                        to="/"
                        className="inline-block bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;