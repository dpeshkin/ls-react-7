import { createActions } from "redux-actions";

export const {
  search: {
    request: searchRequest,
    success: searchSuccess,
    failure: searchFailure
  }
} = createActions({
  SEARCH: {
    REQUEST: null,
    SUCCESS: null,
    FAILURE: null
  }
});
