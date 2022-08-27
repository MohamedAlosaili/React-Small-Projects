import Display from "./components/Display"
import Button from "./components/Buttons"
import { useState } from 'react'
import buttonsValue from "./buttonsValue"

export default function App() {

  const initEquation = {
    syntax: "",
    result: ""
  }

  const [equation, setEquation] = useState(initEquation)
  const [darkMode, setDarkMode] = useState(true)

  function handleButtonChange(e) {
    let value = e.target.innerHTML

    if(isNaN(+value) && value !== ".") value = ` ${value} `

    equation.result === "" 
    ? setEquation(prevEquation => ({...prevEquation, syntax: (prevEquation.syntax + value)}))
    : setEquation({result: "", syntax: value}) 
  }

  function handleBoxChange(e) {
    const value = e.target.value

    setEquation(prevEquation => ({...prevEquation, syntax: value}))
  }
  
  function equationResult() {
    try {
      const replacedSyntax = equation.syntax.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-")
      const converted = Function(`return ${replacedSyntax}`)()
      setEquation(prevEquation => (
        {...prevEquation, result: converted != "Infinity" ? converted : "syntax ERROR"}
      ))
    } catch (err) {
      console.log(err)
      setEquation(prevEquation => (
        {...prevEquation, result: "syntax ERROR"}
      ))
    }
  }
  
  function resetEquation() {
    setEquation(initEquation)
  }

  function clearEntry() {
    setEquation(prevEquation => ({...prevEquation, syntax: prevEquation.syntax.slice(0, -1)}))
  }

  function addParentheses() {
    let openNum = 0;
    let closeNum = 0;

    equation.syntax.split("").forEach(item => {
      if(item === "(") openNum++
      else if(item === ")") closeNum++
    })

    setEquation(prevEquation => {
      if(openNum > closeNum) {
        return {...prevEquation, syntax: prevEquation.syntax + " )"}
      } else {
        return {...prevEquation, syntax: prevEquation.syntax + "( "}
      }
    })

  }

  const buttonsElement = buttonsValue.map((btn, idx) => (
    <Button 
      key={idx + 1} 
      button={btn}
      darkMode={darkMode}
      handleChange={handleButtonChange}
      handleResult={equationResult}
      handleReset={resetEquation}
      handleClear={clearEntry}
      handleParentheses={addParentheses}
    />
  ))
  
  return (
    <main 
      className={
        `${
          darkMode 
          ? "bg-zinc-900 text-slate-300" 
          : "bg-slate-100 text-neutral-800"
        } 
        max-w-xs mx-auto my-6 flex flex-col rounded-xl gap-2 overflow-hidden`
      }
    >
      <Display 
        equation={equation} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        handleChange={handleBoxChange}
      />
      <div 
        className={
          `grid grid-cols-4 ${darkMode ? "bg-zinc-800" : "bg-slate-200"} p-5 gap-4`
        }
      >
        {buttonsElement}
      </div>
    </main>
  )
}
