import {useJsonFetch} from "../../hook/useJsonFetch.js";

export function Loading() {
  const [data, loading, error] = useJsonFetch({
    url: ' http://localhost:7070',
    opts: '/loading'
  });


  return (
    <>
      <div className='components'>components: Loading
        {loading && <div className='load'></div>}
        {!loading && <span>{`Загрузка завершена: ${data.status}`}</span>}
      </div>
    </>
  )
}