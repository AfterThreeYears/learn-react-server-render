import axios from 'axios';
import { GET_LIST } from './contants';

export function fetchList() {
  return (dispatch) => {
    return axios.get('http://localhost:3000/list')
      .then(data => {
        dispatch({
          type: GET_LIST,
          payload: data.data
        });
      });
  };
}

export function fetchTestList() {
  return (dispatch) => {
    return axios.get('http://localhost:3001/list')
      .then(data => {
        dispatch({
          type: GET_LIST,
          payload: data.data
        });
      });
  };
}