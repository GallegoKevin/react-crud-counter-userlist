import { PersonsProps } from "../../domain/Person";

interface IProps {
  person: PersonsProps;
}

export const Person = ({ person }: IProps) => {
  console.log(person);
  return <li>{person.name}</li>;
};
