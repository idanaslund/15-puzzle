import React, {useState} from "react"
import Box from "./Box"
import { BOX_COUNT, BOARD_SIZE, GRID_SIZE } from "./Constants"
// import { shuffle, swap, canSwap, isSolved } from "Helpers"   


const Board = () => {
    const [boxes, setBoxes] = useState([...Array(BOX_COUNT).keys()])
    const [isStarted, setIsStarted] = useState(false)
    console.log('is started', isStarted)

    // const shuffleBoxes = () => {
    //     const shuffledBoxes = shuffle(boxes)
    //     setBoxes(shuffleBoxes)
    // }

    // const swapBoxes = (boxIndex) => {
    //     if(canSwap(boxIndex, boxes.indexOf(boxes.length - 1))) {
    //         const swappedBoxes = swap(boxes, boxIndex, boxes.indexOf(boxes.length -1))
    //         setBoxes(swappedBoxes)
    //     }
    // }

    // const handleBoxClick = (index) => {
    //     swapBoxes(index)
    // }

    // const handleShuffleClick = () => {
    //     shuffleBoxes()
    // }

    // const handleStartClick = () => {
    //     shuffleBoxes()
    //     setIsStarted(true)
    // }

    const boxHeight = Math.round(BOARD_SIZE / GRID_SIZE)
    const boxWidth = Math.round(BOARD_SIZE / GRID_SIZE)
    const style = {
        width: BOARD_SIZE,
        height: BOARD_SIZE
    }

    // const winner = isSolved(boxes)

return(
    <section>
        <ul style={style}>
            {boxes.map((box, index) => (
                <Box 
                key={box}
                box={box}
                index={index}
                height={boxHeight}
                width={boxWidth}
                // handleBoxClick={handleBoxClick}
                />
            ))}
        </ul>
        {/* {winner && isStarted && <div>Puzzle solved!</div>} */}
        {/* {!isStarted ? 
        (<button onClick={() => handleStartClick()}>Start puzzle</button>) : 
        (<button onClick={() => handleShuffleClick()}>Shuffle puzzle</button>)
    } */}

    </section>
    
)

}

export default Board