import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';
import './DemoService.css'

const DemoService = (props) => {
    const { name, description, price, img } = props.demoService
    return (
        <div className="demo-section">

            <Card sx={{ maxWidth: 345 }}>
                <img src={img} alt="" />
                <CardHeader
                    title={name}
                />
                <p>Course fee: {price}</p>

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Button variant="contained" color="success">
                    Buy Course
                </Button>

            </Card>
        </div>
    );
};

export default DemoService;