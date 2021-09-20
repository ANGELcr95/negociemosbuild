import "../../Styles/HomePageStyle/Services.css"
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PhoneIcon from '@material-ui/icons/Phone';
import PaymentIcon from '@material-ui/icons/Payment';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import React from 'react';

const Services = () => {
    
    return (
        <div className="Services">
            <div  className="ServicesImg">
                {/* <div className="ServicesImg1">
                    <LocalShippingIcon style={{color: '#0096d2', fontSize: 40}}/>
                    <h6>Envio Gratis</h6>
                </div> */}
                {/* <div className="ServicesImg2">
                    <PhoneIcon style={{color: '#0096d2', fontSize: 40}}/>
                    <h6>Soporte 24/7</h6>
                </div> */}
                <div className="ServicesImg3">
                    <PaymentIcon style={{color: '#0096d2', fontSize: 40}}/>
                    <h6>Pagos seguros</h6>
                </div>
                <div className="ServicesImg4">
                     <VerifiedUserIcon style={{color: '#0096d2', fontSize: 40}}/>
                     <h6>100% garantizado</h6>
                </div>
            </div>
        </div>
    );
};

export default Services;