import { todoListRef } from '../firebase';
import { map } from 'rxjs/internal/operators';

export const ListUpdatedEpic = () =>
  todoListRef.pipe(
    map(payload => ({
      type: 'update_list',
      payload,
    }))
  );
