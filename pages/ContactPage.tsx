import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        contactMethod: 'Email',
        serviceType: 'Residential',
        address: '',
        services: [] as string[],
        problemDescription: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            const newServices = checked
                ? [...prev.services, value]
                : prev.services.filter(service => service !== value);
            return { ...prev, services: newServices };
        });
    };
    
    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (formData.contactMethod === 'Email') {
            if (!formData.email) {
                newErrors.email = 'Email is required for email contact.';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Email is invalid.';
            }
        }
        if (formData.contactMethod === 'Phone' && !formData.phone) {
             newErrors.phone = 'Phone number is required for phone contact.';
        }
        if (formData.services.length === 0) {
            newErrors.services = 'Please select at least one service area.';
        }
        if (!formData.problemDescription) newErrors.problemDescription = 'Please provide a description of the issue.';
        return newErrors;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
            // In a real app, you would send this data to a server.
            setIsSubmitted(true);
        }
    };
    
    const serviceOptions = [
        'Remote tech support',
        'Custom Computer build',
        'Networking',
        'Repairs/upgrades and software',
        'Consulting',
        'Repair Estimate'
    ];

    return (
        <div className="bg-brand-bg-light">
            <div className="bg-brand-surface py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">Request Service</h1>
                    <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">Contact Pure Computers today! Fill out the form below for a quote.</p>
                </div>
            </div>

            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-6">Contact Information</h2>
                            <div className="space-y-6 text-text-secondary">
                                <div className="flex items-start">
                                    <p><strong className="font-semibold text-text-primary">Address:</strong><br />San Jose, CA</p>
                                </div>
                                <div className="flex items-start">
                                    <p><strong className="font-semibold text-text-primary">Phone:</strong><br />(585) 484-1764</p>
                                </div>
                                <div className="flex items-start">
                                    <p><strong className="font-semibold text-text-primary">Email:</strong><br />nate@dom-i-nate.pro</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            {isSubmitted ? (
                                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg" role="alert">
                                    <p className="font-bold text-lg">Thank You!</p>
                                    <p>Your service request has been submitted. We will get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-text-primary">Name (First and Last)</label>
                                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue text-text-primary" />
                                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                        </div>
                                         <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-text-primary">Contact Phone #</label>
                                            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue text-text-primary" />
                                             {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-text-primary">Email Address</label>
                                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue text-text-primary" />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-text-primary">How would you like to be contacted?</label>
                                            <div className="mt-2 flex items-center space-x-4">
                                                <label className="flex items-center"><input type="radio" name="contactMethod" value="Email" checked={formData.contactMethod === 'Email'} onChange={handleChange} className="form-radio h-4 w-4 text-brand-blue" /> <span className="ml-2">Email</span></label>
                                                <label className="flex items-center"><input type="radio" name="contactMethod" value="Phone" checked={formData.contactMethod === 'Phone'} onChange={handleChange} className="form-radio h-4 w-4 text-brand-blue" /> <span className="ml-2">Phone</span></label>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-text-primary">Is this personal or business?</label>
                                             <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                                                <label className="flex items-center"><input type="radio" name="serviceType" value="Residential" checked={formData.serviceType === 'Residential'} onChange={handleChange} className="form-radio h-4 w-4 text-brand-blue" /> <span className="ml-2">Residential</span></label>
                                                <label className="flex items-center"><input type="radio" name="serviceType" value="Commercial" checked={formData.serviceType === 'Commercial'} onChange={handleChange} className="form-radio h-4 w-4 text-brand-blue" /> <span className="ml-2">Commercial</span></label>
                                                <label className="flex items-center"><input type="radio" name="serviceType" value="Both" checked={formData.serviceType === 'Both'} onChange={handleChange} className="form-radio h-4 w-4 text-brand-blue" /> <span className="ml-2">Both</span></label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="address" className="block text-sm font-medium text-text-primary">Address</label>
                                        <textarea name="address" id="address" rows={3} value={formData.address} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue text-text-primary"></textarea>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-text-primary">What can we help you with?</label>
                                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {serviceOptions.map(option => (
                                                <label key={option} className="flex items-center">
                                                    <input type="checkbox" name="services" value={option} checked={formData.services.includes(option)} onChange={handleCheckboxChange} className="form-checkbox h-4 w-4 text-brand-blue rounded" />
                                                    <span className="ml-2 text-sm text-text-secondary">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                        {errors.services && <p className="text-red-500 text-xs mt-1">{errors.services}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="problemDescription" className="block text-sm font-medium text-text-primary">What are you having trouble with?</label>
                                        <textarea name="problemDescription" id="problemDescription" rows={5} value={formData.problemDescription} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue text-text-primary"></textarea>
                                        {errors.problemDescription && <p className="text-red-500 text-xs mt-1">{errors.problemDescription}</p>}
                                    </div>
                                    
                                     <div className="pt-4 border-t border-gray-200">
                                         <p className="text-sm text-text-secondary">
                                             For remote assistance, please download Anydesk from here: <a href="https://anydesk.com/en/downloads/" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-blue hover:underline">Download Anydesk</a>
                                         </p>
                                     </div>

                                    <div>
                                        <button type="submit" className="w-full bg-brand-blue text-white py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-brand-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue">
                                            Submit Request
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
