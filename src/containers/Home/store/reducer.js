import { GET_LIST } from './contants'

export default (state = { name: 'bob', list: [] }, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.payload,
      };
  }
  return state;
}
