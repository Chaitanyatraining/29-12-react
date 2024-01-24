import React,{useState} from 'react'

const UseStateHook = () => {
    const [count, setCount] = useState(0)

    //always declare the hooks at the top level
    // we should not call hooks inside functions, conditions and nested loops

  return (
    <div>
        <h2>UseStateHook</h2>
        <h4>Count: {count}</h4>
        <button className='btn btn-primary  me-2'
        onClick={()=> setCount(count + 1)}
        >Increment</button>
        <button className='btn btn-danger'
        onClick={()=> setCount(count - 1)}
        >Decrement</button>
    </div>
  )
}

export default UseStateHook