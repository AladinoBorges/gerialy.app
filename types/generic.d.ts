import { ChangeEventHandler, FormEvent, ReactNode } from 'react';

export type IDType = string | number;

export interface BaseComponentPropTypes {
  children: ReactNode;
}

export interface DashboardNavigationPropTypes extends BaseComponentPropTypes {
  complementaryHeader: string;
  isLogged: boolean;
}

export type FormInputEventType = FormEvent<HTMLInputElement>;

export type FormChangeEventHandlerType = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

export interface ImagePropTypes {
  width: number;
  height: number;
}
