import { ApplicationType } from './application';
import { InternalCurriculumType } from './curriculum';
import { IDType } from './generic';
export interface ApplicantType {
  id: IDType;
  curriculumURL?: string;
  linkedin?: string;
  avatarURL?: string;
  birthday?: Date;
  applications?: ApplicationType[];
  curricula?: InternalCurriculumType[];
}
