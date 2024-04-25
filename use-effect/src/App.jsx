import {useEffect, useState} from 'react'
import './App.css'
import {Details, List} from "./components/index.js";

export const newUrl = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data`




function App() {
  const [url, setUrl] = useState(newUrl)
  const [users, setUsers] = useState([])
  const [info, setInfo] = useState('')


  useEffect(() => {
    getUsersData();
  }, []);


  const getUsersData = async () => {
    const response = await fetch(`${url}/users.json`)

    const result = await response.json();

    setUsers(result);
  };

  return (
      <div className="container">
        <div className="lists">
          <List
            props={users}
            onChoice={(item) => {setInfo(item);}}
          />
        </div>
        <div className="details">
          {info !== '' && <Details  props={info} url={url}/>}
        </div>
      </div>
  )
}

export default App
