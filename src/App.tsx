import { useState } from 'react'
import './App.css'


// initialize an array of 59 beads with boolean value
// -> maybe it would be simplest to also make the cross and the medal also a bead? not sure yet (thinking cross yes, since you say a prayer then)
// -> ok i'm making it 61 so we can have Hail Holy Queen on the mary medallion at the very end 
// display each bead as a button (distinguishing special buttons visually ) -> do this with bead index or with another attribute in array?
// when clicked ,button value flips and visually changes display 
// for each bead, display the appropriate prayer on the screen as well
// restart button 

// index (0) : Sign of the Cross & Creed
// index (1, 5, 16, 27, 38, 49) : Our Father ( & bonus announce next mystery)
// BETWEEN 15-16, 26-27, 37-38, 48-49, 60-61: Glory Be & Fatima prayer 
// index (61) : Hail Holy Queen
// all other beads : Hail Mary 


export default function displayRosary() {
  const [beads, setBeads] = useState(Array(61).fill(false)) 

  function handleClick(index: number) {
    const newBeads = [...beads]
    newBeads[index] = !newBeads[index]
    setBeads(newBeads)
  }

  return (
    <div className="page">
      <div> 
        {beads.map((beadValue, beadIndex) => (
          <button 
            className="bead" 
            key={beadIndex} 
            style={{
              boxShadow: beads[beadIndex] ? "2px 0px 12px 8px #ebde8a" : "none"
            }}
            onClick={() => handleClick(beadIndex)}> {beadValue} </button>
        ))}
      </div>
      <div> 

      </div>
    </div>
  )
}


