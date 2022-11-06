import React from 'react'
import '../NaveBar/NaveBar.css'
const AboutStart = () => {
    return (
        <section className="section about position-relative">
            <div className="bg-about"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6 offset-md-0">
                        <div className="about-item ">
                            <span className="h6 text-color">What we are</span>
                            <h2 className="mt-3 mb-4 position-relative content-title">We are dynamic team of creative people</h2>
                            <div className="about-content">
                                <h4 className="mb-3 position-relative">We are Perfect Solution</h4>
                                <p className="mb-5">We provide consulting services in the area of IFRS and management reporting, helping
                                    companies to reach their highest level. We optimize business processes, making them easier.</p>

                                <a href="#" className="btn btn-main btn-round-full">Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutStart