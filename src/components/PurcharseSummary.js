import React from 'react';
import Information from './HomePage/Information';
import NavigationBar from './HomePage/NavigationBar';
import ProductsBuy from './PurcharseSummary/ProductsBuy';
import "../Styles/PurchaseSummary.css"
import img from "./bg-main.jpg"

const PurchaseSummary = () => {
    return (
        <div className="PurchaseSummary">
            <div className="BannerImg" style={{backgroundImage:`url(${img})`}}>
            <Information/>
            <NavigationBar/>
            </div>
            <ProductsBuy/>
        </div>
    );
};

export default PurchaseSummary;