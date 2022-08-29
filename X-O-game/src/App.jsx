import { useState } from 'react'
import Start from "./components/Start"

function App() {

  const players = {
    firstPlayer: {
      name: "",
      side: ""
    },
    secondPlayer: {
      name: "",
      side: ""
    }
  }

  const [start, setStart] = useState(true)
  const [playersInfo, setPlayersInfo] = useState(players)

  return (
    <main> 
      <Start 
        start={start} 
        setStart={setStart}
        playersInfo={playersInfo}
        setPlayersInfo={setPlayersInfo}
      />
    </main>
  )
}

export default App
