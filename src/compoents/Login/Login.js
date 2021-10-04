import React from 'react';
import './Login.css'
const Login = () => {

    return (
        <div>
            <h2>Do you want to enroll this course ?</h2>
            <p>Please Sign Up this form</p>
            <div className="login-form">
                <input type="text" placeholder="Enter your name" />
                <br />
                <input type="multiple" placeholder="enter course name" />
                <br />
                <input type="email" placeholder="Enter your email" />
                <br />
                <input type="password" placeholder="enter password" />
                <br />
                <button>submit</button>
            </div>
           
        </div>
    );
};

export default Login;