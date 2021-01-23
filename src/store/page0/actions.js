import axios from 'axios';
import actionTypes from './actionTypes';

const getBlogs = function (offset, limit) {
  return async dispatch => {
    const res = await axios.get('/api', {
      params: {
        offset,
        limit
      }
    });

    dispatch({
      type: actionTypes.UPDATE_BLOGS,
      payload: res.data
    });
  };
};

export {
  getBlogs
};
