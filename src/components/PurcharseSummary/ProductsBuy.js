import React, { useEffect }  from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import HouseIcon from '@material-ui/icons/House';
import BusinessIcon from '@material-ui/icons/Business';
import "../../Styles/PurchaseSummary/ProductsBuy.css"
import ItemBuy from './ProductsBuy/ItemBuy';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
const nodemailer = require("nodemailer");



const ProductsBuy = () => {

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
      });
    
    const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    };
    
    // let itemsBuy = JSON.parse(window.localStorage.getItem("itemsBuy"))
    let itemsBuy = useSelector(store=> store.countBuyProduct)
    

    if(!itemsBuy){
        itemsBuy = []
    }
     
    let sum = 0
    for (let i = 0; i < itemsBuy.length; i++) {
        const element = Number(itemsBuy[i].PRECIO_MIN_1 )*Number(itemsBuy[i].AMOUNT )
        sum = element + sum
        console.log(element)
    }


    function formatNumber(number) {
        return new Intl.NumberFormat("ES-MX",{
            style: "currency",
            currency: "COP"
        }).format(number)
    }


    const renderItemsBuy = itemsBuy.map(itemBuy=> <ItemBuy key={itemsBuy.ID_ITEM} itemBuy={itemBuy} sum={sum}/>)




// async..await is not allowed in global scope, must use a wrapper
const sendMail =async () => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: true, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "miguel-angelcr@hotmail.com, mcamacho@gekoestudio.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

    
    

    return (
        <div className="ProductsBuy">
            <div className="RouteBuy">
                <h3>Resumen de Compra</h3>
                <p>Incio - Resumen de Compra</p>
            </div>
            <div className='DescriptionPay'>
                <div className='DescriptionBuy '>
                    <h3>Detalles de la facturacion y despacho</h3>
                    <div className="DescriptionInfoBuy">
                        <div className="SendAddress">
                            <h5>Distribuidora Negociemos</h5>
                            <p>Nit: 1234.567.89</p>
                            <p>Carrera 12# 2-56,piso 2</p>
                            <p>Telefono: 356 789</p>
                            <p>Cali, Valle del Cauca</p>
                        </div>
                        <div className="DeliveryAddress">
                            <h5>Domicilio de Entrega</h5>
                            <div className="Name">  
                                <TextField id="filled-basic" label="Nombre" variant="filled" />
                                <TextField id="filled-basic" label="Apellido" variant="filled" />
                            </div>
                            <div className="Info">
                                <TextField id="filled-basic" label="Dirección" variant="filled" />
                            </div>
                            <div className="InfoPlace">
                                <TextField id="filled-basic" label="Piso/Barrio/Oficina" variant="filled" />
                                <TextField id="filled-basic" label="Telefono" variant="filled" />
                            </div>
                            <div className="InfoSend">
                                <TextField id="filled-basic" label="Ciudad" variant="filled" />
                                <TextField id="filled-basic" label="Departamento" variant="filled" />
                            </div>
                        </div>
                        <div className="PayProducts">
                            <h5>Domicilio de Entrega</h5>
                            <div className="Pay">
                                <div className="PSE">
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            color="primary"
                                        />
                                        }
                                        label={<CreditCardIcon fontSize="large" color="primary"/> }
                                    />
                                    <p>Tarjeta de credito PSE</p>
                                </div>
                                <div className="UponDelivery">
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={state.checkedB}
                                            onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                            label="PAGO"
                                        />
                                        }
                                        label={<HouseIcon fontSize="large" color="primary"/> }
                                    />
                                    <p>Pago contraentrega</p>
                                </div>
                                <div className="Bank">
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={state.checkedC}
                                            onChange={handleChange}
                                            name="checkedC"
                                            color="primary"
                                        />
                                        }
                                        label={<BusinessIcon fontSize="large" color="primary"/> }
                                    />
                                    <p>Transferencia bancaria</p>
                                </div>
                            </div>      
                        </div>
                    </div>
                    <div className="PriceTotal">
                        <div className="InfoPriceTotal"> 
                            <h3>Total</h3>
                            <h3>{ formatNumber(sum)}</h3> 
                        </div>
                        <Button
                            className="Like"
                            variant="contained"
                            color="secondary"
                        > Procesar Pagos
                        </Button>
                    </div>
                    <div className="ButtonPay">
                    
                    </div>
                </div>
                <div className="ProductsInfoBuy">
                    {renderItemsBuy.length > 0?renderItemsBuy: 
                    <div className="EmptyCar">
                        <img src="carrito_vacio.png"></img>
                    </div>}
                </div>
            </div>
            
        </div>
    );
};

export default ProductsBuy;