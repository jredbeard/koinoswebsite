

import Link from "next/link"
export default function Ct03_9() {
    return (
        <>
            <section className="pt-100 ct-03 content-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-6 col-lg-5 order-last order-md-2">
                            <div className="txt-block left-column wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-46 w-700">Data-driven digital marketing</h2>
                                {/* List */}
                                <ul className="simple-list">
                                    <li className="list-item">
                                        <p>Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice
                                            ipsum aliquam undo congue dolor cursus congue varius magnis
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="mb-0">Cursus purus suscipit  vitae cubilia magnis diam volute egestas
                                            sapien ultrice auctor
                                        </p>
                                    </li>
                                </ul>
                                {/* Link */}
                                <div className="txt-block-tra-link mt-25">
                                    <Link href="#lnk-4" className="tra-link ico-20 color--theme">
                                        Marketing Integrations <span className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6 col-lg-7 order-first order-md-2">
                            <div className="img-block right-column wow fadeInLeft">
                                <img className="img-fluid" src="/images/img-14.png" alt="content-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
