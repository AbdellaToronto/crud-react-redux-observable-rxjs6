import { combineReducers } from 'redux';
import { ListReducer } from './listReducer';
import { ToastReducer } from './toastReducer';
import { CrudReducer } from './crud';

export interface ApplicationState {
  list: any[];
}

export const RootReducer = combineReducers<ApplicationState>({
  list: ListReducer,
  toast: ToastReducer,
  crud: CrudReducer,
});