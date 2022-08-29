import Field from "./Field"
export default function Game(props) {
    const {
        setStart,
        playersInfo: {
            firstPlayer,
            secondPlayer
        },
    } = props
        console.log(firstPlayer, secondPlayer)
    return (
        <div className="absolute-center bg-accent text-white p-8 rounded-xl max-w-full flex gap-8">
            <div>
                <h3>{firstPlayer.name}</h3>
                <p>{firstPlayer.side}</p>
            </div>
            <div>
                <Field />
            </div>
            <div>
                <h3>{secondPlayer.name}</h3>
                <p>{secondPlayer.side}</p>
            </div>
        </div>
    )
}