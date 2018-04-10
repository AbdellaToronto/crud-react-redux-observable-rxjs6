export const ToastReducer = (state = {toastType: null, message: ''}, action: {type: string, payload?: any}) => {
  switch (action.type) {
    case 'success_toast':
      return {toastType: 'success', message: 'success'};
    case 'dismiss_toast':
      return {toastType: null, message: ''};
    default:
      return state;
  }
};
