import React, {useEffect, useState} from "react"   
import Box from "Box"
import { BOX_COUNT } from "./constants"
import { shuffle, isSolved } from "./functionality" 
import { TheBoard, ShuffleButton } from "styles"


const Board = () => {
    const boxes = [...Array(BOX_COUNT).keys()]
    const [randomBoxes, setRandomBoxes] = useState([])

    useEffect(() => {
        setRandomBoxes(() => shuffle(boxes))
    }, [])

    const moveBox = (val) => {
        let zeroIndex = randomBoxes.indexOf(0)
        let valIndex = randomBoxes.indexOf(val)
    
        // Finding empty slot by index
        if (valIndex + 5 === zeroIndex || valIndex - 5 === zeroIndex) {
            swap(valIndex, zeroIndex)
        } else if (valIndex + 1 === zeroIndex && zeroIndex % 5 !== 0 ) {
            swap(valIndex, zeroIndex)
        } else if (valIndex - 1 === zeroIndex && (zeroIndex + 1) % 5 !== 0) {
            swap(valIndex, zeroIndex)
        }
      }

      const swap = (valIndex, zeroIndex) => {
        let temArray = [...randomBoxes]
        temArray[zeroIndex] = randomBoxes[valIndex]
        temArray[valIndex] = 0
        setRandomBoxes(() => [...temArray])

          // isSolved in case the last item === 0;
    if (temArray[temArray.length - 1] === 0) {
        const gameWithNoEmptyBox = temArray.slice(temArray.length - 1, 1)
        if (isSolved(gameWithNoEmptyBox, gameWithNoEmptyBox.length)) {
        }
      }
    }
    
    const handleBoxClick = (val) => {
        moveBox(val)
        console.log('I am clicked')
    }

    const handleShuffleClick = () => {
        setRandomBoxes(() => shuffle(boxes))
        console.log('Shuffle is clicked')
    }

    const winner = isSolved(boxes)

return(
    <>
        <TheBoard>
            {randomBoxes.map((e, i) => {
                return(
                    <div key={e} className="styled-board">
                    <Box 
                    value={e}
                    handleBoxClick={handleBoxClick}
                    />
                    </div>
                )
            })}
        </TheBoard>
        
        <ShuffleButton>
            {!winner ?
            (<div>Try to solve the puzzle</div>) :
            (<div>Puzzle solved!</div>)}

            <button onClick={() => handleShuffleClick()}>Shuffle puzzle
            </button>
        </ShuffleButton>
    </> 
    )
}

export default Board