import { useState, useEffect } from "react"

export default function Quiz(props) {

    const { 
        questions, 
        setQuestions, 
        toggleCheck, 
        toggleStart, 
        check,
        showMessage,
        setAllAnswered
    } = props

    const [correctCount, setCorrectCount] = useState(0)
    
    useEffect(() => {
        let correctNumber = 0
        questions.map(item => {
            if(item.selected_answer === item.correct_answer){
                correctNumber++
            }
        })
        setCorrectCount(correctNumber)
    }, [check])

    useEffect(() => {
        const allAnswered = questions.every(item => item.selected_answer)
        setAllAnswered(allAnswered)
    }, [questions])
    
    function handleOptions(e, id) {
        const siblings = Array.from(e.target.parentElement.children)
        siblings.forEach(item => item.classList.remove("active"))
        e.target.classList.add("active")
        
        setQuestions(prevQuestions => prevQuestions.map(item => {
            if(item.id === id) {
                return {...item, selected_answer: e.target.innerHTML}
            } else return item
        }))
    }
    
    const quistionElements = questions.map(item => {
        return (
            <div className={`question--container ${check ? "check" : ""}`}>
                <h3 className={`question ${(showMessage && item.selected_answer === "") ? "underline" : ""}`}>
                    {item.question.replaceAll("&#039;", "'").replaceAll("&quot;", '"')}
                </h3>
                {item.options.map(option => (
                    <button 
                    className={`question--option ${(check & option === item.correct_answer) ? "correct" : ""}`} 
                    onClick={(event) => handleOptions(event, item.id)}
                    >
                        {option.replaceAll("&#039;", "'").replaceAll("&quot;", '"')}
                    </button>
                ))}
            </div>
        )
    })
    
    return (
        <div className="quiz--container">
            <img src="/assets/yellow-shape.png" className="top-img" />
            {showMessage && <h3 className="quiz--warning">Please answer all the questions before pressing check</h3>}
            {(questions.length === 0) 
                ? <div className="loader"><span className="loader--spinner"></span></div> 
                : <div>
                    {quistionElements}
                    {
                        check ?
                        <div className="quiz--replay">
                            <p className="quiz--corrects">You scored {correctCount}/5 correct answers</p>
                            <button className="quiz--btn_replay btn" onClick={toggleStart}>Play again</button>
                        </div> :
                        <button className="quiz--btn_check btn" onClick={toggleCheck}>Check answers</button>
                    }
                  </div>
            }
            <img src="/assets/blue-shape.png" className="bottom-img" />
        </div>
    )
}