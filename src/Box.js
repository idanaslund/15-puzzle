import React from "react"
import { EachBox } from "styles"
const Box = ({handleBoxClick, value }) => { 

return(

<EachBox>
    <div className={value === 0 ? 'EmptyBox' : 'NumberedBox'} onClick={() => handleBoxClick(value)}>
        {value}
    </div>
</EachBox>

)
}

export default Box