import React, { useState } from 'react'


export default function Compteur(props) {
     const [ compteur , setCompteur ] = useState(0)
     const nom = props.nom
     const   [isLogin , setLogin ]= useState(false)
          return (
    <div>
        <h1>Compteur : {compteur} </h1>
        <button onClick={ ()=>setCompteur( compteur+1) }>changer</button>
        <br /><br />
        <button onClick ={ ()=>setLogin(!isLogin)} >{isLogin? "se deconnecter" :  "se connecter" }  </button>
          {isLogin?(<h3>Welcome {nom}</h3>) : (<h3>Connectez vous</h3>)}
        <button onClick= {()=>props.setColor("blue")}>Changer couleur</button>
    </div>
  )
}
