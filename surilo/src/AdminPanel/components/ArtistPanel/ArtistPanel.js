import AdminNavbar from "../AdminNavbar/AdminNavbar";
import ArtistData from "./ArtistData";
import '../admin.css'
import { useHistory } from "react-router";
function ArtistPanel(){
    const history = useHistory();
    if(JSON.parse(localStorage.getItem('user')).is_admin){
    return(
        <div>
            <AdminNavbar></AdminNavbar>
            <h3 style={{color:'white',padding:'15px'}} className='panelTitle'>Artist Data</h3>
            <ArtistData></ArtistData>
        </div>
    )
    }
    else return useHistory().push('/home');
}

export default ArtistPanel;