import React from 'react'
// import '../NaveBar/NaveBar.css'
import '../../resources/plugins/slick/slick.css'
import '../../resources/plugins/slick/slick-theme.css'

const Testimonial = () => {
    return (
        <section class="section testimonial">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 ">
                        <div class="section-title">
                            <span class="h6 text-color">Clients testimonial</span>
                            <h2 class="mt-3 content-title">Check what's our clients say about us</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row testimonial-wrap">
                    <div class="testimonial-item position-relative">
                        <i class="ti-quote-left text-color"></i>

                        <div class="testimonial-item-content">
                            <p class="testimonial-text">Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque
                                consequuntur natus iusto recusandae numquam corrupti facilis blanditiis.</p>

                            <div class="testimonial-author">
                                <h5 class="mb-0 text-capitalize">Thomas Johnson</h5>
                                <p>Excutive Director,themefisher</p>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item position-relative">
                        <i class="ti-quote-left text-color"></i>

                        <div class="testimonial-item-content">
                            <p class="testimonial-text">Consectetur adipisicing elit. Quam maiores perspiciatis temporibus odio reiciendis
                                error alias debitis atque consequuntur natus iusto recusandae .</p>

                            <div class="testimonial-author">
                                <h5 class="mb-0 text-capitalize">Mickel hussy</h5>
                                <p>Excutive Director,themefisher</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial