import React from 'react'
import './BecomeArtist.css'
function BecomeArtist(props) {
    
    return (props.trigger) ? (
        <div className="becomeArtist">
            <div className="becomeArtist-inner">
                 <button className="close-btn" onClick={()=> props.setTrigger(false)}> X</button>
                  { props.children }
            </div>
        </div>
    ): "";
}
export default BecomeArtist