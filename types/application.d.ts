import { AllocationType } from './allocation';
import { ApplicantType } from './applicant';
import { IDType } from './generic';

export enum ApplicationStatusEnum {
  approved = 'approved',
  disapproved = 'disapproved',
  onHold = 'onHold',
}

export interface ProcessType {
  stage: string;
  status: ApplicationStatusEnum | null;
}

export interface ApplicationType {
  allocation?: AllocationType;
  process?: ProcessType[];
  applicant?: ApplicantType;
  wasHired?: boolean;
  salaryExpectation?: number;
  immediateAvailability?: boolean;
  applicantName?: string;
  automatedAnalysisFromIA?: string;
  analysedByIAa?: boolean;
  analysisDate?: Date;
  positionCompatibility?: number;
  hiringSalary?: number;
}

export interface ReadApplicationType extends ApplicationType {
  id: IDType;
}
