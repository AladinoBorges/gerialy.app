import { UserType } from './user';

interface LoginPayloadType {
  identifier: string;
  password: string;
}

interface LoginResponseType {
  user: UserType;
  jwt: string;
}
