import React, {useEffect} from 'react';
import $ from 'jquery';

const Navbar = ({children}) => {

    useEffect(() => {
        $(document).ready(function () {
            $('#toggler-btn').click(function () {
                if ($('#toggler-btn').attr('aria-expanded') === "true") {
                    $('#toggler-icon').removeClass('fa-bars');
                    $('#toggler-icon').addClass('fa-times');
                } else {
                    $('#toggler-icon').removeClass('fa-times');
                    $('#toggler-icon').addClass('fa-bars');
                }
            })
            if ($(window).width() > 992) {

                $(window).scroll(function () {
                    // console.log(headerHeight)
                    if ($(this).scrollTop() > $('#nav-header-banner').height()) {
                        $('#navbar-top').addClass("fixed-top");
                        // $('#navbar-top').addClass('fadeInDown');
                        // $('#navbar-top').addClass("white-bg");
                        // $('#nav-bar').css("background",'white');
                        // add padding top to show content behind navbar
                        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
                    } else {
                        $('#navbar-top').removeClass("fixed-top");
                        // remove padding top from body
                        $('body').css('padding-top', '0');
                    }
                });
            }
        })

    }, [])

    return (
        <>
            <div>
                <div id="nav-header-banner" className="container-fluid">
                    <div className="banner-content">
                        <p>Welcome to MJ Biotech Industries</p>
                        <div className="d-flex">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path
                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                </svg>
                                &nbsp;<a href="mailto:abhihts20@gmail.com">mjbi@gmail.com</a>
                            </p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-clock" viewBox="0 0 16 16">
                                    <path
                                        d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                </svg>
                                &nbsp;Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                            </p>
                        </div>
                    </div>
                </div>
                <nav id="navbar-top" className="navbar navbar-expand-lg p-2">

                    <div className="container-fluid">
                        <a className="navbar-brand"><img id="navbar-brand-image" src="../assets/images/logo.png"
                                                         alt="LOGO"/></a>
                        <button
                            id="toggler-btn"
                            className="navbar-toggler ml-lg-auto"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarCenteredExample"
                            aria-controls="navbarCenteredExample"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i id="toggler-icon" className="fas fa-bars"/>
                        </button>

                        <div
                            className="collapse navbar-collapse justify-content-center"
                            id="navbarCenteredExample">

                            <ul className="navbar-nav mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about-us">About Us</a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle"
                                       href="#"
                                       id="navbarDropdown"
                                       role="button"
                                       data-mdb-toggle="dropdown"
                                       aria-expanded="false">
                                        Products
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">Organic Manures</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Micro Nutrients</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Plant Growth Promoter</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Bio Fertilizer</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Pesticide</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Bio Pesticide</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">R & D</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Marketing Network</a>
                                </li>

                                <li>
                                    <button id="nav-ul-contact-btn" className="btn nav-btn">
                                        Contact Us
                                    </button>
                                    <button id="nav-ul-career-btn" className="btn nav-btn ">
                                        Careers
                                    </button>
                                </li>
                            </ul>

                        </div>


                        <button id="nav-contact-btn" className="btn nav-btn">
                            Contact Us
                        </button>
                        <button id="nav-career-btn" className="btn nav-btn pulseAnim">
                            Careers
                        </button>

                    </div>

                </nav>
            </div>
            {children}
        </>

    );
};

export default Navbar;
