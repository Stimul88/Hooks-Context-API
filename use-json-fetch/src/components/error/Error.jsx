import {useJsonFetch} from "../../hook/useJsonFetch.js";

export function Error() {
  const [data, loading, error] = useJsonFetch({
    url: ' http://localhost:7070',
    opts: '/error)'
  });

  return (
    <div className='components'>
      <div>components: Error</div>
      {error === null && <div className='load'></div>}
      {!loading && <span>{`Загрузка завершена: ${error}`}</span>}
    </div>
  )
}