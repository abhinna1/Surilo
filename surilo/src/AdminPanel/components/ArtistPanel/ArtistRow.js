import 'bootstrap/dist/css/bootstrap.min.css';
function ArtistRow(props){

    const info = props.info;
    return (
      <tr>
        <th scope="row">{info.artist_id}</th>
        <td>{info.UID}</td>
        <td>{info.artist_name}</td>
        <td>{info.document_type}</td>
        <td>{info.document_image}</td>
        <td><button>Delete</button> <button>Edit</button></td>
      </tr>
    )
}

export default ArtistRow;