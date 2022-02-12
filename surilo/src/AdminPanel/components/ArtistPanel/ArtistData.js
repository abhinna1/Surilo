import 'bootstrap/dist/css/bootstrap.min.css';
import ArtistRow from './ArtistRow'

import axios from 'axios';
import { useState, useEffect } from 'react';

function ArtistData(){
    const [artistData, setArtistData] = useState([]);

    useEffect(()=>{
        async function getDatas(){
            let fetchedData = await axios.get(`/getArtistData`)
            setArtistData(fetchedData.data)
        }
        getDatas();
    }, [])

    const getArtistData = ()=>{
        let data = []
        artistData.map((i)=>data.push(<ArtistRow info = {i}></ArtistRow>))
        return data;
    }

    return (
    <div className='Panel'>
        
        <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Artist Id</th>
            <th scope="col">UID</th>
            <th scope="col">Artist Name</th>
            <th scope="col">Docunment Type</th>
            <th scope="col">Document Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {getArtistData()}
        </tbody>
      </table>
    </div>
    )
}

export default ArtistData