import { IDType } from '../generic';

export interface UserType {
  blocked?: boolean;
  confirmed?: boolean;
  email: string;
  role: string;
  username?: string;
  name?: string;
}

export interface ReadUserType extends UserType {
  id: IDType;
}
