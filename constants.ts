export interface NavItem {
    name: string;
    path: string;
    children?: NavItem[];
}

export const navigationData: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
        name: 'IT Services',
        path: '/services',
        children: [
            { name: 'Managed IT Services', path: '/services/managed-it' },
            { name: 'Business IT Support', path: '/services/it-support' },
            { name: 'IT Outsourcing', path: '/services/it-outsourcing' },
            { name: 'Cyber Security', path: '/services/cyber-security' },
            { name: 'Cloud Services', path: '/services/cloud-services' },
            { name: 'Data Backup & Recovery', path: '/services/data-backup' },
            { name: 'Residential PC Support', path: '/services/residential-support' },
            { name: 'Custom Computer Builds', path: '/services/custom-builds' },
            { name: 'Custom Gaming PCs', path: '/services/gaming-pcs' },
        ],
    },
    {
        name: 'Solutions',
        path: '/solutions',
        children: [
            { name: 'IT for Healthcare', path: '/solutions/healthcare' },
            { name: 'IT for Legal Firms', path: '/solutions/legal' },
            { name: 'IT for Financial Services', path: '/solutions/finance' },
        ],
    },
    { name: 'Contact Us', path: '/contact' },
];

export interface IService {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    imageUrl: string;
    icon: string;
}

export const servicesData: IService[] = [
    {
        id: 'managed-it',
        title: 'Managed IT Services',
        shortDescription: 'Proactive, comprehensive IT management to keep your systems running smoothly.',
        longDescription: 'Our Managed IT Services provide you with a full team of IT experts dedicated to preventing problems before they happen. We monitor your systems 24/7, manage updates, and provide unlimited support to your employees, all for a flat monthly fee. This proactive approach minimizes downtime and allows you to focus on your core business.',
        imageUrl: 'https://picsum.photos/seed/managedit/1200/800',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m0-8a4 4 0 100-8 4 4 0 000 8zm0 8a4 4 0 100-8 4 4 0 000 8z" /></svg>'
    },
    {
        id: 'cyber-security',
        title: 'Cyber Security',
        shortDescription: 'Protect your valuable data with multi-layered security solutions.',
        longDescription: 'In today’s digital world, robust cyber security is not optional. We implement a multi-layered defense strategy, including firewalls, antivirus, anti-malware, employee training, and continuous monitoring to protect your business from evolving threats like ransomware and phishing attacks.',
        imageUrl: 'https://picsum.photos/seed/cybersecurity/1200/800',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.5-5.5a12.025 12.025 0 015.118-2.583z" /></svg>'
    },
    {
        id: 'cloud-services',
        title: 'Cloud Services',
        shortDescription: 'Leverage the power of the cloud for flexibility, scalability, and efficiency.',
        longDescription: 'Unlock the potential of the cloud with our expert guidance. We help you migrate to, manage, and optimize cloud platforms like Microsoft 365 and Azure. Benefit from secure access to your data and applications from anywhere, improved collaboration, and scalable infrastructure that grows with your business.',
        imageUrl: 'https://picsum.photos/seed/cloud/1200/800',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>'
    },
    {
        id: 'data-backup',
        title: 'Data Backup & Recovery',
        shortDescription: 'Ensure business continuity with reliable and automated backup solutions.',
        longDescription: 'Your data is one of your most critical assets. We implement robust, automated, and tested backup solutions to ensure that in the event of a hardware failure, cyber-attack, or natural disaster, your data can be restored quickly and reliably, minimizing disruption to your operations.',
        imageUrl: 'https://picsum.photos/seed/databackup/1200/800',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7s-2 2-2 4s2 4 2 4m16-8s2-2 2-4s-2-4-2-4" /></svg>'
    },
    {
        id: 'residential-support',
        title: 'Residential PC Support',
        shortDescription: 'Expert tech support for your home computers, from sales to troubleshooting.',
        longDescription: 'We extend our expertise to your home. Whether you need help setting up a new PC, troubleshooting slow performance, removing viruses, or learning new software, our friendly technicians are here to help. We offer reliable and affordable support for all your personal computing needs.',
        imageUrl: 'https://picsum.photos/seed/residential/1200/800',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>'
    },
    {
        id: 'custom-builds',
        title: 'Custom Computer Builds',
        shortDescription: 'High-performance PCs built to your exact specifications for work or play.',
        longDescription: 'Get the perfect computer for your needs. We specialize in building custom PCs tailored to your specific requirements, whether for professional applications, creative work, or general use. We use high-quality components to ensure performance, reliability, and longevity.',
        imageUrl: 'https://picsum.photos/seed/custompc/1200/800',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>'
    },
    {
        id: 'gaming-pcs',
        title: 'Custom Gaming PCs',
        shortDescription: 'Dominate the competition with a professionally built, high-end gaming rig.',
        longDescription: 'Level up your gaming experience with a custom-built gaming PC from PureComp. We select the latest and greatest components—from graphics cards to processors—to build a machine that delivers high frame rates and stunning visuals. Get a competitive edge with a rig designed for peak performance.',
        imageUrl: 'https://picsum.photos/seed/gamingpc/1200/800',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    }
];

export interface ISolution {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export const solutionsData: ISolution[] = [
    {
        id: 'healthcare',
        title: 'IT for Healthcare',
        description: 'We provide HIPAA-compliant IT solutions for healthcare providers, ensuring data security, patient privacy, and system reliability. From EMR support to secure network management, we help you focus on patient care.',
        imageUrl: 'https://picsum.photos/seed/healthcare/1200/800',
    },
    {
        id: 'legal',
        title: 'IT for Legal Firms',
        description: 'Our IT services for law firms focus on security, confidentiality, and uptime. We manage your case management software, secure your client data, and provide reliable support so you can focus on your clients.',
        imageUrl: 'https://picsum.photos/seed/legal/1200/800',
    },
    {
        id: 'finance',
        title: 'IT for Financial Services',
        description: 'In the financial sector, security and compliance are paramount. We offer robust cybersecurity, data protection, and managed IT services to keep your financial firm compliant and secure from threats.',
        imageUrl: 'https://picsum.photos/seed/finance/1200/800',
    },
];

export interface ITestimonial {
    quote: string;
    author: string;
    company: string;
}

export const testimonialsData: ITestimonial[] = [
    {
        quote: "PureComp has been an invaluable partner. Their proactive approach to IT management has saved us from countless headaches and allowed us to focus on growing our business.",
        author: "John Doe",
        company: "CEO, Innovate Inc."
    },
    {
        quote: "The team at PureComp is responsive, knowledgeable, and genuinely cares about our success. Their cyber security solutions give us peace of mind.",
        author: "Jane Smith",
        company: "Manager, Secure Finance"
    },
    {
        quote: "Migrating to the cloud was a seamless process thanks to PureComp. Their expertise and support were top-notch throughout the entire project.",
        author: "Peter Jones",
        company: "Director, Legal Associates"
    }
];

export interface IPartner {
    name: string;
    logoUrl: string;
}

export const partnersData: IPartner[] = [
    { name: "Microsoft", logoUrl: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" },
    { name: "Dell", logoUrl: "https://cdn.worldvectorlogo.com/logos/dell-1.svg" },
    { name: "VMware", logoUrl: "https://cdn.worldvectorlogo.com/logos/vmware-1.svg" },
    { name: "Cisco", logoUrl: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg" },
    { name: "Lenovo", logoUrl: "https://cdn.worldvectorlogo.com/logos/lenovo-3.svg" },
];