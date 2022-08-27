export default function Display({ equation, darkMode, setDarkMode, handleChange }) {

    function changeMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
    return (
        <div 
            className="h-40 flex flex-col justify-between"
        >
            <div className={`flex justify-between items-center ${darkMode ? "bg-zinc-800" : "bg-slate-200"} p-5`}>
                <h2 className="font-semibold uppercase">Calculator</h2>
                <div 
                    className={
                        `mode--container before:text-xs before:absolute before:top-1
                        ${darkMode 
                            ? "dark before:content-['drak'] before:right-2 bg-zinc-900" 
                            : "before:content-['light']  before:left-2 before:right-auto bg-slate-100"
                        }`
                    }
                >
                    <button 
                        className="mode--circle"
                        onClick={changeMode}
                    ></button>
                </div>
            </div>
            <input type="text" 
                value={equation.syntax} 
                className="font-semibold bg-transparent focus:outline-none flex gap-3 h-9 px-5"
                onChange={handleChange}
            />
            <h2 className="hide-scroll font-semibold text-2xl h-9 text-yellow-500 px-5">{equation.result}</h2>
        </div>
    )
}