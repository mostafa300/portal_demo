import React from 'react'
import '../NaveBar/NaveBar.css'

const Counter = () => {
    return (
        <section class="section counter">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="counter-item text-center mb-5 mb-lg-0">
                            <h3 class="mb-0"><span class="counter-stat font-weight-bold">1730</span> +</h3>
                            <p class="text-muted">Project Done</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="counter-item text-center mb-5 mb-lg-0">
                            <h3 class="mb-0"><span class="counter-stat font-weight-bold">125 </span>M </h3>
                            <p class="text-muted">User Worldwide</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="counter-item text-center mb-5 mb-lg-0">
                            <h3 class="mb-0"><span class="counter-stat font-weight-bold">39</span></h3>
                            <p class="text-muted">Availble Country</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="counter-item text-center">
                            <h3 class="mb-0"><span class="counter-stat font-weight-bold">14</span></h3>
                            <p class="text-muted">Award Winner </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Counter