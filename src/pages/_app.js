import Core from '../headless-components/core';
import '../styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <Core>
      <Component {...pageProps} />
    </Core>
  );
}

export default MyApp;
