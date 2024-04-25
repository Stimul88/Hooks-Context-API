import './details.css'
import React, {useEffect, useState} from "react";

export const Details = ({props, url}) => {

  const initialState = {
    id: '',
    name: '',
    avatar: '',
    details: {},
  };
  const [user, setUser] = useState(initialState)

  console.log(user)

  useEffect(() => {
    setUser(initialState);
    const getUserData = async () => {
      const response = await fetch(`${url}/${props.id}.json`)

      const result = await response.json();

      setUser(result);
    };
    getUserData();

    return () => {}
  }, [props]);



  return (
    <div className="user">
      {!user && <span>Загрузка...</span>}
      {user && <>
        <img src={user.avatar}  alt={props.name}/>
        <span className="name">{props.name}</span>
        <span className="city">City: {user.details.city}</span>
        <span className="company">Company: {user.details.company}</span>
        <span className="postion">Position: {user.details.position}</span>
      </>
      }
    </div>
  )
}
