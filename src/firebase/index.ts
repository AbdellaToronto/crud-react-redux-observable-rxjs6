import * as firebase from 'firebase';
import { fromEvent } from 'rxjs/index';
import { filter, map } from 'rxjs/internal/operators';
import { firebaseConfig } from '../env';

firebase.initializeApp(firebaseConfig);

export const todoListRef = fromEvent(firebase.database().ref('/list') as any, 'value').pipe(
  filter(Boolean),
  map(snapshot => snapshot.val())
);

// todo: move this over to an epic
export const updateTodo = (newList: number[]) => firebase.database().ref('/list').set(newList);