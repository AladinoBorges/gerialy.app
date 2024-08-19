import { ReadApplicantType } from './applicant';
import { IDType } from './generic';

export interface UserType {
  blocked?: boolean;
  confirmed?: boolean;
  email: string;
  role: string;
  username?: string;
  name?: string;
  applicant?: ReadApplicantType;
  applicantID?: IDType;
}

export interface ReadUserType extends UserType {
  id: IDType;
}
