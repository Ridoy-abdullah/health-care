import React from 'react';
import './/Doctor.css'
const Doctor = (props) => {
    const { img, name, degree, speciality, assistantProfessor, schedule, time } = props.doctor
    return (

        <div>
            <div class="col mb-5">
                <div class="card">
                    <img src={img} class="card-image2" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <h6>{degree}</h6>
                        <p>{speciality}</p>
                        <small><p>{assistantProfessor}</p></small>
                        <small><p>{schedule}</p></small>
                        <small><p>{time}</p></small>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Doctor;