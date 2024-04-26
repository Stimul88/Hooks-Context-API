import {useJsonFetch} from "../../hook/useJsonFetch.js";
import './data.css'

export function Data() {
  const [data, loading, error] = useJsonFetch({
    url: ' http://localhost:7070',
    opts: '/data'
  });


  return (
    <div className='components'>components: Data
      {loading && <div className='load'></div>}
      {!loading && <span>{`Загрузка завершена: ${data.status}`}</span>}
    </div>
  )
}

