import 'bootstrap/dist/css/bootstrap.min.css';
import MusicRow from './MusicRow'

import axios from 'axios';
import { useState, useEffect } from 'react';

function MusicData(){
    const [musicData, setMusicData] = useState([]);

    useEffect(()=>{
        async function getDatas(){
            let fetchedData = await axios.get(`/getMusicData`)
            setMusicData(fetchedData.data)
        }
        getDatas();
    }, [])

    const getMusicData = ()=>{
        let data = []
        musicData.map((i)=>data.push(<MusicRow info = {i}></MusicRow>))
        return data;
    }

    return (
    <div className='Panel'>
        
        <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Music Id</th>
            <th scope="col">Title</th>
            <th scope="col">Genre Id</th>
            <th scope="col">Album Id</th>
            <th scope="col">File</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {getMusicData()}
        </tbody>
      </table>
    </div>
    )
}

export default MusicData