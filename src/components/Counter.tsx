import { useCounter } from '../hooks/useCounter';

export const Counter = () => {
  const { count, increaseBy } = useCounter();

  return (
    <>
      <h3 className="text-2xl">
        Contador: <small className="font-bold">{count}</small>
      </h3>

      <div>
        <button
          onClick={() => increaseBy(+1)}
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700"
        >
          +1
        </button>
        <button
          onClick={() => increaseBy(-1)}
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700"
        >
          -1
        </button>
      </div>
    </>
  );
};
