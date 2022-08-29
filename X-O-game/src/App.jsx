import { useState } from 'react'
import Start from "./components/Start"
import Game from "./components/Game"

function App() {

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

  const [start, setStart] = useState(true)
  const [playersInfo, setPlayersInfo] = useState(players)

  return (
    <main> 
      { 
        start
        ? <Start 
            setStart={setStart}
            playersInfo={playersInfo}
            setPlayersInfo={setPlayersInfo}
            />
        : <Game 
            setStart={setStart}
            playersInfo={playersInfo}
            setPlayersInfo={setPlayersInfo}
          />  
      }
    </main>
  )
}

export default App
