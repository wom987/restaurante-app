
const initialState = {
  userID: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER/SETID":
      return { ...state, userID: action.payload.userId };
    default:
      return initialState;
  }
};
export default  reducer ;