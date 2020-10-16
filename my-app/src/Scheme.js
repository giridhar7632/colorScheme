import React, { useState, useEffect } from 'react'
import Color from './Color'
import randomColor from 'randomcolor'

export default function Scheme() {
  const [count, setCount] = useState(0)
  const [colors, setColors] = useState([])
  
  const change = () => {
      setCount(prevCount => prevCount + 1)
    }
  const getColor = () => {
    const baseColor = randomColor().slice(1);
    console.log(baseColor)
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=quad`)
    .then(res => res.json())
    .then(res => {
      setColors(res.colors.map(color => color.hex.value))
    })
  }

  useEffect(getColor, [count])
  console.log(colors)
  return (
    <div>
        <Color
          colors={colors}
        />
        <button className="btn" onClick={change}>Change!</button>
    </div>
  )
}