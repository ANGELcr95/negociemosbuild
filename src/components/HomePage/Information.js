import "../../Styles/HomePageStyle/Information.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import PopUp from "./Information/PopUp";
import TextField from '@material-ui/core/TextField';




const Information = () => {

    const [buttonPopUp, setButtonPopUp] = useState(false)

    return (
        <div className="Information">
            <div className="NetworkInformation">
                <span className="Track">
                <a href={'https://www.google.com/maps'}><LocalShippingIcon style={{ color:"grey"}}/></a>
                Rastrea mi pedido
                </span>
                    <p>PBX: 57 (2) 386 5770</p>
                <span className="References">Siguenos en
                   <a href="https://www.facebook.com"><FacebookIcon color="primary"/></a>
                   <a href={"https://www.instagram.com/?hl=es/"}><InstagramIcon color="secondary"/></a></span>
                
            </div>
            <div className="Loginbtn">
            <Button className="Loginbtn" onClick={()=>setButtonPopUp(true)} variant="contained" color="secondary">
                Inciar Sesion
            </Button>
            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                <div className="popup-text"> 
                    <h2>Acceso a Clientes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia non sit eveniet molestiae tenetur quam facilis quibusdam distinctio. Numquam dolorum placeat rem saepe commodi alias. Nihil labore incidunt impedit iste?</p>
                    <h5>Correo Electronico</h5>
                    <div className="popup-send">
                        <TextField
                        required
                        id="outlined-required"
                        label="correo"
                        variant="outlined"
                        />
                        <Button className="Loginbtn" onClick={()=>setButtonPopUp(true)} variant="contained" color="secondary">
                            Inciar Sesion
                        </Button>
                    </div>
                </div>
            </PopUp>
            </div>

            
        </div>
    );
};

export default Information;