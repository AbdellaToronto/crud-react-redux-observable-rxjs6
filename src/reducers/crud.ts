
export const CrudReducer = (state = {valToSave: 0}, action: {type: string, payload?: any}) => {
  switch (action.type) {
    case 'cache_val':
      return {valToSave: action.payload};
    default:
      return state;
  }
};
