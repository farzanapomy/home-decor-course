import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';
import './DemoService.css'

const DemoService = (props) => {
    const { name, description, price, img } = props.demoService
    return (
        <div className="demo-section">
            <Card sx={{ maxWidth: 350 , maxHeight:700 }}>
                <img src={img} alt="" />
                <CardHeader
                    title={name}
                />
                <h4>Course fee: {price}</h4>

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