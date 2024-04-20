import React from 'react'

export default function Child({note1 , note2}) {
    const moy=(note1+note2)/2
  return (
    <div>
        votre moyenne = {moy}
        {
       moy>=10? (<h4> vous etes admis </h4>):(<h4> vous devez passer le rattrapage </h4>)
        }
    </div>
  )
}
/*
creer un compo product detail qui recoit un objt product en tant que props
creer un compo product info qui est utilise pour afficher le nom , prix et la description du produit
passer les données du produit du compo product detail au sous compo via les props
*/