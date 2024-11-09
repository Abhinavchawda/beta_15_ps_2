import { useRef, useEffect, useState, useMemo } from "react"

const Wordle = () => {
    const words = ["Hello", "Tweet", "Joker", "Priya"]
    const rows = 5, cols = 6
    const [counter, setCounter] = useState(0)
    const [tries, setTries] = useState(0)
    const [won, setWon] = useState(false)
    const wordOfDay = useMemo(() => words[Math.floor(Math.random() * words.length)].toLowerCase(), [])
    const gridsRef = useRef([])
    console.log(wordOfDay)
    
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                CheckWord()
            } else if (e.key === 'Backspace') {
                Back()
            } else if (/^[a-zA-Z]$/.test(e.key)) {
                InsertLetter(e.key.toUpperCase())
            }
        }
        document.addEventListener("keydown", handleKeyPress)
        return () => document.removeEventListener("keydown", handleKeyPress)
    }, [counter, tries, won, wordOfDay])

    function CheckWord() {
            let i, index = tries*cols, currWord = ""

            for (i = index; i < index+cols; i++){
                currWord += gridsRef.current[i].textContent
            }
            currWord = currWord.toLowerCase()
            console.log(currWord)

            if (currWord === wordOfDay){
                setWon(true)
                setTimeout(() => {
                    alert("You won")
                    reload()
                }, 1000);
            }

            setTries(prev => prev+1)
    }


    function InsertLetter(letter) {
        let upperLimit = (tries*cols) + cols-1 - tries

        if (counter < upperLimit){
            gridsRef.current[counter].textContent = letter
            setCounter(prev => prev + 1)
        }
    }

    function Back() {
        if (counter > tries * cols) {
            setCounter(prev => prev - 1);
            gridsRef.current[counter - 1].textContent = "";
        }
    }

    useEffect(() => {
        if (!won && tries === rows) {
            setTimeout(() => {
                alert("You lost!")
                window.location.reload()
            }, 1000)
        }
    }, [tries, won])

    return (
        <div className="h-screen bg-slate-800 flex flex-col gap-4 justify-center items-center">
            <h1 className="text-5xl text-yellow-400 font-bold">Wordle</h1>
            <div className="grid grid-rows-6 grid-cols-5 border border-solid border-white">
                {
                    Array(rows * cols).fill(null).map((_, i) => (
                        <div
                            key={i}
                            ref={el => (gridsRef.current[i] = el)}
                            className="w-[70px] h-[70px] border border-solid border-white transition-all flex justify-center items-center text-2xl text-white uppercase"
                        ></div>
                    ))
                }
            </div>
            <div className="space-x-10">
                <button className="text-lg py-2 px-4 text-white bg-green-500 outline-none border-none rounded hover:bg-green-600 transition" onClick={CheckWord}>Enter</button>
                <button className="text-lg py-2 px-4 text-white bg-red-500 outline-none border-none rounded hover:bg-red-600 transition" onClick={Back}>Back</button>
                <button id="replay" className="text-lg py-2 px-4 text-white bg-blue-500 outline-none border-none rounded hover:bg-blue-600 transition" onClick={()=>{
                    location.reload()
                }}>Replay</button>
            </div>
        </div>
    )
}

export default Wordle
