import React, {useEffect} from 'react';
import animations from '../../styles/Animations.module.css';
import {Parallax} from 'react-parallax';


const HomeLayout = () => {

    return (
        <>
            <section>
                <div id="carouselExampleIndicators" className="carousel slide" data-mdb-ride="carousel">
                    <div className="carousel-indicators">
            <span
                data-mdb-target="#carouselExampleIndicators"
                data-mdb-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
            />
                        <span data-mdb-target="#carouselExampleIndicators"
                              data-mdb-slide-to="1"
                              aria-label="Slide 2"
                        />
                        <span data-mdb-target="#carouselExampleIndicators"
                              data-mdb-slide-to="2"
                              aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://mdbootstrap.com/img/new/slides/041.jpg"
                                 className={`d-block w-100 ${animations.zoomOutAnimation}`}
                                 alt="..."
                            />
                            <div className="carousel-caption slideInWrapper d-none d-md-block">
                                <p data-aos="slide-right" data-aos-delay="5000" data-aos-duration="1500"
                                   data-aos-once="false"
                                   className={`carousel-text-head ${animations.underline}`}>We are producing natural
                                    goods</p>
                                <p data-aos="slide-up" data-aos-delay="5000" data-aos-duration="1500"
                                   data-aos-once="false"
                                   className="carousel-text-org">Welcome to <br/> Mj Biotech Industries</p>
                            </div>

                            <div className="carousel-caption d-md-none d-sm-block">
                                <div data-aos="fade-right" data-aos-delay="1000">
                                    <h2 data-aos="slide-right" data-aos-delay="5000" data-aos-duration="1500"
                                        data-aos-once="false"
                                        className={`carousel-text-head ${animations.underline}`}>{`We're producing natural goods`}</h2>
                                    <p data-aos="slide-left" data-aos-delay="5000" data-aos-duration="1500"
                                       data-aos-once="false" className="carousel-text-org">Welcome to <br/> MJ Biotech
                                        Industries</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src={"data:image/jpeg;base64,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"}
                                className={`d-block w-100 ${animations.zoomOutAnimation}`}
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <p data-aos="slide-right" data-aos-delay="5000" data-aos-duration="1500"
                                   data-aos-once="false"
                                   className={`carousel-text-head ${animations.underline}`}>{`We're producing natural goods`}</p>
                                <p data-aos="slide-left" data-aos-delay="5000" data-aos-duration="1500"
                                   data-aos-once="false"
                                   className="carousel-text-org">Welcome to <br/> Mj Biotech Industries</p>
                            </div>

                            <div className="carousel-caption d-md-none d-sm-block">
                                <div data-aos="fade-right" data-aos-delay="1000">
                                    <h2 data-aos="slide-right" data-aos-delay="5000" data-aos-duration="1500"
                                        data-aos-once="false"
                                        className={`carousel-text-head ${animations.underline}`}>{`We're producing natural goods`}</h2>
                                    <p data-aos="slide-up" data-aos-delay="5000" data-aos-duration="1500"
                                       data-aos-once="false" className="carousel-text-org">Welcome to <br/> MJ Biotech
                                        Industries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-mdb-target="#carouselExampleIndicators"
                        data-mdb-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-mdb-target="#carouselExampleIndicators"
                        data-mdb-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </section>
            <section id="about-us">

            </section>
            <section>

                <div className="container home-container-1">
                    <div className="row" style={{
                        marginBottom: '100px'
                    }}>
                        <div className="col-lg-6 col-md-12 col-sm-12 order-1 order-lg-0">
                            <div className="d-flex justify-content-center">
                                <div className="parent">
                                    <div data-aos="fade-right" id="farmer-div" data-aos-delay="100"
                                         data-aos-duration="1500"
                                         className="main-header-div position-absolute shadow">
                                        <div className="row">
                                            <div
                                                className="col-4 d-flex justify-content-center align-items-center align-content-center">
                                                <img alt="" src={"/assets/images/farmer.png"} height="50" width="50"/>
                                            </div>
                                            <div className="col-8 align-content-center">
                                                <h4 id="farmer-count"
                                                    className="mb-0 text-white font-weight-bolder">1347122</h4>
                                                <p className="mb-0 text-white">Farmers Served</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img alt="" className="mjbi-intro-image1 img-fluid"
                                         src="data:image/jpeg;base64,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"/>

                                    <img data-aos-delay="1000" data-aos-duration="1500" data-aos-once="true"
                                         data-aos="fade-left" alt=""
                                         className="mjbi-intro-image2 img-fluid d-none d-md-block"
                                         src="data:image/jpeg;base64,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"/>
                                </div>
                            </div>
                        </div>
                        <div className="main-header col-lg-6 col-md-12 col-sm-12 order-0 order-lg-1">
                            <p style={{
                                color: '#4DB748',
                                fontWeight: 'bold',
                                borderBottom: '1px solid #6D8C54',
                                display: 'inline'
                            }}>Our Introduction</p>
                            <p className="mjbi-main-header-text">Pure Agriculture and Organic Form</p>
                            <p className="mjbi-main-header-text1">We’re Leader in Agriculture Market</p>
                            <p className="mjbi-main-header-text2">There are many variations of passages of available
                                but the majority
                                have suffered alteration in some form, by injected humou or randomised words even
                                slightly
                                believable.</p>
                        </div>
                    </div>

                </div>
                <div className="mjbi-about-header">
                    <div className="container">
                        <div className={"row"}>
                            <div

                                className="col-lg-6 col-md-12 col-sm-12 order-0 order-lg-1 d-flex justify-content-center align-items-center">

                                <img
                                    alt={""}
                                    src={"assets/images/logo.png"}
                                    height={350}
                                    width={350}

                                />

                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 order-1 order-lg-1">
                                <div className="d-flex justify-content-start">
                                    <p className="mjbi-main-header-text3">
                                        Making a pioneer beginning in 2004, we diversified to granulated customized
                                        organic
                                        & micro
                                        nutrient fertilizer,pesticides. The farmer belief and trust has been with us and
                                        that trusted
                                        association has kept us and our products a FIRST choice amongst farmers.
                                        The increasing use of organic fertilizer & Bio Pesticide for agriculture is
                                        being
                                        advocated
                                        widely for reasons known and understood by all. Irresponsible use of chemicals
                                        in
                                        soil and on
                                        plants have shown serious effects on quality of output and its impact on human
                                        and
                                        cattle
                                        health. Its high time we restrict use of synthetic harmful chemicals and replace
                                        it
                                        with
                                        botanical, bio and biological solutions. The quality of agro inputs has direct
                                        correlation with
                                        health of human and cattle. We offer complete solutions for biological
                                        agriculture,
                                        be it for
                                        organic fertilizer, bio fertilizer, Organic Pesticide, Bio Pesticide, soil
                                        nutrient
                                        management,
                                        plant protection products pest management or water conservation at most cost
                                        effective terms.
                                        The products have been manufactured to save cost and reduction in inventory of
                                        multiple inputs
                                        and to give more outputs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div style={{
                marginBottom: '100px'
            }}>
                <Parallax bgImage={"/assets/images/fa.jpg"} strength={500} blur={{min: -1, max: 3}}>
                    <div style={{height: 500}}>
                        <div className="insideStyles">
                            Agriculture matters <br/> to the future of development<br/>
                            <button className="btn btn-success btn-rounded btn-lg">Learn More</button>
                        </div>
                    </div>
                </Parallax>
            </div>
            <style jsx>
                {
                    `
                      .carousel .carousel-item img {
                        height: 100vh;
                      }

                      .home-container-1 {
                        margin-top: 150px;
                      }

                      @media screen and (min-width: 992px) {
                        .carousel-caption {
                          top: 100px;
                          bottom: auto;
                          text-align: start;
                        }
                      }

                      .carousel-caption .carousel-text {
                        margin: 2px;
                      }

                      .carousel-item img {
                        opacity: 0.9 !important;
                      }

                      .carousel-text-head {
                        font-size: 1.5rem !important;
                        color: #fff;
                        font-weight: bolder !important;
                      }

                      .parent {
                        position: relative;
                        top: 0;
                        left: 0;
                      }

                      .carousel-text-org {
                        font-size: 6rem !important;
                        font-family: 'Shadows Into Light', cursive !important;
                        font-weight: bolder !important;
                      }


                      .mjbi-intro-image1 {
                        width: 500px;
                        max-width: 500px;
                        height: 500px;
                        max-height: 500px;
                        border-radius: 10px;
                        position: relative;
                        top: 0;
                        left: 0;
                        /*border: 1px red solid;*/
                      }

                      .mjbi-intro-image2 {
                        border-radius: 10px;
                        position: absolute;
                        bottom: -30px;
                        right: -30px;
                        /*border: 1px green solid;*/
                      }

                      .mjbi-about-header {
                        background: #F5F0E9;
                        padding: 1rem;
                      }

                      .insideStyles {
                        padding: 20px;
                        position: absolute;
                        top: 40%;
                        left: 30%;
                        font-family: 'Shadows Into Light', cursive;
                        font-weight: bolder;
                        font-size: 3rem;
                        color: #000;
                        transform: translate(-50%, -50%);
                      }

                      @media screen and (max-width: 480px) {

                        .carousel-text-org {
                          font-size: 7rem !important;

                        }

                        .home-container-1 {
                          margin-top: 50px;
                        }

                        .main-header {
                          margin: 10px;
                        }

                        .mjbi-intro-image1 {
                          width: 300px;
                          max-width: 300px;
                          height: 300px;
                          max-height: 300px;
                          /*border: 1px red solid;*/
                        }

                        .mjbi-intro-image2 {
                          width: 150px;
                          max-width: 150px;
                          height: 200px;
                          max-height: 200px;
                          /*border: 1px red solid;*/
                        }

                        .insideStyles {
                          top: 50%;
                          left: 50%;
                          font-size: 2rem;
                        }
                      }

                      .main-header-div {
                        background: #4DB748;
                        width: 79%;
                        padding: 1.5rem;
                        z-index: 999;
                        left: 35px;
                        top: 20px;
                        border-radius: 1rem;
                      }

                      @media screen and (max-width: 992px) {
                        .carousel-caption {
                          top: 90px;
                          bottom: auto;
                        }

                        .carousel-text-org {
                          margin-top: 20px;
                          font-size: 2rem !important;
                          font-weight: bolder;
                        }

                        /*.mjbi-intro-image1 {*/
                        /*    height: 7rem;*/
                        /*    width: 15rem;*/
                        /*    !*border: 1px red solid;*!*/
                        /*}*/
                        /*.mjbi-intro-image2 {*/
                        /*    width: 10rem;*/
                        /*    height: 6rem;*/
                        /*}*/
                      }


                      @media screen and (min-width: 992px) {
                        /*.mjbi-intro-image1 {*/
                        /*    height: 25rem;*/
                        /*    width: 25rem;*/
                        /*}*/
                        /*.mjbi-intro-image2 {*/
                        /*    width: 20rem;*/
                        /*    height: 15rem;*/
                        /*}*/
                      }


                      .mjbi-image-1 {
                        width: 500px;
                        height: 500px;
                        border-radius: 1rem;
                      }

                      .mjbi-main-block-1 {
                        padding: 10px;
                        border-radius: 10px;
                        width: 400px;
                      }

                      .mjbi-main-header-text {
                        font-family: 'Averia Serif Libre', cursive !important;
                        color: #334B35;
                        font-weight: bolder;
                        font-size: 3rem;
                      }

                      .mjbi-main-header-text1 {
                        font-family: 'Averia Serif Libre', cursive !important;
                        color: #6D8C54;
                        font-weight: bolder;
                        font-size: 1.5rem;
                      }

                      .mjbi-main-header-text2 {
                        /*color: #6D8C54;*/
                        font-weight: bold;
                        font-size: 1.2rem;
                      }

                      .mjbi-main-header-text3 {
                        font-weight: bold;
                        margin: 10px;
                        font-size: 1.1rem;
                        color: #008000;
                        text-align: justify;
                        text-justify: newspaper !important;
                      }
                    `
                }
            </style>
        </>
    );
};

export default HomeLayout;
