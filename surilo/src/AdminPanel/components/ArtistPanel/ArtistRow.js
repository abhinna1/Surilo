import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
function ArtistRow(props){

    const info = props.info;

    const getVerifiedStatus = ()=>{
      if(info.is_verified===0) return <td>Verified</td>;
      else return <td>Unverified</td>
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
        <td>{info.document_image}</td>
        
        {getVerifiedStatus()}
        {getActionBtn()}
      </tr>
    )
}

export default ArtistRow;