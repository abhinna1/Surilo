import 'bootstrap/dist/css/bootstrap.min.css';
import AlbumRow from './AlbumRow'

import axios from 'axios';
import { useState, useEffect } from 'react';

function AlbumData(){
    const [albumData, setAlbumData] = useState([]);

    useEffect(()=>{
        async function getDatas(){
            let fetchedData = await axios.get(`/getAlbumData`)
            setAlbumData(fetchedData.data)
        }
        getDatas();
    }, [])

    const getAlbumData = ()=>{
        let data = []
        albumData.map((i)=>data.push(<AlbumRow info = {i}></AlbumRow>))
        return data;
    }

    return (
    <div className='Panel'>
        
        <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Album Id</th>
            <th scope="col">Album Name</th>
            <th scope="col">Artist Name</th>
            <th scope="col">Release Date</th>
            <th scope="col">Cover Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {getAlbumData()}
        </tbody>
      </table>
    </div>
    )
}

export default AlbumData