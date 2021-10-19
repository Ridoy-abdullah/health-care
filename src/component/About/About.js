import React from 'react';
import logo2 from '..//..//image/city-hospital-building_74855-6301.jpg'
const About = () => {
    return (
        <div className="d-flex justify-content-between p-5">
        <div className="">
            <img src={logo2} alt="" />
        </div>
        <div className="pt-5">
            <h2 className="fw-bold">About us</h2>
            <p>Helth Care Lab Hospital Dhaka is part of Evercare Group, present in over 25 cities, with 30+ hospitals, 15 clinics and 50+ diagnostic centers across 2 continents, in their mission to provide quality healthcare in emerging markets.
                Health Care Lab Hospital Dhaka is the first and only hospital to be accredited by the Joint Commission International (JCI) 5 times in a row. The JCI Gold Seal of Approval is a globally recognized and reflects an organization’s commitment to best practices in quality and patient safety.Accreditation by recognized international institutions such as JCI are crucial to drive compliance and improve quality and cost-effectiveness across the hospitals and has become a priority for healthcare organizations across the world.</p>
        </div>
    </div>
    );
};

export default About;