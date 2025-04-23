import React, { useState } from 'react'

export default function Counter_funtion() {
    const [count, setCount]= useState(0);
  return (
    <div>
        <h1>Giá trị: {count}</h1>
        <button onClick={() => setCount (count+1)}>Tăng </button>
        <button onClick={() => setCount (count-1)}>Giảm</button>
    </div>
  )
}
