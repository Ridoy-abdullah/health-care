import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';
import './Doctors.css'
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <>
            <div>
                <h1 className="text-center text-info m-4">Our Doctors</h1>
            </div>
            <div id="doctors" className="doctors-container  mt-5 mb-5">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.key}
                        doctor={doctor}
                    >
                    </Doctor>)

                }
            </div>
        </>
    );
};

export default Doctors;