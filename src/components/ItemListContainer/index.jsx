import "./styles.css";
import avion from "../../assets/icons/moveDrony.gif";
import {useState} from 'react';

function ItemListContainer({ saludoscompa }){
    const [chocales, setChocales] = useState(saludoscompa)

    /*let chocales=saludoscompa;*/

   function cambioSaludo(){
        setChocales(<p className="newCho">" SALUDOS TERRICOLA!! " <img src={avion} alt="drony" className="drony-icon"/></p> )
    }

    return(
        <div className="item-l-c">
            <div>{chocales}</div>
            <button onClick={cambioSaludo} className="item-hijo">Apachurro</button>
        </div>
    );
}

export default ItemListContainer;