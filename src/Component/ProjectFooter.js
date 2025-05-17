import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaGoogle } from 'react-icons/fa';
import { Icon } from '@mui/material';
import logo from "../Images/logo.jpg";

function ProjectFooter() {
    const navigate=useNavigate();
    const handleFDClick = () => {
        // Navigate to the Fixed Deposit Calculator page
        navigate('/fd-calculator'); // Open in a new tab or window
    };
    return (
        <div>
            <div className=' container-fluid Footer pt-4 pb-5'>
                <div className='row ms-5 me-5'>
                    <div className='Footer_menu col-sm-3 col-width-25'>
                        <ul className='Footer-title'><b>About Us</b>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="##">Awards & Recognition</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Media Center</a></li>
                        </ul>
                        <ul className='Footer-title'><b>Investor Relations</b>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Overview</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">List of Unclaimed Accounts</a></li>
                        </ul>
                        <ul className='Footer-title'><b>Tools & Calculators</b>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="" onClick={handleFDClick}>Fixed Deposit Calculator</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Personal Loan EMI Calculator</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Home Loan EMI Calculator</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Car Loan EMI Calculator</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Mutual Fund Calculator</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">SIP Calculator</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Education Loan EMI Calculator</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Retirement Calculator</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Two Wheeler Loan EMI Calculator</a></li>
                        </ul>
                        <ul className='Footer-title'><b>Regulatory Information</b>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Safe Banking</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">RBI Awareness Campaign</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">RBI: Beware of Fictitious Offers</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">RBI Kehta Hai</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Regulatory Disclosure Section</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Customer Literature on NPAs and SMAs</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Regulatory Disclosure Section 2024</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">RBI-UDGAM Portal (Unclaimed Deposits Gateway to Access Information)</a></li>
                        </ul>
                    </div>
                    {/* 2 */}
                    <div className='Footer_menu col-sm-3 col-width-25'>
                        <ul className='Footer-title'><b>Customer Service</b>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Contact Us</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href=""> Customer Care</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href=""> Report Unauthorized Transactions</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Form Center</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Raise a Service Request</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Report Suspicious Activities</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Complaints and Grievance Redressal</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Complaint Form</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Central Know Your Customer (CKYC)</a></li>
                        </ul>
                        <ul className='Footer-title'><b>Popular Products & Services</b>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Savings Account</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Current Account</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Fixed Deposit</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Money Transfer</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Credit Cards</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Personal Loan</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Home Loan</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Car Loan</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Mutual Fund</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Debt Management Services</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Education Loan</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Two Wheeler Loan</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">FASTAG</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">National Pension System</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Public Provident Fund</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Loan on Credit Card</a></li>
                        </ul>
                    </div>
                    {/* 3*/}
                    <div className='Footer_menu col-sm-3 col-width-25'>
                        <ul className='Footer-title'><b>Ways to Bank</b>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Digital Banking</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href=""> Mobile Banking</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Internet Banking</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">iMobile</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">WhatsApp Banking</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Pockets</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Ask iPal</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">ATMs and Branches</a></li>
                        </ul>
                        <ul className='Footer-title'><b>YOUR  Bank Group Websites</b>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">YOUR  Foundation</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">YOUR  Lombard General Insurance</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">YOUR  Prudential Life Insurance</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">YOUR  Prudential AMC</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">YOUR  Venture</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">YOUR  Direct</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">YOUR  Securities Primary Dealership Ltd</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">YOUR  Home Finance</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">YOUR  Investment Management Company Limited</a></li>
                        </ul>
                    </div>
                    {/* 4*/}
                    <div className='Footer_menu col-sm-3 col-width-25'>
                        <ul className='Footer-title'><b>Explore</b>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Interest Rates</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Forex Rates</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Service Charges and Fees</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Account Activation Process</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Important Information Related to Digital Lending</a></li>
                        </ul>
                        <ul className='Footer-title'><b>Other</b>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Career Opportunities</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Do Not Call Registry</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Customer Service Policies</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Business Conduct and Ethics</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Use of Unparliamentary Language by Customers</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Fair Practice Code for Lenders</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Multilingual Disclaimer</a></li>
                            <li className='Footer-item nav-link'> <a className='nav-link' href="">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <div className='container'>
                    <hr /><br />
                    <div className='row'>
                        <div className='col-sm-3'>
                            <h6 className='ms-1'><b>Customer Care</b></h6>
                            <button className='btn btn-outline-warning rounded-pill'><span><i class="bi bi-telephone"></i></span> 1800 1080</button>
                        </div>

                        <div className='col-sm-3'>
                            <h6><b>Get Socials</b></h6>
                            <div className='fs-5'>
                                <FaFacebook className='mx-1'></FaFacebook>
                                <FaGoogle className='mx-1'></FaGoogle>
                                <FaYoutube className='mx-1'></FaYoutube>
                                <FaInstagram className='mx-1'></FaInstagram>
                                <FaTwitter className='mx-1'></FaTwitter>
                                <a href="https://www.facebook.com/your bank/"><i class="bi bi-facebook"></i></a>
                                <a href="https://x.com/YOUR Bank?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="bi bi-twitter-x ps-3"></i></a>
                                <a href="https://www.linkedin.com/company/your -bank/?originalSubdomain=in"><i class="bi bi-linkedin ps-3"></i></a>
                                <a href="https://www.youtube.com/user/your bank"><i class="bi bi-youtube ps-3"></i></a>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <h6><b>Install iMobile</b></h6>
                            <a href="https://apps.apple.com/in/app/imobile-by-your -bank/id375276006" className='btn btn-dark rounded-3'><i class="bi bi-apple me-2"></i>App Store</a>
                            <a href="https://play.google.com/store/apps/details?id=com.csam.your .bank.imobile&hl=en_IN&pli=1" className='btn btn-dark rounded-3 ms-3'><i class="bi bi-google-play me-2"></i>Play Store</a>
                        </div>

                        <div className='col-sm-3'>
                            <h6><b>Your Bank Ltd is registered with <a href="">DICGC</a></b></h6>
                            <img
                                          src={logo}
                                          alt="Logo"
                                          style={{ height: "70px", cursor: "pointer",  width:'125px' }}
                                        />
                        </div>
                    </div><br />
                    <hr />

                    <div className="navbar-horizontal row pt-3">
                        <ul className="nav-item col-sm-6">
                            <li className="nav-link last"><a className='text-secondary' href="">Terms and Conditions</a></li>
                            <li className="nav-link last"><a className='text-secondary' href="">Privacy Policy</a></li>
                            <li className="nav-link last"><a className='text-secondary' href="">Help</a></li>
                            <li className="nav-link last"><a className='text-secondary' href="">Contact Us</a></li>
                        </ul>
                        <p className='col-sm-6 text-end text-secondary'>Copyright 2024, All Rights Reserved</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectFooter

