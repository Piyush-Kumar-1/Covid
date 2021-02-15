export const initialState = {
  active: null,
  recovered: null,
  deceased: null,
  active7: null,
  recovered7: null,
  deceased7: null,
  data: null,
  recoveredstate: null,
  deceasedstate: null,
  confirmedstate: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        active: action.active,
        recovered: action.recovered,
        deceased: action.deceased,
      };

    case "SET":
      return {
        ...state,
        active7: action.active7,
        recovered7: action.recovered7,
        deceased7: action.deceased7,
      };

    case "SET_STATE":
      return {
        ...state,
        data: action.data,
      };

    case "SET_WEEKLY":
      console.log(action);
      return {
        ...state,
        recoveredstate: action.recoveredstate,
      };

    default:
      return state;
  }
};

export default reducer;
