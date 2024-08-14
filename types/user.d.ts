import { IDType } from '../generic';

export interface UserType {
  id: IDType;
  blocked?: boolean;
  confirmed?: boolean;
  email: string;
  role: string;
  username?: string;
}
