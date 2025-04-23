import React, { useState } from 'react'

export default function Dientich_hcn() {
    const [width, setWidth]= useState(0);
    const [lenght, setLenght]= useState(0);
    const [area, setArea]= useState(0);
    const dientich =() => {
        setArea(lenght*width);
    }

  return (
    <div>
        <h2>Diện tích hình chữ nhật</h2>
        <div>
            <label>Chiều dài: </label>
            <input type='number' value={lenght} onChange={(e) => setLenght(Number(e.target.value))}/>
        </div>
        <div>
            <label>Chiều drộng: </label>
            <input type='number' value={width} onChange={(e) => setWidth(Number(e.target.value))}/>
        </div>
        <button onClick={dientich}>Tính Diện Tích</button>
        <h3>Diện tích là: {area}</h3>
    </div>
  )
}
