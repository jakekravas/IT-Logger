import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG } from "./types";

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

// Add new log
export const addLog = log => async dispatch => {
  try {
    console.log("ADD LOG");
    setLoading();

    // same as axios post
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
  
    dispatch({
      type: ADD_LOG,
      payload: data
    });
    
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
}

// Delete log from server
export const deleteLog = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_LOG,
      payload: id
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