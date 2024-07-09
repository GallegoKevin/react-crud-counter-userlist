import { persons } from "../../domain/Person";
import { Person } from './Person';

export const ListPerson = () => {
  return (
    <ul>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </ul>
  );
};
