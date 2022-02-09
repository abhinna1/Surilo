import './AccDropdown.css'

function logout(){
    localStorage.clear();
    // alert(localStorage.getItem('email'))
}

function AccDropdown(props){
    const AccUsername= props.userData.username

    return(

    <div className='accountDropdown'>
        <h6>{AccUsername}</h6>
        <a href="{% url 'profile' %}">Account</a>
        <a href="{% url 'wishlist' %}">Wishlist</a>
        <a href="{% url 'myOrder' %}">My Order</a>
        <a href="#">Cancelled Order</a>

            <button onClick={logout} className='login-btn'><a href="/login" className='login-link'>Logout</a></button>

    </div>
    )
}

export default AccDropdown;

