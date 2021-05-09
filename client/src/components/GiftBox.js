import React, { useReducer } from 'react';
import './GiftBox.css';

//ACTIONS
const TOGGLE_BOX = '[GiftBox] Toggle'
const toggleBox = () => {
  return { type: TOGGLE_BOX }
}

//REDUCERS (Update)
const DEFAULT = { open: false, wasOpen: false }

const reducer = (
  state = DEFAULT, 
  {type}
) => {
  
  switch(type) {
    case TOGGLE_BOX: {      
      return { 
        open: !state.open,
        wasOpen: state.open
      }
    }
    default: return state
  }
}

//COMPONENT

const GiftBox = () => {
  //hooks are an amazing functional solution!
  const [state, dispatch] = useReducer(reducer, DEFAULT)
  
  return (
    <div className="floor">
      <div className='shadow'></div>
      <div className='shadow2'></div>
      <div className='shadow3'></div>
      <div className="box">
    
        {
          state.open
            ? (<i className="heart-gift">❤️</i>)
            : <></> 
        }
  
        <div 
          className={
            state.open    ? 'lid open' 
          : state.wasOpen ? 'lid close'
          : 'lid'
          }
          onClick={e => dispatch(toggleBox())}>
          
          <div className="qmark">{
            state.open? '!' : '?'
          }
          </div>
      
          <div className="face ltop"></div>
          <div className="face lleft"></div>
          <div className="face lright"></div>
        </div>
    
        <div className="face top"></div>
        <div className="face left"></div>
        <div className="face right"></div>
    
      </div>
  
    </div>
  )
}

export default GiftBox;



