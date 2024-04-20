import React from 'react'

export default function Calculatrice(props) {
    const note1 = props.note1
    const note2 =props.note2
  return (
    <div>
         Votre moyenne = {(note1+note2)/2 }
    </div>
  )
}