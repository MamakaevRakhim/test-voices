const initialState = {
  loading: true,
  items: [],
  error: null,
  loadLanguage: [],
};

const voicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "load/voices/pending":
      return {
        ...state,
        loading: true,
      };
    case "load/voices/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "load/voices/rejected":
      return {
        ...state,
        loading: false,
        items: [],
        error: action.error,
      };
    case "one/language/fulfilled":
      return {
        ...state,
        loadLanguage: action.payload,
      };
    default:
      return state;
  }
};
export default voicesReducer;

export const loadVoices = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3013/");
    const json = await response.json();

    dispatch({ type: "load/voices/fulfilled", payload: json });
  };
};

export const loadLanguageId = (language) => {
  return async (dispatch) => {
    await fetch(`http://localhost:3013/${language}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "one/language/fulfilled", payload: data });
      });
  };
};
