import { createActions } from "redux-actions";

export const {
  show: {
    request: showRequest,
    success: showSuccess,
    failure: showFailure
  }
} = createActions({
  SHOW: {
    REQUEST: null,
    SUCCESS: null,
    FAILURE: null
  }
});
