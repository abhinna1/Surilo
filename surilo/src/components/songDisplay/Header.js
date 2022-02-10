const Header=()=>{
    return (
    <div className='SongTableHeader'>
        <div className='columnCtn'><h5 className='headerTitle'>Tracks</h5></div>
        <div className='columnCtn'><h5 className='headerTitle'>Duration</h5></div>
        {/* <div className='columnCtn'><h5 className='headerTitle'>Favorites</h5></div> */}
        <div className='columnCtn'><h5 className='headerTitle'>Plays</h5></div>
        <div className='columnCtn'><h5 className='headerTitle'>Share</h5></div>
    </div>
    )
}
export default Header;