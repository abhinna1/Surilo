let playerReducer = (state, action) =>{
    switch(action.type){
        case 'SET_SONGS_ARRAY':
            return {
                ...state,
                songslist: [...state.songslist, action.data]
            }
        case 'SET_CURRENT_SONG':
            return{
                ...state,
                currentSong:action.data,
                playing:true,
            }
        case 'TOGGLE_RANDOM':
            return{
                ...state,
                currentSong:action.data,
            }
        case 'TOGGLE_REPEAT':
            return {
                ...state,
                repeat:action.data,
            }
        case 'TOGGLE_PLAYING':
            return{
                ...state,
                playing:action.data,
            }
        default:
            return state;
        
    }
    
}

export default playerReducer