export interface PersonsProps {
  id: number;
  name: string;
  lastName: string;
}

export const persons: PersonsProps[] = [
  { id: 1, name: 'Diana', lastName: 'Mendoza' },
  { id: 2, name: 'Marco', lastName: 'Gutierrez' },
  { id: 3, name: 'Jhon', lastName: 'Quispe' },
];
