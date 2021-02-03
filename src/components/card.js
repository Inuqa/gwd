import React from 'react'
import './card.css'
import ReactCardFlip from 'react-card-flip';

const Card = (props) => {
  const [isFlipped, setIsFlipped] = React.useState(false)

  const handleOnClick = (e) => {
    props.select(props.item)
    setIsFlipped(!isFlipped)
  }


  return(
      <ReactCardFlip isFlipped={isFlipped} >
        <div className="card" onClick={handleOnClick}>
          <p>{props.name}</p>
          <img src={props.image} alt=""  />
        </div>
        <div className="card back">
  <img height="123" width="128" src="https://seeklogo.com/images/D/dota-2-logo-7804D430C9-seeklogo.com.png" alt="" onClick={handleOnClick} />
        </div>
      </ReactCardFlip>
    )
}

export default Card
