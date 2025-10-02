import { ChangeEventHandler, FormEvent, ReactNode } from 'react';

export type IDType = string | number;

export interface BaseComponentPropTypes {
  children: ReactNode;
}

export interface DashboardNavigationPropTypes extends BaseComponentPropTypes {
  isLogged: boolean;
}

export type FormInputEventType = FormEvent<HTMLInputElement>;

export type FormChangeEventHandlerType = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
