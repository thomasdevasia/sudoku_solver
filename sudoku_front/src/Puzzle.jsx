import React, { useState } from 'react'
// import { useEffect } from 'react'

import PuzzleCell from './PuzzleCell.jsx'

import axios from 'axios'

function Puzzle() {

    // const [gridValues, setGridValues] = useState([
    //     [2, 4, 0, 3, 0, 7, 1, 0, 0],
    //     [3, 0, 0, 0, 2, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 5, 0, 0, 7, 0],
    //     [9, 0, 0, 1, 0, 3, 0, 8, 0],
    //     [0, 5, 0, 0, 0, 0, 0, 0, 9],
    //     [0, 0, 0, 2, 0, 0, 0, 0, 0],
    //     [0, 0, 6, 0, 0, 0, 4, 0, 0],
    //     [0, 0, 0, 0, 7, 0, 0, 0, 0],
    //     [5, 0, 0, 9, 0, 8, 0, 1, 0],
    // ])
    const [gridValues, setGridValues] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ])

    const [currentSelection, setCurrentSelection] = useState([0, 0])

    const [, updateState] = React.useState()
    const forceUpdate = React.useCallback(() => updateState({}), [])

    const passLoc = (row, col) => {
        // console.log(row, col)
        setCurrentSelection([row, col])
    }

    // print grid with values
    const printPuzzle = () => {
        let content = []
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                content.push(<PuzzleCell key={i * 10 + j} row={i} col={j} passLoc={passLoc} value={gridValues[i][j]} selected={currentSelection[0] == i && currentSelection[1] == j} />)
            }
        }
        return content
    }

    const getNumbers = () => {
        let numbers = []
        for (var i = 0; i < 10; i++) {
            numbers.push(i)
        }
        return numbers
    }

    const handleGridUpdate = async (newGrid) => {
        await setGridValues(newGrid)
    }

    const handleNumClick = (number) => {
        // console.log(number)
        const temp = gridValues
        temp[currentSelection[0]][currentSelection[1]] = number
        handleGridUpdate(temp)
        forceUpdate()
    }


    const handleSolve = async () => {
        const response = await axios.post('http://127.0.0.1:5000/solve', { grid: gridValues })
        const solution = response.data['result']
        console.log('solve')
        handleGridUpdate(solution)
        // setGridValues(solution)
    }

    return (
        <div className="puzzle">

            <div className='puzzleBoard'>
                {printPuzzle()}
            </div>

            <div className='puzzleNumbers'>
                {getNumbers().map((number) => {
                    return <button className='puzzleNumber' key={number} onClick={(e) => handleNumClick(number)}>{number}</button>
                })}
            </div>

            <div>
                <button onClick={handleSolve}>solve</button>
            </div>
        </div>
    )
}

export default Puzzle