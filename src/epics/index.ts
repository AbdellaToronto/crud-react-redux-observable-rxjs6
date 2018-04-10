import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { ListUpdatedEpic } from './listEpic';
import { ToastEpic } from './toastEpic';

const rootEpic = combineEpics(ListUpdatedEpic, ToastEpic);

export const epicMiddleware = createEpicMiddleware(rootEpic);