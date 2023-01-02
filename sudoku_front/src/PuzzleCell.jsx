import React, { useState, useEffect } from 'react'

function PuzzleCell({ row, col, value, passLoc, selected }) {

    // const [value, setValue] = useState(value)
    const [select, setSelect] = useState(true)

    const handleClick = () => {
        // console.log('clicked')
        passLoc(row, col)
    }


    return (
        <div className={`puzzleCell ${selected ? 'puzzleCell-select' : ''}`} onClick={handleClick}> {value} </div>
    )
}

export default PuzzleCell