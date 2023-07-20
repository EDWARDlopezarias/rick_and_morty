import style from './Card.module.css'

export default function Card({name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.card}>
         <button className={style.cardButton} onClick={onClose}>X</button>
         <h2 className={style.cardTag}>nombre: {name}</h2>
         <h2 className={style.cardTag}>status: {status}</h2>
         <h2 className={style.cardTag}>species: {species}</h2>
         <h2 className={style.cardTag}>gender: {gender}</h2>
         <h2 className={style.cardTag}>origin: {origin}</h2>
         <img className={style.cardImage} src={image} alt='image'/>
      </div>
   );
}
