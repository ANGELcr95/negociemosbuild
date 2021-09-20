import "../../Styles/HomePageStyle/ExclusiveBrands.css"
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import MemoryIcon from '@material-ui/icons/Memory';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import React from 'react';

import img1 from './imgexcl/img1.jpg';
import img2 from './imgexcl/img2.jpg';
import img3 from './imgexcl/img3.jpg';
import img4 from './imgexcl/img4.jpg';

const ExclusiveBrands = () => {
    return (
        <div className="ExclusiveBrands"> 
        <h5>MARCAS EXCLUSIVAS</h5>
            <div className="ExclusiveBrandsImg">
                <article className="uno">
                    <a ><img src={img1} alt="5" /></a>
                    <AcUnitIcon style={{color: '#0096d2', fontSize: 80}}/>
                    <div ></div>
                </article>
                <article className="dos">
                    <a ><img src={img2} alt="5" /></a>
                    <AllInclusiveIcon style={{color: '#0096d2', fontSize: 80}}/>
                    <div ></div>
                </article>
                <article className="tres">
                    <a ><img src={img3} alt="5" /></a>
                    <MemoryIcon style={{color: '#0096d2', fontSize: 80}}/>
                    <div ></div>
                </article>
                <article className="cuatro">
                    <a ><img src={img4} alt="5" /></a>
                    <TripOriginIcon style={{color: '#0096d2', fontSize: 80}}/>
                    <div ></div>
                </article>
            </div>

        </div>
    );
};

export default ExclusiveBrands;