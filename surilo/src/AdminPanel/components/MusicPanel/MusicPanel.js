import AdminNavbar from "../AdminNavbar/AdminNavbar";
import MusicData from "./MusicData";
function MusicPanel(){
    return(
        <div>
            <AdminNavbar></AdminNavbar>
            <h3 style={{color:'white',padding:'15px'}} className='panelTitle'>Song Data</h3>
            <MusicData></MusicData>
        </div>
    )
}

export default MusicPanel;