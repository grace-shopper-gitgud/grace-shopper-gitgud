// INITIAL STATE
const searchTerm = "";

// ACTION TYPES
const SEARCH_BUTTON_PRESSED = "SEARCH_BUTTON_PRESSED";

// ACTION CREATORS
export const searchButtonPressed = searchTerm => ({
  type: SEARCH_BUTTON_PRESSED,
  searchTerm
});

export default (state = searchTerm, action) => {
  switch (action.type) {
    case SEARCH_BUTTON_PRESSED:
      return action.searchTerm;
    default:
      return state;
  }
};
