import { useHistory } from "react-router";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import MusicData from "./MusicData";
function MusicPanel(){
    const history = useHistory();
    if(JSON.parse(localStorage.getItem('user')).is_admin){
    return(
        <div>
            <AdminNavbar></AdminNavbar>
            <h3 style={{color:'white',padding:'15px'}} className='panelTitle'>Song Data</h3>
            <MusicData></MusicData>
        </div>
    )
    }
    else return useHistory().push('/home')
}

export default MusicPanel;