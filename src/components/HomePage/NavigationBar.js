import "../../Styles/HomePageStyle/NavigationBar.css"
import React from 'react';
import { NavLink, Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useSelector} from 'react-redux'

const NavigationBar = () => {

    const counItem = useSelector(store=> store.countBuyProduct)

    const counItemLocal = JSON.parse(window.localStorage.getItem("itemsBuy"))

    // const countTotal = counItemLocal.concat(counItem)

 
    return (
        <div className="NavigationBar row col-md-11 col-lg-10 col-xl-8 mx-auto p-0">
            <div className="Nav col-md-12 d-flex justify-content-center p-0">
                <div className="LogoNav col-3">
                    <img src="logo.png"></img>
                </div>
                <div className="NavLinks col-7">
                    <NavLink to="/" activeClassName="selectedLink"
                    >Inicio</NavLink>
                    <NavLink to="/" activeClassName="selectedLink"
                    >Productos</NavLink>
                    <NavLink to="/" activeClassName="selectedLink"
                    >Nosotros</NavLink>
                    <NavLink to="/" activeClassName="selectedLink"
                    >Contacto</NavLink>
                </div>
                <Link  className="BuyCar col-2" to="/compras">
                        <ShoppingCartIcon className="Car"></ShoppingCartIcon>
                        <div className="SelectedProducts">
                            <h3>{counItem.length != 0 ? counItem.length :0}</h3>
                            {/* <h3>{counItemLocal && counItem.length == 0? counItemLocal.length : null}</h3> */}
                        </div>
                </Link>
            </div>
        </div>
    );
};

export default NavigationBar;