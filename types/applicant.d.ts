import { ApplicationType } from './application';
import { InternalCurriculumType } from './curriculum';
import { IDType } from './generic';
import { UserType } from './user';

export interface ApplicantType {
  curriculumURL?: string;
  curriculum?: string;
  linkedin?: string;
  avatarURL?: string;
  birthday?: Date;
  applications?: ApplicationType[];
  curricula?: InternalCurriculumType[];
  user?: UserType;
}

export interface ReadApplicantType extends ApplicantType {
  id: IDType;
}

export interface StrapiQueryApplicantType {
  id: IDType;
  attributes: {
    curriculum?: string;
    curriculumURL?: string;
    linkedin?: string;
    avatarURL?: string;
    birthday?: Date;
    applications?: ApplicationType[];
  };
}
