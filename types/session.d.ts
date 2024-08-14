import { UserType } from './crud/user';

interface LoginPayloadType {
  identifier: string;
  password: string;
}

interface LoginResponseType {
  user: UserType;
  jwt: string;
}
