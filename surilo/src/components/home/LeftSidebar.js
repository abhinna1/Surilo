import logo from './img/surilo2.png'
import './homeStyle.css'

const LeftSidebar = () => {
    return ( 
        <div className="d-flex justify-content-center pt-3">
        <div className="logo-cont">
            <img src={logo} alt="" />
        </div>
        </div>
     );
}
 
export default LeftSidebar;