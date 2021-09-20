import React, { useState } from 'react';
import "../../../../Styles/HomePageStyle/Banner/BuyProduct/DescriptionProduct.css"
// Styles/HomePageStyle/Banner/BuyProduct/DescriptionProduct.css"
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from "react-redux";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TextField from '@material-ui/core/TextField';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { getCountProductBuyAction} from '../../../../redux/itemsCarDucks';
import { useForm } from "react-hook-form";


const DescriptionProduct = () => {
    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch()

    const counItem = useSelector(store=> store.countBuyProduct)
    const item = useSelector(store=> store.buyProduct.array)
    console.log(item)


    const itemLocal = JSON.parse(window.localStorage.getItem("item"))

    if(counItem.length != 0){
        window.localStorage.setItem("itemsBuy",JSON.stringify(counItem))
    }

    if(item.length != 0 ){
        window.localStorage.setItem("item", JSON.stringify(item))
    }


    const onSubmit = data => {
        
        const productProperties = {
            
            DESCRIPCION: item.DESCRIPCION,
            ID_CODBAR:item.ID_CODBAR,
            CMLINEAS_DESCRIPCION:item.CMLINEAS_DESCRIPCION,
            PRECIO_MIN_1:item.PRECIO_MIN_1,
            ULTIMO_COSTO_ED:item.ULTIMO_COSTO_ED,
            AMOUNT: data.AMOUNT
        }
        dispatch(getCountProductBuyAction(productProperties))
    };

    const changeColor = (event) => {
        event.currentTarget.style.backgroundColor == "gray"? event.currentTarget.style.backgroundColor = "red":event.currentTarget.style.backgroundColor = "gray"
    }


    function formatNumber(number) {
        return new Intl.NumberFormat("ES-MX",{
            style: "currency",
            currency: "COP"
        }).format(number)
    }

    return (
        <div className="DescriptionProduct">
             <div className='Description'>
                <h3>Nuestros Productos</h3>
                <p>Incio - Nuestros productos</p>
            </div>
            <div className="InfoBuyProduct">
                <div className="ImgBuyProduct">
                    {item.ID_CODBAR? <img src={`img/${item.ID_CODBAR}.jpg`} alt="img"></img>:<img src={"img/036600813719.jpg"} alt="404"></img>}
                </div>
                <div className="PicreAndDescription">
                    <p>{item.length != 0? item.CMLINEAS_DESCRIPCION: itemLocal.CMLINEAS_DESCRIPCION}</p>
                    <h3>{item.length != 0? item.DESCRIPCION: itemLocal.DESCRIPCION}</h3>
                    <div className="Prices">
                        <div className="NoTachado">
                        <h3 >{formatNumber(item.length != 0?item.PRECIO_MIN_1: itemLocal.PRECIO_MIN_1)}</h3>
                            <p>Ahora</p>
                        </div>
                        {item.length != 0 && item.ULTIMO_COSTO_ED < item.PRECIO_MIN_1? 
                         <h5 className="Tachado">{formatNumber(item.length != 0?(item.PRECIO_MIN_1)*1.1:(itemLocal.PRECIO_MIN_1)*1.1)}</h5>:
                         null
                        }
                        {item.length == 0 && itemLocal.ULTIMO_COSTO_ED < itemLocal.PRECIO_MIN_1? 
                         <h5 className="Tachado">{formatNumber(itemLocal.length != 0?itemLocal.PRECIO_MIN_1:itemLocal.PRECIO_MIN_1)}</h5>:
                         null
                        }
                    </div>
                    <p>
                    {item.DESC_ITEM_PADRE}Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los .
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="Amount">
                            <label >Cantidad <TextField
                                id="outlined-number"
                                label="Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                {...register("AMOUNT", {required:true,
                                    pattern:/^\+?[1-9]\d*$/
                                })}
                                />
                            </label>
                        </div>
                        <div className="AddToCar">
                            <Button 
                            // disabled={!addCar}
                            // onClick={()=>{
                            //     // dispatch(getCountProductBuyAction(item.length != 0? item:itemLocal))
                            // }}
                            type="number" className="Buy" variant="contained" size="medium" color="primary" startIcon={<ShoppingCartIcon />}
                            >Añadir al carrito</Button>
                            <Button
                            className="Like"style={{backgroundColor: 'gray'}} onClick={(event)=>{changeColor(event)}}
                                variant="contained"
                                color="default"
                                startIcon={<FavoriteBorderIcon />}
                                >
                            </Button>
                        </div>
                    </form>
                    <div className="RedInfo"> 
                        <p> Ref:        {item.length != 0?item.ID_REFERENCIA:itemLocal.ID_REFERENCIA}</p>
                        <p> Categoria:  Antiesaminico   </p>
                        <p> Etiqietas:  Medivameneto Pastilla</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default DescriptionProduct;