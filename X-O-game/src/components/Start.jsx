import { useState } from "react"

export default function Start(props) {

    const {
        setStart,
        playersInfo: {
            firstPlayer,
            secondPlayer
        },
        setPlayersInfo, 
    } = props

    const [showIncompelte, setShowIncompelte] = useState(false)

    function handleChange(e) {
        setShowIncompelte(false)

        const { name, value, id } = e.target
        console.log(name, id, value)
        setPlayersInfo(prevInfo => 
            ({...prevInfo, [name]: {...prevInfo[name], [id]: value}})
        )
    }

    function handleSide(e) {
        setShowIncompelte(false)

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
        if(
            firstPlayer.name && secondPlayer.name && firstPlayer.side 
            && firstPlayer.gender && secondPlayer.gender
            ) {
            setStart(false)
        } else setShowIncompelte(true)
    }

    return (
        <div className="absolute-center bg-accent text-white p-8 rounded-xl max-w-full">
            {showIncompelte 
            && <h4 
                    className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-red-500"
                >
                    Please fill info before hitting start
                </h4>}
            <h2 className="text-3xl w-max mx-auto mb-10 capitalize">Tic tac toe</h2>
            <form 
                className="w-96 max-w-full flex flex-col"
                onSubmit={handleSbmit}
            >
                <label className="flex justify-between align-center mb-2 text-base" htmlFor="first-player">
                    First player
                    <select 
                        id="gender"
                        name="firstPlayer"
                        value={firstPlayer.gender}
                        className="text-black text-sm rounded px-2 focus:outline-none focus:ring"
                        onChange={handleChange}
                        >
                        <option value="">-- Gender --</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <div 
                        data-player="first"
                        className="flex rounded overflow-hidden text-sm"
                        onClick={handleSide}
                        >
                        <button
                            type="button" 
                            className={`
                            py-0.5 px-2 sm:px-6 bg-accent-light 
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
                            py-0.5 px-2 sm:px-6 bg-accent-light 
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
                    id="name"
                    type="text" 
                    className="text-black py-1 px-2 rounded focus:outline-none focus:ring"
                    placeholder="Player name"
                    name="firstPlayer"
                    value={firstPlayer.name}
                    onChange={handleChange}
                    />
                <div className="h-0.5 my-8 bg-accent-light"></div>
                <label className="flex justify-between align-center mb-2 text-base" htmlFor="second-player">
                    Second player
                    <select 
                        id="gender"
                        name="secondPlayer"
                        value={secondPlayer.gender}
                        className="text-black text-sm rounded px-2 focus:outline-none focus:ring"
                        onChange={handleChange}
                    >
                        <option value="">-- Gender --</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <div 
                        data-player="second"
                        className="flex rounded overflow-hidden text-sm"
                        onClick={handleSide}
                    >
                        <button
                            type="button" 
                            className={`
                            py-0.5 px-2 sm:px-6 bg-accent-light 
                            ${
                                secondPlayer.side === "X" 
                                ? "opacity-100" 
                                : "opacity-50"}`
                            }
                            >
                            X
                        </button>
                        <button 
                            type="button"
                            className={`
                            py-0.5 px-2 sm:px-6 bg-accent-light 
                            ${
                                secondPlayer.side === "O" 
                                ? "opacity-100" 
                                : "opacity-50"}`
                            }
                            >
                            O
                        </button>
                    </div>
                </label>
                <input 
                    id="name"
                    type="text" 
                    className="mb-8 text-black py-1 px-2 rounded focus:outline-none focus:ring    "
                    placeholder="Player name"
                    name="secondPlayer"
                    value={secondPlayer.name}
                    onChange={handleChange}
                />
                <button 
                    className="bg-accent-light w-max m-auto py-1.5 px-10 rounded-lg active:scale-95 hover:opacity-90"
                >
                    Start
                </button>
            </form>
        </div>
    )
}