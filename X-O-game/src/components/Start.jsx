export default function Start(props) {

    const { 
        start,
        setStart,
        playersInfo: {
            firstPlayer,
            secondPlayer
        },
        setPlayersInfo, 
    } = props

    function handleChange(e) {
        const { name, value } = e.target


        setPlayersInfo(prevInfo => 
            ({...prevInfo, [name]: {...prevInfo[name], name: value}})
        )
    }

    function handleSide(e) {

        const parent = e.target.parentElement
        const isFirst = (parent.dataset.player === "first")
        const selectedSide = e.target.innerHTML

        let firstSide = ""
        let secondSide = ""

        if(isFirst) {
            firstSide = selectedSide
            secondSide = selectedSide === "X" ? "O" : "X"
        } else {
            secondSide = selectedSide
            firstSide = selectedSide === "X" ? "O" : "X"
        }

        setPlayersInfo(prevInfo => ({
            firstPlayer: {...prevInfo.firstPlayer, side: firstSide},
            secondPlayer: {...prevInfo.secondPlayer, side: secondSide}
        }))
    }

    function handleSbmit(e) {
        e.preventDefault()
        console.log(firstPlayer, secondPlayer)
    }

    return (
        <div className="absolute-center bg-accent text-white p-8 rounded-xl max-w-full">
            <h2 className="text-3xl w-max mx-auto mb-10 capitalize">Tic tac toe</h2>
            <form 
                className="w-96 max-w-full flex flex-col"
                onSubmit={handleSbmit}
            >
                <label className="flex align-center mb-2" htmlFor="first-player">
                    First player
                    <div 
                        data-player="first"
                        className="ml-auto flex rounded overflow-hidden"
                        onClick={handleSide}
                    >
                        <button
                            type="button" 
                            className={`
                                py-1 px-3 bg-accent-alt 
                                ${
                                    firstPlayer.side === "X" 
                                    ? "opacity-100" 
                                    : "opacity-50"}`
                                }
                        >
                            X
                        </button>
                        <button 
                            type="button"
                            className={`
                                py-1 px-3 bg-accent-alt 
                                ${
                                    firstPlayer.side === "O" 
                                    ? "opacity-100" 
                                    : "opacity-50"}`
                                }
                        >
                            O
                        </button>
                    </div>
                </label>
                <input 
                    id="first-player"
                    type="text" 
                    className="text-black py-0.5 px-2 rounded focus:outline-none focus:ring focus:ring-violet-300"
                    placeholder="Player name"
                    name="firstPlayer"
                    value={firstPlayer.name}
                    onChange={handleChange}
                />
                <div className="h-0.5 my-8 bg-accent-alt"></div>
                <label className="flex align-center mb-2" htmlFor="second-player">
                    Second player
                    <div 
                        data-player="second"
                        className="ml-auto flex rounded overflow-hidden"
                        onClick={handleSide}
                    >
                        <button 
                            type="button"
                            className={`
                                py-1 px-3 bg-accent-alt 
                                ${
                                    secondPlayer.side === "X" 
                                    ? "opacity-100" 
                                    : "opacity-50"
                                }`
                                }
                        >
                            X
                        </button>
                        <button 
                            type="button"
                            className={`
                                py-1 px-3 bg-accent-alt 
                                ${
                                    secondPlayer.side === "O" 
                                    ? "opacity-100" 
                                    : "opacity-50"
                                }`
                                }
                        >
                            O
                        </button>
                    </div>
                </label>
                <input 
                    id="second-player"
                    type="text" 
                    className="mb-8 text-black py-0.5 px-2 rounded"
                    placeholder="Player name"
                    name="secondPlayer"
                    value={secondPlayer.name}
                    onChange={handleChange}
                />
                <button 
                    className="bg-accent-alt w-max m-auto py-1.5 px-10 rounded-lg active:scale-95"
                >
                    Start
                </button>
            </form>
        </div>
    )
}