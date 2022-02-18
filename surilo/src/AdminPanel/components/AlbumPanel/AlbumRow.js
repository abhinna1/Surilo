import 'bootstrap/dist/css/bootstrap.min.css';
function AlbumRow(props){

    const info = props.info;
    return (
      <tr>
        <th scope="row">{info.album_id}</th>
        <td>{info.album_name}</td>
        <td>{info.artist_name}</td>
        <td>{info.release_date}</td>
        <td>{info.cover_image}</td>
        <td><button>Delete</button> <button>Edit</button></td>
      </tr>
    )
}

export default AlbumRow;