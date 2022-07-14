import { BOX_COUNT } from "./constants"

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

export const isSolved = (boxes, n) => {
    if (n === 1 || n === 0){
    return true
    }

    return boxes[n - 1] >= boxes[n - 2] && 
    isSolved(boxes, n - 1)   
}

export const shuffle = (boxes) => {
    const shuffledBoxes = [
        ...boxes
        .filter((t) => t !== boxes.length - 1)
        .sort(() => Math.random() - 0.5),
        boxes.length - 1
    ]
    return isSolvable(shuffledBoxes) && !isSolved(shuffledBoxes)
    ? shuffledBoxes
    : shuffle(shuffledBoxes)
}

