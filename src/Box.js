import React from "react"
import { getMatrixPosition, getVisualPosition } from "./Helpers"
import { BOX_COUNT, GRID_SIZE } from "./Constants"

const Box = ({box, index, height, width, handleBoxClick }) => {
    const { row, col } = getMatrixPosition(index)
    const visualPos = getVisualPosition(row, col, height, width)
    const boxStyle = {
        width: `calc(100% / ${GRID_SIZE})`,
        height: `calc(100% / ${GRID_SIZE})`,
        translateX: visualPos.x,
        translateY: visualPos.y
    }


return(
    <li
    style={{
        width:boxStyle.width,
        height:boxStyle.height,
        transform: `translate3d(${boxStyle.translateX}px, ${boxStyle.translateY}px), 0`,
        opacity: box === BOX_COUNT - 1 ? 0 : 1
    }}
    onClick={() => handleBoxClick(index)}
    >
        {box + 1}

    </li>
)
}

export default Box