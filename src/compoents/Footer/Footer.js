import React from 'react';
import './Footer.css'
import footer from '../../images/footer.jpg'
const Footer = () => {
    return (
        <div className="footer-section">
            <div>
                <h2>Gardiva.com</h2>
                <p>Adress : Gardiva. IIUC Tower, 1700/A, Plot-9. Shekh  Mujib Road 
                  <p></p> 
                Chittagong-4100. BD - 4100 CHITTAGONG Bangladesh</p>
                <p>Email : Gardiva@gmail.com</p>
                <p>Contact : 01234567890</p>
            </div>
            <img src={footer} alt="" />
        </div >
    );
};

export default Footer;