

export default function Winner(props) {
    const {
        setStart,
        setPlayersInfo,
        setIsFinished,
        winner
    } = props

    const players = {
        firstPlayer: {
          name: "",
          gender: "",
          side: ""
        },
        secondPlayer: {
          name: "",
          gender: "",
          side: ""
        }
      }

    function resetGame(e) {
        e.target.parentElement.classList.add("fade-out")
        setTimeout(() => {
            setPlayersInfo(players)
            setStart(true)
            setIsFinished(false)
        }, 300)
    }

    return (
        <div className={`
            fade-in absolute top-1/4 lg:-top-1/2 left-1/2 z-10
            bg-slate-200 text-black lg:bg-accent-gredient lg:text-slate-200 w-80 sm:w-96 p-8 rounded-xl text-center
            `}
        >
            <h2 className="font-medium text-2xl mb-4">{typeof winner === "object" ? "Congrats" : "Draw" }</h2>
            <h3 className="mb-4">
                {
                    typeof winner === "object" 
                    ? <span><span className="font-bold">{winner.name}</span> You are a winner</span>
                    : "No One won"
                }
            </h3>
           <button
                onClick={resetGame}
                className="bg-accent-light text-white w-max m-auto py-1.5 px-10 rounded-lg active:scale-95 hover:opacity-90"
            >
                Play again
            </button> 
        </div>
    )
}