import { ChangeEventHandler, FormEvent, ReactNode } from 'react';

export type IDType = string | number;

export interface BaseComponentPropTypes {
  children: ReactNode;
}

export type FormInputEventType = FormEvent<HTMLInputElement>;

export type FormChangeEventHandlerType = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

export interface DynamicPagesBasePropTypes {
  params: {
    id: string;
    role: string;
  };
}
