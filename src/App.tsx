import { useState } from 'react'
import './App.css'
import { prayersText } from './prayers.tsx'
import { TextAnimation } from "./TextAnimation";
import rosaryImage from './rosary.svg'

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

const coordinates = [
  { top: 50, left: 50 },  // Bead 0
  { top: 55, left: 55 },  // Bead 1
  { top: 60, left: 60 },  // Bead 2
  { top: 65, left: 65 },  // Bead 3
  { top: 70, left: 70 },  // Bead 4
  { top: 75, left: 75 },  // Bead 5
  { top: 80, left: 80 },  // Bead 6
  { top: 85, left: 85 },  // Bead 7
  { top: 90, left: 90 },  // Bead 8
  { top: 95, left: 95 },  // Bead 9
  { top: 40, left: 60 },  // Bead 10
  { top: 45, left: 65 },  // Bead 11
  { top: 50, left: 70 },  // Bead 12
  { top: 55, left: 75 },  // Bead 13
  { top: 60, left: 80 },  // Bead 14
  { top: 65, left: 85 },  // Bead 15
  { top: 70, left: 90 },  // Bead 16
  { top: 75, left: 95 },  // Bead 17
  { top: 80, left: 100 }, // Bead 18
  { top: 85, left: 105 }, // Bead 19
  { top: 90, left: 110 }, // Bead 20
  { top: 95, left: 115 }, // Bead 21
  { top: 100, left: 120 }, // Bead 22
  { top: 105, left: 125 }, // Bead 23
  { top: 110, left: 130 }, // Bead 24
  { top: 115, left: 135 }, // Bead 25
  { top: 120, left: 140 }, // Bead 26
  { top: 125, left: 145 }, // Bead 27
  { top: 130, left: 150 }, // Bead 28
  { top: 135, left: 155 }, // Bead 29
  { top: 140, left: 160 }, // Bead 30
  { top: 145, left: 165 }, // Bead 31
  { top: 150, left: 170 }, // Bead 32
  { top: 155, left: 175 }, // Bead 33
  { top: 160, left: 180 }, // Bead 34
  { top: 165, left: 185 }, // Bead 35
  { top: 170, left: 190 }, // Bead 36
  { top: 175, left: 195 }, // Bead 37
  { top: 180, left: 200 }, // Bead 38
  { top: 185, left: 205 }, // Bead 39
  { top: 190, left: 210 }, // Bead 40
  { top: 195, left: 215 }, // Bead 41
  { top: 200, left: 220 }, // Bead 42
  { top: 205, left: 225 }, // Bead 43
  { top: 210, left: 230 }, // Bead 44
  { top: 215, left: 235 }, // Bead 45
  { top: 220, left: 240 }, // Bead 46
  { top: 225, left: 245 }, // Bead 47
  { top: 230, left: 250 }, // Bead 48
  { top: 235, left: 255 }, // Bead 49
  { top: 240, left: 260 }, // Bead 50
  { top: 245, left: 265 }, // Bead 51
  { top: 250, left: 270 }, // Bead 52
  { top: 255, left: 275 }, // Bead 53
  { top: 260, left: 280 }, // Bead 54
  { top: 265, left: 285 }, // Bead 55
  { top: 270, left: 290 }, // Bead 56
  { top: 275, left: 295 }, // Bead 57
  { top: 280, left: 300 }, // Bead 58
  { top: 285, left: 305 }, // Bead 59
  { top: 290, left: 310 }, // Bead 60
];



const ourFatherIndices = [1, 5, 16, 27, 38, 49];
// const gloryBeIndices = [15, 26, 37, 48, 60];
//this happens between other prayres, need to find a way to account for that later 

export default function displayRosary() {
  const [beads, setBeads] = useState(Array(61).fill(false)) 
  const [currentPrayer, setCurrentPrayer] = useState(prayersText["SoCC"])
  // this is to increment a key variable in the TextAnimation element so the component rerenders, lol
  const [prayerCounter, setPrayerCounter] = useState(0)

  function handleClick(index: number) {
    const newBeads = [...beads]
    newBeads[index] = !newBeads[index]
    setBeads(newBeads)

    let newPrayer; 

    if (ourFatherIndices.includes(index + 1)) {
      newPrayer = prayersText["Our Father"]
    // } else if (gloryBeIndices.includes(index + 1)) {
    //   newPrayer = prayersText["Glory Be"]
    } else if (index === 59) {
      newPrayer = prayersText["Hail Holy Queen"]
    } else if (index === 60) {
      newPrayer = ""
    } else {
      newPrayer = prayersText["Hail Mary"]
    }

    setCurrentPrayer(newPrayer)
    setPrayerCounter(prayerCounter + 1)
  }

  function handleReset() {
    setBeads(Array(61).fill(false))
    setCurrentPrayer("")
  }

  return (
    <div className="page">
      <div className="rosary"> 
        <img src={rosaryImage} className="rosaryImage"/>
        {beads.map((beadValue, beadIndex) => (
          <button 
            className="bead" 
            key={beadIndex} 
            style={{
              boxShadow: beads[beadIndex] ? "2px 0px 12px 8px #ebde8a" : "none",
              borderColor: beads[beadIndex] ? "#faf9f5" : "none",
              top: `${coordinates[beadIndex].top}%`,
              left: `${coordinates[beadIndex].left}%`,
              // position: 'absolute',
              // transform: `rotate(${(360 / beads.length) * beadIndex}deg) translate(300px) rotate(-${(360 / beads.length) * beadIndex}deg)`,
            }}
            onClick={() => handleClick(beadIndex)}> {beadIndex} </button>
        ))}
      </div>
      <div> 
        <button className="reset" onClick={handleReset}> Reset </button>
      </div>
      <div className="prayer"> 
        <TextAnimation key={prayerCounter} text={currentPrayer} />
      </div>
    </div>
  )
}


