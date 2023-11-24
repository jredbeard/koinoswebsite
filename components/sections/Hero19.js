

import Link from "next/link"
import BrandSlider2 from "../slider/BrandSlider2"
export default function Hero19() {
    return (
        <>
            <section id="hero-19" className="blur--purple gr--ghost hero-section">
                <div className="container text-center">
                    {/* HERO TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="hero-19-txt">
                                {/* Title */}
                                <h2 className="s-56 w-700">Place your business at the top of search engines</h2>
                                {/* Text */}
                                <p className="p-xl">Mauris donec ociis diam magnis sapien sagittis sapien tempor volute gravida
                                    and aliquet tortor undo aliquet quaerat
                                </p>
                                {/* Buttons */}
                                <div className="btns-group">
                                    <Link href="#banner-7" className="btn r-04 btn--theme hover--theme">Get started for free</Link>
                                    <Link href="https://www.youtube.com/embed/SZEflIVnhH8" className="video-popup1 btn r-04 btn--tra-black hover--theme ico-20 ico-right">See how it works <span className="flaticon-play" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>	{/* END HERO TEXT */}
                    {/* BRANDS CAROUSEL */}
                    <div id="brands-1" className="py-90">
                        <div className="row">
                            <div className="col text-center">
                                <BrandSlider2 />
                            </div>
                        </div>  {/* End row */}
                    </div>	{/* END BRANDS CAROUSEL */}
                    {/* HERO IMAGE */}
                    <div className="row">
                        <div className="col">
                            <div className="hero-19-img wow fadeInUp">
                                <img className="img-fluid" src="/images/dashboard-09.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>	{/* END HERO IMAGE */}
                </div>    {/* End container */}
            </section>
        </>
    )
}
