

import Link from "next/link"
export default function Ct02_41() {
    return (
        <>
            <section className="pt-100 ct-02 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block left-column wow fadeInRight">
                                <img className="img-fluid" src="/images/img-05.png" alt="content-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block right-column wow fadeInLeft">
                                {/* Title */}
                                <h2 className="s-46 w-700">Achieve more with better workflows</h2>
                                {/* Text */}
                                <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                    vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                </p>
                                {/* Small Title */}
                                <h5 className="s-24 w-700">Get more done in less time</h5>
                                {/* CONTENT BOX #1 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p>Magna dolor luctus at egestas sapien</p>
                                    </div>
                                </div>
                                {/* CONTENT BOX #2 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien
                                            turpis ultrice auctor congue varius magnis
                                        </p>
                                    </div>
                                </div>
                                {/* CONTENT BOX #3 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p className="mb-0">Volute turpis dolores and sagittis congue</p>
                                    </div>
                                </div>
                                {/* Link */}
                                <div className="txt-block-tra-link mt-25">
                                    <Link href="#features-12" className="tra-link ico-20 color--theme">
                                        All-in-one platform <span className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
