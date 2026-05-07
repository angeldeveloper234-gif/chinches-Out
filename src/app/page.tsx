import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Methods from '../components/Methods';
import StoreSection from '../components/StoreSection';
import Certifications from '../components/Certifications';
import Promotion from '../components/Promotion';
import Testimonials from '../components/Testimonials';

import Contact from '../components/Contact';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Services />
            <Methods />
            <StoreSection />
            <Certifications />
            <Promotion />
            <Testimonials />

            <Contact />
        </>
    );
}
