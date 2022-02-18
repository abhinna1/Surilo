import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function MusicRow(props){

    const info = props.info;
    const [mId, setmId] = useState(null);
    const [btn, setBtn] = useState(null);

    useEffect(async ()=>{
      let x = await axios.get(`/gethitmusic/${info.music_id}`);
      setmId(x.data);
    
  
    }, []);
    const handleSubmit = async ()=>{
      console.log(mId)
    }
    const handleRemove = async()=>{
      console.log('ye')
    }
    async function getBtn(){
      if(mId[0]!=null) setBtn(<td> <button className='btn btn-success'>Add to hits</button> </td>)

      else setBtn(<td><button className='btn btn-danger' >Remove from hits</button></td>)
    }
    return (
      <tr>
        <th scope="row">{info.music_id}</th>
        <td>{info.title}</td>
        <td>{info.genre_id}</td>
        <td>{info.album_name}</td>
        <td>{info.file}</td>
        {btn}
      </tr>
    )
}

export default MusicRow;