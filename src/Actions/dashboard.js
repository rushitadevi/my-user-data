export const getUsers = () => {
  return async (dispatch, getState) => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    let jSon = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: jSon,
    });
  };
};

export const getUserById = (id) => {
  return async (dispatch, getState) => {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id,
      {
        method: "GET",
      }
    );
    let jSon = await response.json();
    dispatch({
      type: "GET_USER_BY_ID",
      payload: jSon,
    });
  };
};

export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id,
      {
        method: "DELETE",
      }
    );
    let jSon = await response.json();
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  };
};

export const AddUser = (state) => {
  return async (dispatch, getState) => {
    let url = "https://jsonplaceholder.typicode.com/users/";
    let headers = new Headers({
      "Content-Type": "application/json",
    });

    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(state),
      headers: headers,
    });
    if (response.ok) {
      var jSON = await response.json();
    }
    dispatch({
      type: "ADD_USER",
      payload: jSON,
    });
  };
};

export const updateUser = (id, state) => {
  return async (dispatch, getState) => {
    let url = "https://jsonplaceholder.typicode.com/users/" + id;
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    state.id = id;
    let response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(state),
      headers: headers,
    });
    if (response.ok) {
      var jSON = await response.json();
    }
    dispatch({
      type: "UPDATE_USER",
      payload: jSON,
    });
  };
};
