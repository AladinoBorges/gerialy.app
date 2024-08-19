import { ReadAllocationType } from './allocation';
import { ReadApplicantType } from './applicant';
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
  allocation?: ReadAllocationType;
  process?: ProcessType[];
  applicant?: IDType | ReadApplicantType;
  wasHired?: boolean;
  salaryExpectation?: number;
  immediateAvailability?: boolean;
  applicantName?: string;
  automatedAnalysisFromIA?: string;
  analysedByIA?: boolean;
  analysisDate?: Date;
  positionCompatibility?: number;
  hiringSalary?: number;
}

export interface ReadApplicationType {
  id: IDType;
  attributes: ApplicationType;
}

export interface QueryApplicationType {
  id: IDType;
  attributes?: {
    allocation?: { data: ReadAllocationType };
    process?: ProcessType[];
    wasHired?: boolean;
    salaryExpectation?: number;
    immediateAvailability?: boolean;
    applicantName?: string;
    automatedAnalysisFromIA?: string;
    analysedByIA?: boolean;
    analysisDate?: Date;
    analysisConclusion?: string;
    emailCoverLetter?: string;
    positionCompatibility?: number;
    hiringSalary?: number;
  };
}
