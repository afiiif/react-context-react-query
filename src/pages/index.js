import { useQuery } from 'react-query';
import { useBarContext } from '../headless-components/context-bar';
import { useFooContext } from '../headless-components/context-foo';
import CompA1 from '../components/comp-a/comp-a1';
import CompA2 from '../components/comp-a/comp-a2';
import CompA3 from '../components/comp-a/comp-a3';
import CompB from '../components/comp-b/comp-b';

export default function HomePage() {
  const { foo } = useFooContext();
  const { bar } = useBarContext();

  const queryExample = useQuery('example',
    () => fetch('/api/example').then((res) => res.json()));

  return (
    <main>

      <h2>State Management Using React-Context & React-Query</h2>
      <br />

      <section>
        <div className="card" style={{ display: 'flex' }}>
          <div>
            <h3>Global State:</h3>
            <pre className="json">
              {JSON.stringify({ foo, bar }, null, 2)}
            </pre>
          </div>
          <div style={{ paddingLeft: 32 }}>
            <h3>Query:</h3>
            <pre className="json json-2">
              {JSON.stringify({
                status: queryExample.status,
                isFetching: queryExample.isFetching,
                data: queryExample.data,
              }, null, 2)}
            </pre>
          </div>
        </div>
      </section>

      <br /><br />
      <p>Get/Set Global State from everywhere using react-context.</p>
      <p>Also, Get/Set <b>Every Query/Mutation</b> from EVERYWHERE using react-query 🔥</p>

      <section className="flex">
        <CompA1 />
        <CompA2 />
        <CompA3 />
      </section>

      <section>
        <CompB />
      </section>

    </main>
  );
}
