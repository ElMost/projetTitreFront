import { User } from './User';

export default interface AuthContextProps {
  user: User;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  setUser: (value: User) => void;
}
