import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from '@material-ui/core/Button';
import "../../../Styles/PurchaseSummary/ProductsBuy/ItemBuy.css"
import { getCountDeleteProductBuyAction} from '../../../redux/itemsCarDucks';

const ItemBuy = ({itemBuy}) => {

    const dispatch = useDispatch()

    const counItem = useSelector(store=> store.countBuyProduct)

    window.localStorage.setItem("itemsBuy",JSON.stringify(counItem))
    

    const deleteItem = (id) => {
        const deleteCountItem = counItem.filter(counItem=> {return counItem.ID_CODBAR != id})
        dispatch(getCountDeleteProductBuyAction(deleteCountItem))
    }

    function formatNumber(number) {
        return new Intl.NumberFormat("ES-MX",{
            style: "currency",
            currency: "COP"
        }).format(number)
    }

    console.log(counItem)

    return (
        <div className="ItemBuy">
            <div className="ImgBuyCrud">
            {itemBuy.ID_CODBAR? <img src={`img/${itemBuy.ID_CODBAR}.jpg`} alt="img" natural></img>:<img src={"img/036600813719.jpg"} alt="404"></img>}
            </div>
            <div className="DescriptionBuyCrud">
            { itemBuy.DESCRIPCION ? <h5>{itemBuy.DESCRIPCION}</h5>:null}
            {itemBuy.PRECIO_MIN_1? <p>Cantidad: {itemBuy.AMOUNT}</p>:null}
            <Button 
                // disabled={!addCar}
                onClick={()=>{ deleteItem(itemBuy.ID_CODBAR)
                    // dispatch(getCountProductBuyAction(item.length != 0? item:itemLocal))
                }}
                type="number" className="Buy" variant="contained" size="medium" color="secondary"
            >Eliminar</Button>
            
                {/* <Link to={`/compraproducto/${itemBuy.ID_ITEM}`} style={{textDecoration:"none"}}>
                <Button variant="contained"  color="secondary" disableElevation  onClick={()=>{dispatch(getProductBuyAction(itemBuy))}}>
                comprar producto
                </Button>
                </Link> */}
            </div>
            <div className="Price">
                {itemBuy.PRECIO_MIN_1? <h4>{formatNumber(itemBuy.PRECIO_MIN_1)} </h4>:null}
            </div>
            
        </div>
    );
};

export default ItemBuy;