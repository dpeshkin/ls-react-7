import { createActions } from "redux-actions";

// export const { В таком виде тесты не проходит
//   search: {
//     request: searchRequest,
//     success: searchSuccess,
//     failure: searchFailure
//   }
// } = createActions({
//   SEARCH: {
//     REQUEST: null,
//     SUCCESS: null,
//     FAILURE: null
//   }
// });

export const { searchRequest, searchSuccess, searchFailure } = createActions({
  SEARCH_REQUEST: null,
  SEARCH_SUCCESS: null,
  SEARCH_FAILURE: null
});
