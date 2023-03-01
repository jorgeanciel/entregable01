import React from 'react'
import '../Card/Card.css'
import Button from '../Button/Button'

const Card = ({phrase,changePhrase}) => {
         

    return (
    <section className='contenedor__texto'>
          <img src={phrase.image} alt="" />
         <div className='contenedor__info animate'>
            <h1>Frases para la vida</h1>
         <p className='contenedor__texto-description'>{phrase.phrase}</p>
         <p className='contenedor__texto-autor'>{phrase.author}</p>
         <Button change={changePhrase}/>
         </div>
    </section>
    
   )
    }

export default Card;
