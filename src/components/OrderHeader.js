import { Link } from "react-router-dom";

export default function OrderHeader(){
    return(
        <header className="orderheader">
            <Link to='/'>
                <img src="../images/tesla.png" alt="TESLA" className="orderheader--logo"></img>
            </Link>
            <button className="orderheader--lang"><img src="https://cdn-icons-png.flaticon.com/128/1006/1006771.png" alt="WEB" className="orderheader--web"></img><span className="orderheader--text">KR</span></button>
        </header>
    )
}