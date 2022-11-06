import React from 'react'
import Slider from '../components/Slider'
import NaveBar from '../components/NaveBar/NaveBar'
import IntoSection from '../components/ContentHome/IntoSection'
import AboutStart from '../components/ContentHome/AboutStart'
import Counter from '../components/ContentHome/Counter'
import Services from '../components/ContentHome/Services'
import CtaStart from '../components/ContentHome/CtaStart'
import Testimonial from '../components/ContentHome/Testimonial'
import News from '../components/ContentHome/News'
import Contact from '../components/ContentHome/Contact'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <>
            <NaveBar />
            <Slider />
            <IntoSection />
            <AboutStart />
            <Counter />
            <Services />
            <CtaStart />
            <Testimonial />
            <News />
            <Contact />
            <Footer />
        </>
    )
}

export default Home