import './list.css'
import React from 'react'

export const List = ({props, onChoice}) => {
  const listItems = props.map(item =>
    <div
      className="list"
      key={item.id}
      onClick={() => onChoice(item)}
    >
      {item.name}
    </div>
  );
  return (
    <div className="lists">
      {listItems}
    </div>
  )
}
