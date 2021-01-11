import { useQueryClient, useIsFetching } from 'react-query';

export default function CompA1() {
  const queryClient = useQueryClient();
  const refetchQueryExample = () => queryClient.refetchQueries('example');
  const isFetchingExample = useIsFetching('example');

  return (
    <div>
      <div className="card">

        <h3>Component A3</h3>
        <pre className="json json-2">
          {JSON.stringify({ isFetchingExample }, null, 2)}
        </pre>
        <button
          onClick={refetchQueryExample}
          style={{ background: 'skyblue' }}
          disabled={isFetchingExample}
        >{
            isFetchingExample
              ? 'Refetching...'
              : <b>Refetch Query</b>
          }
        </button>

      </div>
    </div>
  );
}
