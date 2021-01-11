import { useBarContext } from '../../headless-components/context-bar';

export default function CompA1() {
  const { bar, setBar } = useBarContext();

  return (
    <div>
      <div className="card">

        <h3>Component A2</h3>
        <pre className="json">
          {JSON.stringify({ bar }, null, 2)}
        </pre>

        <span>Bar </span>
        <button onClick={() => setBar(prev => prev - 1)}>-1</button>
        <button onClick={() => setBar(prev => prev + 1)}>+1</button>

      </div>
    </div>
  );
}
