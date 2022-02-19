const Showdoc = () => {
    const queryParams = new URLSearchParams(window.location.search)

    const image = `${queryParams.get('imgsrc')}`;
    return ( 
        <div className="container">
            <img src={`../artist_documents/${image}`} alt="" /> </div>
     );
}
 
export default Showdoc;