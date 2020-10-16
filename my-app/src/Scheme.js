import React, { useState, useEffect } from 'react'
import Color from './Color'

export default function Scheme() {
  const [count, setCount] = useState(0)
  const [colors, setColors] = useState([])
  const codes = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];

  const change = () => {
      setCount(prevCount => prevCount + 1)
    }

  const randomColor = () => {
    let hexcode = "#";
    for (let i = 0; i < 6; i++) {
      hexcode += codes[Math.floor(Math.random() * codes.length)];
    }
    return hexcode;
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