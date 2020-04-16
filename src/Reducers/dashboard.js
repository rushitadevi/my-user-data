export default function (state = {}, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state.users,
        users: action.payload,
      };
    case "DELETE_USER":
      const userToremove = state.users.findIndex(
        (id) => id.id === action.payload
      );
      const filteredItems = state.users.filter(
        (item) => item.id !== userToremove + 1
      );
      return {
        users: filteredItems,
      };
    case "ADD_USER":
      return {
        users: state.users.concat(action.payload),
      };
    case "GET_USER_BY_ID":
      return {
        users: action.payload,
      };
    case "UPDATE_USER":
      const userToupdate = state.users.findIndex(
        (id) => id.id === action.payload.id
      );
      let filteredItems1 = state.users.filter(
        (item) => item.id !== userToupdate + 1
      );
      filteredItems1.push(action.payload);
      filteredItems1.sort();
      filteredItems1.sort((item1, item2) => (item1.id > item2.id) ? 1 : -1)
      return {
        ...state,
        users: [...filteredItems1].sort(),
      };
    default:
      return state;
  }
}
