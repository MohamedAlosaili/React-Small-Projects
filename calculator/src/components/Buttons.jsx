export default function Button(props) {
    const { 
        button, 
        darkMode,
        handleChange, 
        handleResult, 
        handleReset, 
        handleClear,
        handleParentheses 
    } = props

    let clickHandler

    switch(button.value) {
        case "=":
            clickHandler = handleResult;
            break;
        case "AC":
            clickHandler = handleReset;
            break;
        case "C":
            clickHandler = handleClear;
            break;
        case "( )":
            clickHandler = handleParentheses    
            break;
        default: 
            clickHandler = handleChange
            break;
    }

    return (
        <button 
            className={
                `${darkMode ? "bg-zinc-900" : "bg-slate-100"} rounded-xl h-12 w-12 grid place-items-center font-sans font-semibold text-lg active:scale-95 
                ${button.type === "operator" ? "text-teal-400 text-xl" : button.type === "main" ? "text-pink-700" : ""}`
            }
            onClick={clickHandler}
        >
            { button.value }
        </button>
    )
}