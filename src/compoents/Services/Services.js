import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Home from '../Home/Home';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {
                services.map(service => <Service
                    key={service.level}
                    service={service}
                ></Service>)

            }

            <div>
                
        </div>
        </div >
    );
};

export default Services;