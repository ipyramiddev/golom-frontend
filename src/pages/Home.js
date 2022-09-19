import * as React from 'react';
import Header from '../components/Header';
import Section1 from '../section/Section1';
import Section2 from '../section/Section2';
import Section3 from '../section/Section3';
import Section4 from '../section/Section4';
import Section5 from '../section/Section5';
import Footer from '../components/Footer';
export default function Home() {
    return (
        <>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </>
    );
}