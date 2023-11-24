

export default function Features5_9() {
    return (
        <>
            <section id="features-5" className="pt-100 features-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Section ID */}
                                <span className="section-id">Enhance Engagement</span>
                                {/* Title */}
                                <h2 className="s-50 w-700">Reach your audience through social media marketing</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                            </div>
                        </div>
                    </div>
                    {/* FEATURES-5 WRAPPER */}
                    <div className="fbox-wrapper text-center">
                        <div className="row d-flex align-items-center">
                            {/* FEATURE BOX #1 */}
                            <div className="col-md-6">
                                <div className="fbox-5 fb-1 bg--02 r-16 wow fadeInUp">
                                    {/* Text */}
                                    <div className="fbox-txt order-last order-md-2">
                                        <h5 className="s-26 w-700">Easy Automations</h5>
                                        <p>Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero</p>
                                    </div>
                                    {/* Image */}
                                    <div className="fbox-5-img order-first order-md-2">
                                        <img className="img-fluid light-theme-img" src="/images/f_06.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/f_06_dark.png" alt="feature-image" />
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col-md-6">
                                <div className="fbox-5 fb-2 gr--smoke r-16 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-5-img">
                                        <img className="img-fluid light-theme-img" src="/images/f_07.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/f_07_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h5 className="s-26 w-700">Research Solutions</h5>
                                        <p>Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                        </div>  {/* End row */}
                    </div>	{/* END FEATURES-5 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
