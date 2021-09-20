import "../../Styles/Laboratorie/ProductsLab.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {getProductBuyAction} from '../../redux/itemBuyDucks'


const ProductsLab = ({laboratorie}) => {
    const dispatch = useDispatch()

    console.log(laboratorie)

    return ( 
        <div className="ProductsLab">
            {/* {laboratorie.ID_CODBAR? <img src={`img/${laboratorie.ID_CODBAR}.jpg`} alt="img"></img>:<img src={`404.png`} alt="404"></img>} */}

            <Link 
            to={`/compraproducto/${laboratorie.ID_ITEM}`} style={{textDecoration:"none"}}
            onClick={()=>{dispatch(getProductBuyAction(laboratorie))}}
            >
            {laboratorie.ID_CODBAR? 
            <img src={`img/${laboratorie.ID_CODBAR}.jpg`} alt="img"></img>:
            <img src={"img/036600813719.jpg"} alt="404"></img>}
            </Link>

            {/* <p style={{color:"black"}}>{laboratorie.DESCRIPCION}</p> */}
        </div>
    );
}
 
export default ProductsLab;