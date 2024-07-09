import { User } from '../../domain/User';
import './User.css'

interface UserProps {
  user: User;
}

export const UserComponent = ({ user }: UserProps) => {
  return (
  
      <div className='container-info'>
      <h2 className='title'>{user.name}</h2>
      <ul>
      <li>Nombre de Usuario:{user.username}</li>
      <li>Correo: {user.email}</li>
      <li>Dirección: {user.address.street}, {user.address.suite}, {user.address.city}</li>
      <li>Código Postal: {user.address.zipcode}</li>
      <li>Ubicación Geografica: Lat {user.address.geo.lat}, Lng {user.address.geo.lng} </li>
      <li>Celular: {user.phone}</li>
      <li>Página Web: {user.website}</li>
      <li>Compañia: {user.company.name}</li>
      <li>Frase característica: {user.company.catchPhrase}</li>
      <li>Actividades comerciales: {user.company.bs}</li>
    </ul>
    </div>
  );
};
