import React from 'react'
import cat from './cat.png'
import './service.css'

export default function Service() {
    let existe = false
  return (
    <React.Fragment>
    <div className='general'>
      {/* image from https://yandex.com */}
        <img src={cat} alt="cat" />
        <div className='container'>
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aperiam molestias laborum fugiat obcaecati? Quasi natus illo, minima fugit labore autem laboriosam? Esse quasi voluptatem quibusdam, fugiat distinctio iure soluta?</p>
        </div>
        </div>
        {
        existe?(<h4> je m'appelle massizelle</h4>):(<h4>je m'appelle Boubadjou</h4>)
        }
        {  existe && (<h5>je un developeur</h5>)}
    </React.Fragment>
  )
}
