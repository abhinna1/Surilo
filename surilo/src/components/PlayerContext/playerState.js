import React, { useReducer } from 'react';
import playerReducer from './playerReducer';
import playerContext from './playerContext';



function getrandommusic(){
    
}
const PlayerState = (props)=>{

    const initialState = {
        currentSong:0,
        // {album_id: 3,album_name: "Rocker",artist_id: 1,cover_image: "0.8556667687671364Enlightenment.jpg",file: "0.7907383208317109kho_gaye_hum_kaha.mp3",genre_id: 1,music_id: 10,release_date: "2022-01-07T18:15:00.000Z",title: "Kho gaye hum kahan?"}
        songslist:[{album_id: 3,album_name: "Rocker",artist_id: 1,cover_image: "0.8556667687671364Enlightenment.jpg",file: "0.7907383208317109kho_gaye_hum_kaha.mp3",genre_id: 1,music_id: 10,release_date: "2022-01-07T18:15:00.000Z",title: "Kho gaye hum kahan?"}],
        repeat: false,
        random: false,
        playing: false,
    }
    const [state, dispatch] = useReducer(playerReducer, initialState)

    const setCurrent = (id) => dispatch({type: 'SET_CURRENT_SONG', data:id})

    const setSong = (songsArr) => dispatch({type: 'SET_SONGS_ARRAY', data: songsArr})

    // set playing state
    const togglePlaying = ()=> dispatch({type:'TOGGLE_PLAYING', data: state.playing ? false: true})

    const prevSong = () =>{
        if (state.currentSong === 0){
            setCurrent(state.songslist.length -1);
        }
        else{
            setCurrent(state.currentSong -1)
        }
    }

    const nextSong = ()=>{
        if(state.currentSong === state.songslist.length - 1){
            setCurrent(0);
        }
        else{
            setCurrent(state.currentSong + 1);
        }
    }

    const toggleRepeat = (id) => dispatch({type: 'TOGGLE_REPEAT', data: state.repeat ? false : true})

    const toggleRandom = (id) => dispatch({type: 'TOGGLE_RANDOM', data: state.random ? false : true})

    // End of the song
    const handleEnd = ()=>{
        if(state.random){
            return dispatch({
                type: 'SET_CURRENT_SONG',
                data: ~(Math.random() * state.songslist.length)
            })
        }
        else{
            if(state.repeat){
                nextSong()
            }
            else if(state.currentSong === state.song_list.length - 1){
                return
            }
            else{
                nextSong();
            }
        }
    }
    return <playerContext.Provider
        value={{
            currentSong: state.currentSong,
            songslist: state.songslist,
            repeat: state.repeat,
            random: state.random,
            playing: state.playing,
            audio: state.audio,
            setCurrent,
            setSong,
            prevSong,
            setCurrent,
            togglePlaying,
            toggleRandom,
            toggleRepeat,
            handleEnd,
        }}>
            {props.children}
        </playerContext.Provider>
}
export default PlayerState;