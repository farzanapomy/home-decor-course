import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DemoService from '../DemoService/DemoService';
import DisplayHome from '../DisplayHome/DisplayHome';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);
    const [display, setDisplay] = useState([])
    useEffect(() => {
        fetch('./home.json')
            .then(res => res.json())
            .then(data => setDisplay(data))
    }, [])

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>

            <h1>Learn to garden and home decor course</h1>
            <div className="display-home">
                {
                    display.map(displayHome => <DisplayHome
                    key={displayHome.level}
                        displayHome={displayHome}
                    ></DisplayHome>)
                }
            </div>


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