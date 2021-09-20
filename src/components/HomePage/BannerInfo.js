import "../../Styles/HomePageStyle/BannerInfo.css"
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {getProductBuyAction} from '../../redux/itemBuyDucks'
import { useDispatch } from "react-redux";


const BannerInfo = ({item}) => {
    

    const dispatch = useDispatch()
    return (
        <div className="BannerInfo">
            <div className="DescriptionBanner">
                <h4>{item.DESCRIPCION}</h4>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los
                </p>
                
                <Link to={`/compraproducto/${item.ID_ITEM}`} style={{textDecoration:"none"}}>
                <Button variant="contained"  color="secondary" disableElevation  onClick={()=>{dispatch(getProductBuyAction(item))}}>
                comprar producto
                </Button>
                </Link>
            </div>
            <div className="ImgBanner">
                {item.ID_CODBAR? <img src={`img/${item.ID_CODBAR}.jpg`} alt="img" natural></img>:<img src={"img/036600813719.jpg"} alt="404"></img>}
            </div>
        </div>
    );
};


export default BannerInfo;