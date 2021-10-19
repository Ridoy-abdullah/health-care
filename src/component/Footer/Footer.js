import React from 'react';
import './Footer.css';
import logo5 from "..//..//image/ssl-commerce.1d268dce.png"

const Footer = () => {
    return (
        <div className="bg-primary footer">
            <div className="container px-4">
                <div className="row gx-5">
                    <div class="col pt-3">
                    <p>About Health lab care</p>
                    <p>About Departments</p>
                    <p>Privacy Policy</p>
                    <p>Terms and condition</p>
                    </div>
                    <div className="col">
                        <img className="c-card"src={logo5} alt="" />
                        <p className="pt-3">© All Rights Reserved To programming hero 2021</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;