export const ListReducer = (state = [], action: {type: string, payload?: any}) => {
  switch (action.type) {
    case 'update_list':
      return action.payload;
    default:
      return state;
  }
};
