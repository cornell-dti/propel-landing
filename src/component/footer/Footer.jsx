import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/cornelldti'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/company/cornelldti/about/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/cornelldti/'},
]
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>Deadline: September 21</span>
                                        <h2>Become a <br /> Propellian</h2>
                                        <a className="rn-button-style--2" href="https://dtipropel.typeform.com/to/EH3VYb56">
                                            <span>Apply Now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Quick Link</h4>
                                                <ul className="ft-link">
                                                    <li><a href="https://www.cornelldti.org/" target="_blank" rel="noopener noreferrer">Cornell DTI</a></li>
                                                    <li><a href="https://dtipropel.typeform.com/to/EH3VYb56" target="_blank" rel="noopener noreferrer">Applications</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Say Hello</h4>
                                                <ul className="ft-link">
                                                    <li><a href="mailto:hello@cornelldti.org" target="_blank" rel="noopener noreferrer">Contact Cornell DTI</a></li>
                                                    <li><a href="mailto:yy596@cornell.edu" target="_blank" rel="noopener noreferrer">Contact Program Manager</a></li>
                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`} target="_blank" rel="noopener noreferrer">{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> 
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>Copyright © 2020 Cornell DTI. All Rights Reserved. The word 'Propellian' is licensed from Little Fu Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;