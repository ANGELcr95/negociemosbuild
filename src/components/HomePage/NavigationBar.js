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
        <div className="NavigationBar">
            <div className="Nav">
                <div className="LogoNav">
                    <img src="logo.png"></img>
                </div>
                <div className="NavLinks">
                    <NavLink to="/" activeClassName="selectedLink"
                    >Inicio</NavLink>
                    <NavLink to="/" activeClassName="selectedLink"
                    >Productos</NavLink>
                    <NavLink to="/" activeClassName="selectedLink"
                    >Nosotros</NavLink>|
                    <NavLink to="/" activeClassName="selectedLink"
                    >Contacto</NavLink>
                </div>
                <Link  className="BuyCar" to="/compras">
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