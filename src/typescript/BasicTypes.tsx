export const BasicTypes = () => {
  const name: string = 'Fernando';
  const age: number = 38;
  const isActive: boolean = false;

  const powers: string[] = ['React', 'ReactNative', 'Astro'];

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} - {age} - {isActive ? 'Activo' : 'No Activo'}
      <p>{powers.join(', ')}</p>
    </>
  );
};
