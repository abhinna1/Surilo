import logo from "./surilo2.png"
import "./logo.css"

const LogoText = () => {
    return ( 
        <div>
            <img className="logo" src={logo} alt="logo"/>
        </div>
     );
}
 
export default LogoText;