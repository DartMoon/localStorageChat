import { createSelector } from 'reselect'

export const stateSelector = state => state;
export const formSelector = state => state.form;

export const messageSelector = createSelector(
  formSelector,
  forms => forms?.chat?.values
);

export const chatListSelector = createSelector(
  stateSelector,
  state => state?.chat
);