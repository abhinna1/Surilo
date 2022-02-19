import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
function ArtistRow(props){

    const info = props.info;



    const getVerifiedStatus = ()=>{
      if(info.is_verified===0) return <td>Unverified</td>;
      else return <td>Verified</td>
    }

    const handleClick = async ()=>{
        await axios.post('/setartistverifiedstate', {artist_id:info.artist_id, is_verified:info.is_verified})
        .then(alert('updated'));
        window.location.reload(true);
    }

    const getActionBtn = ()=>{
      if(info.is_verified===0) return <td><button class='btn btn-success' onClick={handleClick}>Verify</button></td>
      else return <td><button class='btn btn-danger' onClick={handleClick}>Unverify</button></td>
    }
    return (
      <tr>
        <th scope="row">{info.artist_id}</th>
        <td>{info.UID}</td>
        <td>{info.artist_name}</td>
        <td>{info.document_type}</td>
        <td><a target='_black' href={`/artistdocimg?imgsrc=${info.document_image}`} >{info.document_image}</a></td>
        
        {getVerifiedStatus()}
        {getActionBtn()}
      </tr>
    )
}

export default ArtistRow;