import { faBackward, faForward, faPause , faPlay} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function control(props) {
  return (
    <div className='control'>

      <button className='control_skipbtn' onClick={()=>props.skipSong()}>
         <FontAwesomeIcon icon={faBackward}/>
      </button>

      <button className='control_playbutton' onClick={()=>props.setIsPlaying(!props.isPlaying)}>
         <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>

      <button className='control_skipbtn' onClick={()=>props.skipSong()}>
         <FontAwesomeIcon icon={faForward}/>
      </button>

    </div>
  )
}

export default control
