import React from 'react';
import { Link } from 'react-router-dom';
import './Department.css';

const Department = ({ department }) => {
    const { name, description, img, id } = department;
    return (
        <div>
            <div className="col mb-5">
                <div className="card">
                    <img src={img} class="card-image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <Link to={`/details/${id}`}>
                            <button type="button" class="btn btn-outline-info m-2">Book:
                                {name.toLowerCase()}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Department;