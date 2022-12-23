import React from 'react';
import './QuoteCard.css';

const QuoteCard = (props) => {

  return (
    <div className='QuoteCard' id = "btn">
        <h1>{props.quote}</h1>
        <p> -  {props.name}</p>
    <i class="fa fa-refresh" aria-hidden="true" onClick={props.onSelect} ></i>
    </div>
    
  )
}

export default QuoteCard;