import { useState } from 'react'
import './App.css'


// initialize an array of 59 beads with boolean value
// -> maybe it would be simplest to also make the cross and the medal also a bead? not sure yet (thinking cross yes, since you say a prayer then)
// display each bead as a button (distinguishing special buttons visually ) -> do this with bead index or with another attribute in array?
// when clicked ,button value flips and visually changes display 
// for each bead, display the appropriate prayer on the screen as well
// restart button 

// index (0) : Sign of the Cross
// index (1, 5, 16, 27, 38, 49) : Our Father 

const initialBeads = Array(60).fill(false)

export default function displayRosary() {
  return (
    <div>
      <div> 
        {initialBeads.map((beadValue, beadIndex) => (
          <button className="bead" key={beadIndex}> {beadValue} </button>
        ))}
      </div>
      <div> 

      </div>
    </div>
  )
}


