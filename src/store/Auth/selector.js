import { createSelector } from 'reselect'

import {FORMS} from "../../constants/formName";

export const stateSelector = state => state;
export const formSelector = state => state.form;

export const authSelector = createSelector(
  formSelector,
  forms => forms?.[FORMS.AUTH.FORM_NAME]?.values
);

export const userSelector = createSelector(
  stateSelector,
  state => state?.auth?.userInfo
);
