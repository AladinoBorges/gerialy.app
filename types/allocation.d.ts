import { ApplicationType } from './application';
import { IDType } from './generic';
import { UserType } from './user';

export interface RecruitmentStages {
  name: string;
}

export enum AllocationStatusEnum {
  active = 'active',
  closed = 'closed',
  cancelled = 'cancelled',
  frozen = 'frozen',
}

export interface AllocationType {
  name?: string;
  description?: string;
  creator?: UserType;
  isPublic?: boolean;
  company?: string;
  companyImageUrl?: string;
  recruitmentStages?: RecruitmentStages[];
  applications?: ApplicationType[];
  isRemote?: boolean;
  applicationURL?: string;
  openPositions?: number;
  automaticClosingDate: Date;
  status: AllocationStatusEnum;
}

export interface ReadAllocationType extends AllocationType {
  id: IDType;
  attributes: AllocationType;
}
