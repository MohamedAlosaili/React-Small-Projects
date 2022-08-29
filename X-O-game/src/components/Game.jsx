import { useState } from "react"
import Field from "./Field"
import Winner from "./Winner"

export default function Game(props) {
    const {
        setStart,
        playersInfo: {
            firstPlayer,
            secondPlayer
        },
        setPlayersInfo
    } = props

    const [side, setSide] = useState("X")
    const [isFinished, setIsFinished] = useState(false)
    const [winner, setWinner] = useState("")

    const maleImg = "https://media.istockphoto.com/vectors/profile-picture-vector-illustration-vector-id587805156?k=20&m=587805156&s=612x612&w=0&h=Ok_jDFC5J1NgH20plEgbQZ46XheiAF8sVUKPvocne6Y="
    const femaleImg = "https://media.istockphoto.com/vectors/default-avatar-photo-placeholder-icon-grey-profile-picture-business-vector-id1327592692?k=20&m=1327592692&s=612x612&w=0&h=cYT5vvCFeWohqIzHIpYDIw8VgadGm4fM7XIRVS_Wefo="
        console.log(firstPlayer, secondPlayer)
    return (
        <div className="bg-accent text-white p-8 rounded-xl max-w-full flex items-center flex-col lg:flex-row gap-8 my-4 lg:my-0 relative">
            <div className="w-3/4 flex items-center justify-between lg:flex-col">
                <div>
                    <img 
                        src={firstPlayer.gender === "male" ? maleImg : femaleImg} 
                        className="block mx-auto w-24 sm:w-32 rounded-full mb-5" 
                    />
                    <h3 className="w-32 text-center text-xl mb-5">{firstPlayer.name}</h3>
                </div>
                <p 
                    className={
                        `text-5xl text-center font-semibold 
                        ${
                            side === firstPlayer.side 
                            ? "opacity-100 scale-125" : "opacity-50 scale-95"
                        }
                        ${firstPlayer.side === "O" && "text-rose-400"}
                        `}
                >
                    {firstPlayer.side}
                </p>
            </div>
            <div>
                <Field 
                    side={side} 
                    setSide={setSide}
                    setIsFinished={setIsFinished}
                    setWinner={setWinner}
                    firstPlayer={firstPlayer}
                    secondPlayer={secondPlayer}
                />
            </div>
            <div className="w-3/4 flex items-center justify-between lg:flex-col">
                <div>
                    <img 
                        src={secondPlayer.gender === "male" ? maleImg : femaleImg} 
                        className="block mx-auto w-24 sm:w-32 rounded-full mb-5" 
                    />
                    <h3 className="w-32 text-center text-xl mb-5">{secondPlayer.name}</h3>
                </div>
                <p 
                    className={
                        `text-5xl text-center font-semibold 
                        ${
                            side === secondPlayer.side 
                            ? "opacity-100 scale-125" : "opacity-50 scale-95"
                        }
                        ${secondPlayer.side === "O" && "text-rose-400"}
                        `}
                >
                    {secondPlayer.side}
                </p>
            </div>
            {
                isFinished 
                &&  <>
                        <Winner 
                            setStart={setStart}
                            setPlayersInfo={setPlayersInfo}
                            setIsFinished={setIsFinished}
                            winner={winner}
                        />
                        <div className="absolute h-full w-full top-0 left-0"></div>
                    </>
            }
        </div>
    )
}