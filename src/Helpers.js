import { BOX_COUNT, GRID_SIZE } from "./Constants"

// If random numbers are not solvable, randomize again.
export const isSolvable = (boxes) => {
    let product = 1
    for(let i = 1, l = BOX_COUNT - 1; i <= l; i++) {
        for(let j = i + 1, m = l + 1; j <= m; j++) {
            product *= (boxes[i - 1] - boxes[j - 1]) / (i - j)
        }
    }
    return Math.round(product) === 1
}

// export const isSolved = (boxes) => {
//     for(let i = 0, l = boxes.length; i < l; i++) {
//         if(boxes[i] !== i) {
//             return false
//         }
//     }
//     return true
// }

export const getIndex = (row, col) => {
    return parseInt(row, 10) * GRID_SIZE + parseInt(col, 10)
}

export const getMatrixPosition = (index) => {
    return {
        row: Math.floor(index / GRID_SIZE),
        col: index % GRID_SIZE
    }
}

export const getVisualPosition = (row, col, width, height) => {
    return {
        x: col * width,
        y: row * height
    }
}

// export const shuffle = (boxes) => {
//     const shuffledBoxes = [
//         ...boxes
//         .filter((t) => t !== boxes.length - 1)
//         .sort(() => Math.random() - 0.5),
//         boxes.length - 1
//     ]
//     return isSolvable(shuffledBoxes) && !isSolved(shuffledBoxes)
//     ? shuffledBoxes
//     : shuffle(shuffledBoxes)
// }

// Can I swap boxes? Is the slot next to it empty.
export const canSwap = (src, dest, GRID_SIZE) => {
    const { row: srcRow, col: srcCol } =  getMatrixPosition(src, GRID_SIZE)
    const { row: destRow, col: destCol } = getMatrixPosition(dest, GRID_SIZE)
    return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1
}

// Move box to empty slot.
export const swap = (boxes, src, dest) => {
    const boxesResult = [...boxes]
    [boxesResult[src], boxesResult[dest]] = [boxesResult[dest], boxesResult[src]]
    return boxesResult
}
