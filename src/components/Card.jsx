import  './card.css'

function Card(props) {
  return (
    <div className='card'>
       <div className="card-img">
          <img src="https://cdn-icons-png.flaticon.com/512/9815/9815472.png" alt="df" />
       </div>
       <div className="card-text">
           <h2>{props.odam.name}</h2>
           <p>{props.odam.position}</p>
       </div>
    </div>
  )
}

export default Card