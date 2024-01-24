import React, {useEffect, useRef} from 'react'

const UseRefHook = () => {
    const data = useRef(null)
    const timerRef = useRef(null)
    const intervalRef = useRef(null)
    // const handleSubmit = () => {
    //     console.log(data.current.value)
    // }

    // useEffect(()=>{
    //     data.current.focus()
    // }, [])
    // useRef Hook is similar to useState Hook

    //useState will re-render when the content change and update in UI.
    
    // useref Hook notify you when it content changes. Mutating the (.current)
    // doesn't cause a re-render.
    const startTimer = () => {
        let seconds = 0;

        intervalRef.current = setInterval(() => {
            seconds++;
            timerRef.current.textContent = `Timer: ${seconds} seconds`
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current)
    }
    
  return (
    <div>
        <h2>UseRefHook</h2>
        {/* <input type="text" ref={data}  placeholder='enter name' />
        <button className='btn btn-primary ms-2' 
        onClick={handleSubmit}
        >Submit</button> */}

        <p ref={timerRef}>Timer: 0 seconds</p>
        <button onClick={startTimer} className='btn btn-secondary me-2'>Start Timer</button>
        <button onClick={stopTimer} className='btn btn-danger'>Stop Timer</button>
    </div>
  )
}

export default UseRefHook