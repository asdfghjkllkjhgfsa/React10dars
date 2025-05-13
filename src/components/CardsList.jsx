import Card from './Card'
import  './cardslist.css'
import data from "../../public/data.js";

function CardsList() {
  return (
    <div className='ota'>
      {data.map((e,i)=>{
        return  <Card key={i} odam={e}/>
      })}
    </div>
  )
}

export default CardsList