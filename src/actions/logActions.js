import {GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

// export const getLogs = () => {
//   // Redux thunk allows us to do this
//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch("/logs");
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     })
//   }
// }

// Same as above just more concise (with error handling)
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    })
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}