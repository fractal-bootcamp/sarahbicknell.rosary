import { useState } from 'react'
import './App.css'
import { prayersText } from './prayers.tsx'
import { TextAnimation } from "./TextAnimation";



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


const ourFatherIndices = [1, 5, 16, 27, 38, 49];
const gloryBeIndices = [15, 26, 37, 48, 60];

export default function displayRosary() {
  const [beads, setBeads] = useState(Array(61).fill(false)) 
  const [currentPrayer, setCurrentPrayer] = useState(prayersText["SoCC"])
  const [visible, setVisible] = useState(true)

  function handleClick(index: number) {
    const newBeads = [...beads]
    newBeads[index] = !newBeads[index]
    setBeads(newBeads)

    let newPrayer; 

    if (ourFatherIndices.includes(index + 1)) {
      newPrayer = prayersText["Our Father"]
    } else if (gloryBeIndices.includes(index + 1)) {
      newPrayer = prayersText["Glory Be"]
    } else if (ourFatherIndices.includes(index + 1)){
      newPrayer = prayersText["Hail Holy Queen"]
    } else if (index === 60) {
      newPrayer = ""
    } else {
      newPrayer = prayersText["Hail Mary"]
    }

    setCurrentPrayer(newPrayer)

  }

  function handleReset() {
    setBeads(Array(61).fill(false))
    setCurrentPrayer("")
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
        <button onClick={handleReset}> Reset </button>
      </div>
      <div className="prayer"> 
        <TextAnimation text={currentPrayer} />
      </div>
    </div>
  )
}


