import AdminNavbar from "../AdminNavbar/AdminNavbar";
import ArtistData from "./ArtistData";
import '../admin.css'
function ArtistPanel(){
    return(
        <div>
            <AdminNavbar></AdminNavbar>
            <h3 style={{color:'white',padding:'15px'}} className='panelTitle'>Artist Data</h3>
            <ArtistData></ArtistData>
        </div>
    )
}

export default ArtistPanel;