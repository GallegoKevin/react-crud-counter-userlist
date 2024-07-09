import './Header.css';

interface HeaderProps {
  message: string;
  /*
  fullName: string;
  age?: number | string;
  */
}

export const Header = ({ message }: HeaderProps) => {
  return (
    <header className='Header'>
      <h1>
        {message}
      </h1>
    </header>
  );
};

