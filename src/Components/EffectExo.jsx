import React, { useEffect, useState } from 'react'
// permet d'executer les methodes de cycle de vie
// useEffect( ()=>{1erParam: le fonctionnement/la logique de use effect (c'est une fonction flechee)} , [c'est la condition])
export default function EffectExo() {
    const [name , setName ] = useState("massizelle")
    useEffect(
        ()=>{ 
        document.title=`Bienvenue ${name}`
        } , 
        [name] //à chaque changement de name sa valeur dans use effect va changer aussi
        )
    // [] vide au chargement de l'appli
    const formChange = (e)=>{
        console.log(e.target.name)
        setName(e.target.value)
    }
  return (
    <>
    <input type="text" name='userName' value={name} onChange={ (event)=>{
        formChange(event)}
    } />
    </>
  )
}
