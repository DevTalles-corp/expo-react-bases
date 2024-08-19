interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: string;
  street?: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 38,
    firstName: 'Fernando',
    lastName: 'Herrera',
    address: {
      country: 'Canada',
      houseNo: '615',
    },
  };

  return (
    <>
      <h3>Objetos literales</h3>

      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
