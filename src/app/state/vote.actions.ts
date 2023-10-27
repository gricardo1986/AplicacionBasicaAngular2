// vote.actions.ts
import { createAction, props } from '@ngrx/store';

export const addVote = createAction('[Vote] Add Vote', props<{ name: string }>());
export const removeVote = createAction('[Vote] Remove Vote', props<{ name: string }>());
