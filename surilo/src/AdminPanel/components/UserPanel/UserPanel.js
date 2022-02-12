import AdminNavbar from "../AdminNavbar/AdminNavbar";

import UserData from "./UserData";
function UserPanel(){
    return(
        <div>
            <AdminNavbar></AdminNavbar>
            <h3 style={{color:'white',padding:'15px'}} className='panelTitle'>User Data</h3>
            <UserData></UserData>
        </div>
    )
}

export default UserPanel;