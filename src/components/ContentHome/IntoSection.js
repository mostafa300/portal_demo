import React from 'react'
import '../NaveBar/NaveBar.css'

const IntoSection = () => {
    return (
        <section className="section intro">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <span className="h6 text-color ">We are creative & expert people</span>
                            <h2 className="mt-3 content-title">We work with business & provide solution to client with their business problem
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="intro-item mb-5 mb-lg-0">
                            <i className="ti-desktop color-one"></i>
                            <h4 className="mt-4 mb-3">Modern & Responsive design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="intro-item mb-5 mb-lg-0">
                            <i className="ti-medall color-one"></i>
                            <h4 className="mt-4 mb-3">Awarded licensed company</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="intro-item">
                            <i className="ti-layers-alt color-one"></i>
                            <h4 className="mt-4 mb-3">Build your website Professionally</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntoSection