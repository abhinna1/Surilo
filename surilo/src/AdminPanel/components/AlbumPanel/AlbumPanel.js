import { useHistory } from "react-router";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AlbumData from "./AlbumData";
function AlbumPanel(){
    const history = useHistory();
    if(JSON.parse(localStorage.getItem('user')).is_admin){
    return(
        <div>
            <AdminNavbar></AdminNavbar>
            <h3 style={{color:'white',padding:'15px'}} className='panelTitle'>Album Data</h3>
            <AlbumData></AlbumData>
        </div>
    )
    }
    else return useHistory().push('/home');
}

export default AlbumPanel;