// import React, { useEffect, useState } from 'react';
// import useAuth from '../../../Auth/useAuth';
import Information from '../Information';
import NavigationBar from '../NavigationBar';
import DescriptionProduct from './BuyProduct/DescriptionProduct';
import "./BuyProduct.css"
import img from "./bg-main.jpg"

function BuyProduct() {


    return (
        <div className="BuyProduct" >
            <div className="BannerImg" style={{backgroundImage:`url(${img})`}}>
                <Information />
                <NavigationBar className="NavBuyProduct"/>
            </div>
            <DescriptionProduct/>
        </div>
    );
}

export default BuyProduct;

