import "./signup.css"
import LogoText from "./Static"
import Entry from "./Entry"

import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    return ( 
        <div className="d-flex flex-column justify-content-center align-items-center">
            <LogoText></LogoText>

            <div className="slogan">
                <h4>Sign up to discover your favorite artists</h4>
            <hr />
            </div>

            <div class="info">
                <h4>Kindly fill with valid details</h4>
            </div>

            <Entry></Entry>

        </div>
     );
}
 
export default Signup;