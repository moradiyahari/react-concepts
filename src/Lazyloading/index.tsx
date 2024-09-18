import { lazy, useState, Suspense } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));

function CodeSplittingLazyLoadDemo() {
  const [dynamicImportComponentg, setDynamicImportComponentg] =
    useState<JSX.Element>();
  const [componentLoaded, setComponentLoaded] = useState(false);

  const handleClick = () => {
    import('./DynamicImport').then((module) => {
      setDynamicImportComponentg(module.DynamicImport);
    });
  };

  const handleClick2 = () => {
    setComponentLoaded(true);
  };

  return (
    <div>
      <h3>Code Splitting</h3>
      <button onClick={handleClick}>Load dynamic Import Componentg</button>
      <Suspense fallback={<div>Loading...</div>}>
        {dynamicImportComponentg ? dynamicImportComponentg : null}
      </Suspense>

      <h3>Lazy Load</h3>
      <button onClick={handleClick2}>Load dynamic Import Componentg</button>
      <Suspense fallback={<div>Loading...</div>}>
        {componentLoaded ? <LazyComponent /> : null}
      </Suspense>
    </div>
  );
}

export default CodeSplittingLazyLoadDemo;
