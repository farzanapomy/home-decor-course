import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DemoService from '../DemoService/DemoService';
import './Home.css'

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <h1>hello i am home </h1>


            {/* services section  */}

            <h1 className="title">Services</h1>
            <div className="demo-Service">
                {
                    services.map(demoService => < DemoService
                        key={demoService.level}
                        demoService={demoService}
                    ></DemoService>)

                }
            </div>

        </div >
    );
};

export default Home;