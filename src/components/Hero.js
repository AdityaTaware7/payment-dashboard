import React from 'react'
import './Hero.css'

export default function Hero() {
    return (
        <main className='hero-main'>
            <section className='left-section'>
                <div className='left-section-heading1' style={{ marginTop: "70px" }}>
                    Access curated courses worth ₹ <span className='heading-text-cut'>18,500</span> at just <span className='section-heading-text-blue'>₹ 99</span> per year!
                </div>
                <div className="left-section-heading2">
                    <img className='section-imgs' src="/book.png" alt="Book" />
                    <p className='section-heading-text'><span className='section-heading-text-blue'>100+</span> Job relevant courses</p>
                </div>
                <div className="left-section-heading2">
                    <img className='section-imgs' src="/clock.png" alt="Book" />
                    <p className='section-heading-text'><span className='section-heading-text-blue'>20000+</span> Hours of content</p>
                </div>
                <div className="left-section-heading2">
                    <img className='section-imgs' src="/live.png" alt="live" />
                    <p className='section-heading-text'><span className='section-heading-text-blue'>Exclusive</span> webinar access</p>
                </div>
                <div className="left-section-heading2">
                    <img className='section-imgs' src="/degree.png" alt="degree" />
                    <p className='section-heading-text'>Scholarship worth <span className='section-heading-text-blue'>₹94,500</span></p>
                </div>
                <div className="left-section-heading2">
                    <img className='section-imgs' src="/ads.png" alt="ads" />
                    <p className='section-heading-text'><span className='section-heading-text-blue'>Ad Free</span> learning experience</p>
                </div>

            </section>

            <section className='right-section'>
                <div className='right-section-signup'>
                    <div className='right-section-signup-block'>
                        <div className='Icon1'>1</div>
                        <p style={{ margin: "0" }}>Sign up</p>
                    </div>
                    <div className='right-section-signup-block'>
                        <div className='Icon1'>2</div>
                        <p style={{ margin: "0" }}>Subscribe</p>
                    </div>
                </div>
                <div className='right-section-signup'>
                    <div>
                        <p style={{ fontWeight: "500", fontSize: "20px" }}>Select your subcription plan</p>
                    </div>
                </div>

                <form action="">
                    <div className='form-container'>
                        <div>

                            <div className='offer-expire'>Offer expired</div>
                            <div className='form-container-small'>
                                <input type="radio" name="12 month1" id="" disabled />
                                <label style={{ fontSize: "13px", fontWeight: "500", color: "lightgrey" }}>12 month Subscription</label>
                                <label style={{ fontSize: "13px", fontWeight: "500", color: "lightgrey" }}>Total <span className='section-heading-text-bold'>₹ 99</span></label>
                            </div>
                        </div>
                        <div>
                            <div className='offer-recommended'>Recommended</div>
                            <div className='form-container-small selected-plan'>
                                <input type="radio" name="12 month1" id="" checked />
                                <label style={{ fontSize: "13px", fontWeight: "500" }}>12 month Subscription</label>
                                <label style={{ fontSize: "13px", fontWeight: "500" }}>Total <span className='section-heading-text-bold'>₹ 179</span></label>
                            </div>
                        </div>
                        <div className='form-container-small'>
                            <input type="radio" name="12 month1" id="" />
                            <label style={{ fontSize: "13px", fontWeight: "500" }}>6 month Subscription</label>
                            <label style={{ fontSize: "13px", fontWeight: "500" }}>Total <span className='section-heading-text-bold'>₹ 149</span></label>
                        </div>
                        <div className='form-container-small'>
                            <input type="radio" name="12 month1" id="" />
                            <label style={{ fontSize: "13px", fontWeight: "500" }}>3 month Subscription</label>
                            <label style={{ fontSize: "13px", fontWeight: "500" }}>Total <span className='section-heading-text-bold'>₹ 99</span></label>
                        </div>


                        <div className='payment-container'>
                            <div className='payment-container-inner1'>
                                <p>Subscription Fee</p>
                                <p>₹ 18500</p>
                            </div>
                            <div className='inner-style'>

                                <div className='payment-container-inner1'>
                                    <p style={{
                                        color: "#DE4313", textAlign: "center",
                                        fontFamily: "Roboto"
                                    }}>Limited Time Offer</p>
                                    <p style={{
                                        color: "#DE4313", textAlign: "center",
                                        fontFamily: "Roboto"
                                    }}>- ₹ 18401</p>
                                </div>
                                <div style={{
                                    display: "flex", alignContent: "center", justifyContent: "flex-start", alignItems: "center", flexDirection: "row", margin: "0px", fontSize: "10px", padding: "10px", color: "#DE4313", textAlign: "center",
                                    fontFamily: "Roboto"
                                }} className='inner-style'>
                                    <img src="/clock-limit.png" style={{ color: "#DE4313" }} className='payment-clock' alt="clock" />
                                    <p>Offer valid till 25th March 2023 </p>
                                </div>
                            </div>
                            <br />
                            <div className='payment-container-inner1' style={{ paddingTop: "0px" }}>
                                <p style={{ fontSize: "14px", marginTop: "0px" }}>Total (Incl. of 18% GST)</p>
                                <p style={{ fontSize: "16px", marginTop: "0px" }} className='section-heading-text-bold'>₹ 149</p>
                            </div>

                        </div>
                        <div className='payment-container-inner1' >
                            <button className='payment-btn1'>Cancel</button>
                            <button className='payment-btn2'>PROCEED TO PAY</button>
                        </div>

                    </div>
                </form>
                <img className="last-img" style={{ marginTop: "15px", marginRight: "280px" }} src="/razorpay.png" alt="razorpay" />
            </section>

        </main>
    )
}
