import { useQueryClient } from 'react-query';
import { useFooContext } from '../../headless-components/context-foo';
import { useBarContext } from '../../headless-components/context-bar';

export default function CompBInnerInner() {
  const { foo, setFoo } = useFooContext();
  const { bar, setBar } = useBarContext();

  const queryClient = useQueryClient();
  const queryExample = queryClient.getQueryState('example');

  return (
    <div>
      <div className="card">

        <h3>Component B Inner Inner</h3>

        <div className="flex">

          <div>
            <div>Global State:</div>
            <pre className="json">
              {JSON.stringify({ foo, bar }, null, 2)}
            </pre>
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: 24 }}>
                <span>Foo </span>
                <button onClick={() => setFoo(prev => prev - 10)}>-10</button>
                <button onClick={() => setFoo(prev => prev + 10)}>+10</button>
              </div>
              <div>
                <span>Bar </span>
                <button onClick={() => setBar(prev => prev - 10)}>-10</button>
                <button onClick={() => setBar(prev => prev + 10)}>+10</button>
              </div>
            </div>
          </div>

          <div>
            <div>Query:</div>
            <pre className="json json-2">
              {JSON.stringify({
                status: queryExample.status,
                isFetching: queryExample.isFetching,
                data: queryExample.data,
              }, null, 2)}
            </pre>
          </div>

        </div>

      </div>
    </div>
  );
}
