import { loadCurrentUSer } from "./currentUserAPI";

export function currentUserReducer(state={}, action) {
  if(action.type === "edit-current-user-name") {
    return {
      name: action.payload.name
    };
  }
  return state;
}

export const initialCurrentUser = {
  name: "Armine Gasparyan",
}

export function SelectName(state) {
    return state.currentUser.name
}

export function editName(newName) {
  return {
    type: "edit-current-user-name",
    payload: {
      name: newName
    }
  };    
}

export function loadUser() {
  return (dispatch, getState) => {
    return loadCurrentUSer().then((loadedUser) => {
      dispatch(editName(loadedUser.name));
    });
  }
}