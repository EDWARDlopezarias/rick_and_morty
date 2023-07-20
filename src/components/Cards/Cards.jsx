import Card from '../Card/Card.jsx';
import style from './Cards.module.css'

export default function Cards({characters}) {
   const listOfCharacters = characters.map(character=>{
      return(
            <div className={style.cards}>
            <Card
               key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
            </div>
         );      
      }
   )
   return listOfCharacters;   
}
