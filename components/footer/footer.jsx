import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={styles.footerBottomStick}>
                <div className={styles.footerWrapper}>
                    <div className={styles.footerBackgroundLayer}>
                        <div className={`container`}>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 mt-2 mb-2">
                                    <div>
                                        <img
                                            alt={"logo"}
                                            src='/logo.png'
                                            width={100}
                                            height={100}
                                        />
                                        <p className={` text-white`} style={{
                                            fontSize: '1.75rem'
                                        }}>M.J Biotech Industries</p>

                                        <hr style={{
                                            color: '#fff',
                                            margin: '5px 0'
                                        }}/>
                                        <div>
                                            <p className={`text-white`}>+91-8171766389</p>
                                            <p className={`text-white`}>mjbiotech@gmail.com</p>
                                            <p className={`text-white`}>Near Chawad Devi Mandir ,Hathras-204101</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">

                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
