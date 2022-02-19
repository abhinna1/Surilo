import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useHistory } from "react-router";
function Dashboard(){
    const history = useHistory();
    if(JSON.parse(localStorage.getItem('user')).is_admin){
        return(
            <div>
                <AdminNavbar></AdminNavbar>
            </div>
        )
    }
    else return history.push('/home');
}

export default Dashboard;