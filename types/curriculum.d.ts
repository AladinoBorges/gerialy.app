import { ApplicantType } from './applicant';
import { IDType } from './generic';

export interface InternalCurriculumType {
  id: IDType;
  applicant: ApplicantType;
  name: string;
  isActive?: boolean;
  content: string;
}
