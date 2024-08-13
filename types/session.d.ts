import { UserType } from './user';

interface LoginPayloadType {
  identifier: string;
  password: string;
}

interface LoginResponseType {
  data: {
    user: UserType;
    jwt: string;
  };
}
