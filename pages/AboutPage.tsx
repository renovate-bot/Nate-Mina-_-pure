import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-brand-bg-light">
            <div className="bg-brand-surface py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">About PureComp</h1>
                    <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">Your Partner in Technology Success Since 2005</p>
                </div>
            </div>

            <div className="py-20 bg-brand-bg-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <img src="https://picsum.photos/seed/about/600/500" alt="Office environment" className="rounded-lg shadow-xl" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">Our Mission</h2>
                            <p className="text-text-secondary mb-4">
                                At PureComp, our mission is simple: to provide exceptional IT services that empower businesses to thrive. We believe technology should be an asset, not a burden. By offering proactive support, strategic guidance, and robust security, we give our clients the freedom and peace of mind to focus on their core objectives.
                            </p>
                            <p className="text-text-secondary mb-6">
                                We are committed to building long-term relationships based on trust, transparency, and tangible results. Your success is our success.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors"
                            >
                                Let's Work Together
                            </Link>
                        </div>
                    </div>

                    {/* Meet the Founder Section */}
                    <div className="mt-20 lg:mt-28">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center bg-brand-surface rounded-lg p-8 lg:p-12">
                            <div className="md:col-span-1 flex justify-center">
                                <img
                                    src="https://www.purecomp.net/wp-content/uploads/2021/08/nate-2.png"
                                    alt="Nathaniel Mina, Founder of PureComp"
                                    className="rounded-full shadow-xl w-48 h-48 md:w-56 md:h-56 object-cover"
                                />
                            </div>
                            <div className="md:col-span-2 text-center md:text-left">
                                <h2 className="text-3xl font-bold text-text-primary mb-4">Meet Our Founder</h2>
                                <h3 className="text-xl font-semibold text-brand-blue mb-3">Nathaniel Mina</h3>
                                <p className="text-text-secondary">
                                    Nathaniel Mina founded PureComp with a vision to deliver enterprise-level IT services with a personal touch. With over 20 years of experience in the industry, Nathaniel's leadership and passion for technology drive the company's commitment to innovation and client success. He believes in building lasting relationships and empowering businesses and individuals through reliable technology solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20">
                        <h2 className="text-3xl font-bold text-center text-text-primary mb-12">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-text-primary mb-2">Client-Focused</h3>
                                <p className="text-text-secondary">We put our clients' needs at the forefront of everything we do, providing tailored solutions and exceptional service.</p>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-text-primary mb-2">Integrity</h3>
                                <p className="text-text-secondary">We operate with honesty and transparency, building trust through every interaction.</p>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-text-primary mb-2">Innovation</h3>
                                <p className="text-text-secondary">We stay ahead of the technology curve to bring our clients the most effective and efficient solutions available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;