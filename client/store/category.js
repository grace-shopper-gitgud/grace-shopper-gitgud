// INITIAL STATE
const selectedCategory = "";

// ACTION TYPES
const CATEGORY_SELECTED = "CATEGORY_SELECTED";

// ACTION CREATORS
export const categorySelected = category => ({
  type: CATEGORY_SELECTED,
  category
});

export default (state = selectedCategory, action) => {
  switch (action.type) {
    case CATEGORY_SELECTED:
      return action.category;
    default:
      return state;
  }
};
