import React from 'react'
import '../NaveBar/NaveBar.css'
const News = () => {
    return (
        <section className="section latest-blog bg-2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <div className="section-title">
                            <span className="h6 text-color">Latest News</span>
                            <h2 className="mt-3 content-title text-white">Latest articles to enrich knowledge</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 mb-5">
                        <div className="card bg-transparent border-0">
                            <img loading="lazy" src="images/blog/1.jpg" alt="blog" className="img-fluid rounded" />

                            <div className="card-body mt-2">
                                <div className="blog-item-meta">
                                    <a href="#" className="text-white-50">Design<span className="ml-2 mr-2">/</span></a>
                                    <a href="#" className="text-white-50">Ui/Ux<span className="ml-2">/</span></a>
                                    <a href="#" className="text-white-50 ml-2"><i className="fa fa-user mr-2"></i>admin</a>
                                </div>

                                <h3 className="mt-3 mb-5 lh-36"><a href="#" className="text-white ">How to improve design with typography?</a></h3>

                                <a href="blog-single.html" className="btn btn-small btn-solid-border btn-round-full text-white">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-5">
                        <div className="card border-0 bg-transparent">
                            <img loading="lazy" src="images/blog/2.jpg" alt="blog" className="img-fluid rounded" />

                            <div className="card-body mt-2">
                                <div className="blog-item-meta">
                                    <a href="#" className="text-white-50">Design<span className="ml-2 mr-2">/</span></a>
                                    <a href="#" className="text-white-50">Ui/Ux<span className="ml-2">/</span></a>
                                    <a href="#" className="text-white-50 ml-2"><i className="fa fa-user mr-2"></i>admin</a>
                                </div>

                                <h3 className="mt-3 mb-5 lh-36"><a href="#" className="text-white">Interactivity design may connect consumer</a>
                                </h3>

                                <a href="blog-single.html" className="btn btn-small btn-solid-border btn-round-full text-white">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-5">
                        <div className="card border-0 bg-transparent">
                            <img loading="lazy" src="images/blog/3.jpg" alt="blog" className="img-fluid rounded" />

                            <div className="card-body mt-2">
                                <div className="blog-item-meta">
                                    <a href="#" className="text-white-50">Design<span className="ml-2 mr-2">/</span></a>
                                    <a href="#" className="text-white-50">Ui/Ux<span className="ml-2">/</span></a>
                                    <a href="#" className="text-white-50 ml-2"><i className="fa fa-user mr-2"></i>admin</a>
                                </div>

                                <h3 className="mt-3 mb-5 lh-36"><a href="#" className="text-white">Marketing Strategy to bring more affect</a></h3>

                                <a href="blog-single.html" className="btn btn-small btn-solid-border btn-round-full text-white">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News