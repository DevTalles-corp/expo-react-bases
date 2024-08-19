// import { BasicTypes } from './typescript/BasicTypes';
// import { ObjectLiterals } from './typescript/ObjectLiterals';
// import { BasicFunctions } from './typescript/BasicFunctions';

import { Counter } from './components/Counter';

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-svh">
      <h1 className="text-4xl mb-5">React + TS</h1>

      {/* <BasicTypes /> */}
      {/* <ObjectLiterals /> */}
      {/* <BasicFunctions /> */}
      <Counter />
    </div>
  );
}

export default App;
