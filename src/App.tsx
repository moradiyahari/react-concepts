import { lazy, Suspense } from 'react';
import './App.css';
const CodeSplittingLazyLoadDemo = lazy(() => import('./Lazyloading/index'));

function App() {
  return (
    <div>
      <h3>Code Splitting and Lazy Loading</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <CodeSplittingLazyLoadDemo />
      </Suspense>
    </div>
  );
}

export default App;
