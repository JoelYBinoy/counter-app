import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment, decrement,reset } from '../redux/counterSlice';

function Counter() {

  const [range,setRange] = useState('')

  console.log("Thae value of range is",range)

  const dispatch = useDispatch();

  const count = useSelector(state=>state.counter.value)     // This hook is used to select the value assigned in the store 



  return (
    <div className='d-flex align-items-center justify-content-center flex-column w-100 mt-5' >
        <h1 style={{fontSize:'70px', color:'black' }} >{count}</h1>

        <div>
            <button className='btn btn-warning p-3 ms-2' onClick={()=>dispatch(decrement(Number(range)))} >Decrement</button>  
            <button  className='btn btn-warning p-3 ms-2' onClick={()=>dispatch(increment(Number(range)))} >Increment</button>
            <button  className='btn btn-warning p-3 ms-2' onClick={()=>dispatch(reset())}  >Reset</button>
        </div>

        <div>
          <input onChange={(e)=>setRange(e.target.value)} type="text" className='form-control w-100 mt-5 ' style={{borderColor:'blue'}} />
        </div>
    </div>
  )
}

export default Counter