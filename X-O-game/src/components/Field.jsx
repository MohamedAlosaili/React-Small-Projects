import { useEffect, useState } from "react"
export default function Field(props) {

    const { 
        side, 
        setSide,
        setIsFinished,
        firstPlayer,
        secondPlayer,
        setWinner
    } = props

    const [gameState, setGameState] = useState([["", "", ""], ["", "", ""], ["", "", ""]])


    useEffect(() => {
        console.log(gameState)
        let winner = ""

        for(let i = 0; i < gameState.length; i++) {
            const firstInRow = gameState[i][0]
            const firstInCol = gameState[0][i]

            if(firstInRow === gameState[i][1] && firstInRow === gameState[i][2]) {
                if(firstInRow === "") continue
                winner = firstInRow
            } else if (firstInCol === gameState[1][i] && firstInCol === gameState[2][i]) {
                if(firstInCol === "") continue
                winner = firstInCol
            }
            
        }

        if(winner === "") {
            if(gameState[0][0] !== "" && gameState[0][0] === gameState[1][1] && gameState[0][0] === gameState[2][2]) {
                winner = gameState[0][0]
            } else if(gameState[0][2] !== "" && gameState[0][2] === gameState[1][1] && gameState[0][2] === gameState[2][0]) {
                winner = gameState[0][2]
            }
        }

        const draw = gameState.every(item => item.every(item => item !== ""))
        console.log(draw)
        draw && winner === "" && setWinnerSide("draw")

        winner !== "" && setWinnerSide(winner)
            
    }, [side])

    function setWinnerSide(winner) {
        console.log(winner + " is winner ???")
        if(winner !== "draw") {
            let winnerObj = winner === firstPlayer.side ? firstPlayer : secondPlayer
            setWinner(winnerObj)
        } else {
            setWinner("draw")
        }
        setIsFinished(true)
    }

    function handleClick(e) {
        console.log(e.target.innerHTML === "")
        
        if(e.target.innerHTML === "") {
            e.target.innerHTML = side

            const { row, col } = e.target.dataset

            side === "O" && e.target.classList.add("text-rose-400")
            setGameState(prevState => {
                const newState = [...prevState]
                newState[row - 1][col - 1] = side
                return newState
            })
            setSide(prevSide => prevSide === "X" ? "O" : "X")
        }
    }

    return (
        <div
            className="flex flex-wrap w-72 h-72 sm:w-96 sm:h-96 overflow-hidden relative"
        >
            <div 
                data-row="1"
                data-col="1"
                className="w-1/3 h-1/3 bg-accent-light font-semibold cursor-pointer select-none grid place-items-center text-5xl sm:text-7xl"
                onClick={handleClick}
            ></div>
            <div 
                data-row="1"
                data-col="2"
                className="w-1/3 h-1/3 bg-accent-lighter font-semibold cursor-pointer select-none grid place-items-center text-5xl sm:text-7xl"
                onClick={handleClick}
            ></div>
            <div 
                data-row="1"
                data-col="3"
                className="w-1/3 h-1/3 bg-accent-light font-semibold cursor-pointer select-none grid place-items-center text-5xl sm:text-7xl"
                onClick={handleClick}
            ></div>
            <div 
                data-row="2"
                data-col="1"
                className="w-1/3 h-1/3 bg-accent-lighter font-semibold cursor-pointer select-none grid place-items-center text-5xl sm:text-7xl"
                onClick={handleClick}
            ></div>
            <div 
                data-row="2"
                data-col="2"
                className="w-1/3 h-1/3 bg-accent-light font-semibold cursor-pointer select-none grid place-items-center text-5xl sm:text-7xl"
                onClick={handleClick}
            ></div>
            <div 
                data-row="2"
                data-col="3"
                className="w-1/3 h-1/3 bg-accent-lighter font-semibold cursor-pointer select-none grid place-items-center text-5xl sm:text-7xl"
                onClick={handleClick}
            ></div>
            <div 
                data-row="3"
                data-col="1"
                className="w-1/3 h-1/3 bg-accent-light font-semibold cursor-pointer select-none grid place-items-center text-5xl sm:text-7xl"
                onClick={handleClick}
            ></div>
            <div 
                data-row="3"
                data-col="2"
                className="w-1/3 h-1/3 bg-accent-lighter font-semibold cursor-pointer select-none grid place-items-center text-5xl sm:text-7xl"
                onClick={handleClick}
            ></div>
            <div 
                data-row="3"
                data-col="3"
                className="w-1/3 h-1/3 bg-accent-light font-semibold cursor-pointer select-none grid place-items-center text-5xl sm:text-7xl"
                onClick={handleClick}
            ></div>
            <div className="absolute top-1/3 -translate-y-2/4 left-0 h-1 w-full bg-accent"></div>
            <div className="absolute top-2/3 -translate-y-2/4 left-0 h-1 w-full bg-accent"></div>
            <div className="absolute top-0 -translate-x-2/4 left-1/3 h-full w-1 bg-accent"></div>
            <div className="absolute top-0 -translate-x-2/4 left-2/3 h-full w-1 bg-accent"></div>
        </div>
    )
}