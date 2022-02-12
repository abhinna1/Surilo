import 'bootstrap/dist/css/bootstrap.min.css';
function MusicRow(props){

    const info = props.info;

    return (
      <tr>
        <th scope="row">{info.music_id}</th>
        <td>{info.title}</td>
        <td>{info.genre_id}</td>
        <td>{info.album_name}</td>
        <td>{info.file}</td>
        <td><button>Delete</button> <button>Edit</button></td>
      </tr>
    )
}

export default MusicRow;