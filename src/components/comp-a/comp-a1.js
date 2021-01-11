import { useFooContext } from '../../headless-components/context-foo';

export default function CompA1() {
  const { foo, setFoo } = useFooContext();

  return (
    <div>
      <div className="card">

        <h3>Component A1</h3>
        <pre className="json">
          {JSON.stringify({ foo }, null, 2)}
        </pre>

        <span>Foo </span>
        <button onClick={() => setFoo(prev => prev - 1)}>-1</button>
        <button onClick={() => setFoo(prev => prev + 1)}>+1</button>

      </div>
    </div>
  );
}
