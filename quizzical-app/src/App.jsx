import { useEffect, useState } from "react"
import { nanoid } from "nanoid" 
import Start from "./components/Start"
import Quiz from "./components/Quiz"
import Mobile from "./components/Mobile"

export default function App() {
  const [start, setStart] = useState(true)
  const [check, setCheck] = useState(false)
  const [questions, setQuestions] = useState([])
  const [allAnswered, setAllAnswered] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    getData()
    async function getData() {
      try {
        const res = await fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
        const data = await res.json()

        const modified = data.results.map(item => ({
          id: nanoid(),
          question: item.question,
          options: [...item.incorrect_answers, item.correct_answer].sort(),
          correct_answer: item.correct_answer,
          selected_answer: ""
        }))

        !start && setQuestions(modified)
      } catch (err) {
        console.error(err)
      }
    }
  }, [start])
  
  useEffect(() => {
    if(window.innerWidth < 500) setIsMobile(true)
  }, [])

  function toggleStart() {
    !start && setQuestions([])

    setStart(prevState => !prevState)
    setCheck(false)
    setAllAnswered(false)
  }

  function toggleCheck() {
    if(allAnswered) {
      setCheck(prevState => !prevState) 
      setShowMessage(false)
    }else {
      setShowMessage(true)
    }
  }
  return (
    <main className="app--container">
      {isMobile 
        ? <Mobile /> 
        : start 
          ? <Start toggleStart={toggleStart} />
          : <Quiz 
            questions={questions} 
            setQuestions={setQuestions} 
            toggleCheck={toggleCheck}
            toggleStart={toggleStart}
            check={check}
            showMessage={showMessage}
            setAllAnswered={setAllAnswered}
            />
        
      }
      
    </main>
  )
}
