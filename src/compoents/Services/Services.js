import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Home from '../Home/Home';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                    {
                        services.map(service => <Grid item xs={2} sm={4} md={4} >
                            <Service
                                key={service.level}
                                service={service}
                            ></Service>
                        </Grid>)
                    }
                </Grid>
            </Box>


            <div>

            </div>
        </div >
    );
};

export default Services;