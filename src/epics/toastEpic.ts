import { map } from 'rxjs/internal/operators';

export const ToastEpic = ($action: any) =>
  $action.ofType('update_list')
    .pipe(
      map(() => ({type: 'success_toast'}))
    );
