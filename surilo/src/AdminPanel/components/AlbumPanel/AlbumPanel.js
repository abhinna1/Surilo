import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AlbumData from "./AlbumData";
function AlbumPanel(){
    return(
        <div>
            <AdminNavbar></AdminNavbar>
            <h3 style={{color:'white',padding:'15px'}} className='panelTitle'>Album Data</h3>
            <AlbumData></AlbumData>
        </div>
    )
}

export default AlbumPanel;